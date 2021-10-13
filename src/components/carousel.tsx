import { StaticImage } from "gatsby-plugin-image"
import React, { Children, useEffect, useRef } from "react"
import styled from "styled-components"
import { FullWidthCaption } from "../pages"

const ForwardButton = styled.button`
  pointer-events: auto;
  height: 100%;
  width: 80px;
  opacity: 0.4;
  transition: opacity 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 30px;
    width: 30px;
    transition: width 0.2s, height 0.2s;
  }

  :hover {
    opacity: 0.8 !important;
    svg {
      height: 35px;
      width: 35px;
    }
  }

  :active {
    svg {
      height: 32px;
      width: 32px;
    }
  }

  background: none;
  color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  filter: drop-shadow(0 0 10px #000d);
`

const BackButton = styled(ForwardButton)`
  svg {
    transform: rotate(180deg);
  }
`

const ControlButtons = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;

  @media (max-width: 600px) {
    display: none;
  }
`

const CarouselContainer = styled.div`
  margin: 0 auto;
  position: relative;
  :hover {
    ${ForwardButton} {
      opacity: 0.7;
    }
  }
  @media (min-width: 1100px) {
    max-width: 1000px;
  }
`

const HeaderImageContainer = styled.div`
  width: 100%;
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;
  color-scheme: var(--theme);

  /* Hide scrollbar for Chrome, Safari and Opera */
  /* ::-webkit-scrollbar {
    display: none;
  } */
  /* IE and Edge */
  /* -ms-overflow-style: none; */

  /* Firefox */
  /* scrollbar-width: none; */
`

const HeaderImageWrapper = styled.div<{ imageQuantity: number }>`
  width: calc(
    ${props => props.imageQuantity + "00%"} + ${props => props.imageQuantity} *
      40px
  );
  display: grid;
  grid-template-columns: repeat(${props => props.imageQuantity}, 1fr);

  figure {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
    margin-right: 40px;
    :last-of-type {
      padding-right: 0;
    }
  }
`

export const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>()
  const wrapperRef = useRef<HTMLDivElement>()
  const imageIndex = useRef(0)

  let autoUpdateID: NodeJS.Timer

  const nextArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 16 16 12 12 8"></polyline>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  )

  const updateScrollPosition = () => {
    const smoothScrollSupported =
      "scrollBehavior" in document.documentElement.style

    if (smoothScrollSupported) {
      containerRef.current.scroll({
        left: containerRef.current.offsetWidth * imageIndex.current,
        behavior: "smooth",
      })
    } else {
      containerRef.current.scroll({
        left: containerRef.current.offsetWidth * imageIndex.current,
      })
    }
  }

  const advanceIndex = () => {
    if (imageIndex.current < wrapperRef.current.childElementCount - 1) {
      imageIndex.current += 1
    } else imageIndex.current = 0
    updateScrollPosition()
  }

  const decreaseIndex = () => {
    if (imageIndex.current > 0) imageIndex.current -= 1
    else imageIndex.current = wrapperRef.current.childElementCount - 1
    updateScrollPosition()
  }

  const handleForwardClick = () => {
    stopAutoAdvance()
    advanceIndex()
  }

  const handleBackClick = () => {
    stopAutoAdvance()
    decreaseIndex()
  }

  const stopAutoAdvance = () => {
    if (autoUpdateID) clearInterval(autoUpdateID)
  }

  const handleWheel = e => {
    // check for horizontal scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 3 && Math.abs(e.deltaX) > 5) {
      stopAutoAdvance()
    }
  }

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft
    const containerWidth = containerRef.current.offsetWidth

    if (scrollLeft % containerWidth === 0) {
      imageIndex.current = scrollLeft / containerWidth
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("resize", updateScrollPosition)

    const smoothScrollSupported =
      "scrollBehavior" in document.documentElement.style

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    console.log(prefersReducedMotion)
    console.log(smoothScrollSupported)

    if (smoothScrollSupported && !prefersReducedMotion) {
      autoUpdateID = setInterval(advanceIndex, 5000)
    }
    return () => clearInterval(autoUpdateID)
  }, [])

  return (
    <CarouselContainer>
      <HeaderImageContainer
        ref={containerRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        onMouseDown={stopAutoAdvance}
      >
        <HeaderImageWrapper ref={wrapperRef} imageQuantity={4}>
          <figure>
            <StaticImage
              src="../images/content/kport-bluesky.jpg"
              alt="Detail of the K:Port timber structure with photovoltaic panels casting shadows"
              loading="eager"
              layout="constrained"
              style={{ maxHeight: "55vh" }}
              id="header-image-0"
            />
            <FullWidthCaption>
              <span className="bold">Client:</span> North Somerset Council -
              Portishead Marina
            </FullWidthCaption>
          </figure>
          <figure>
            <StaticImage
              src="../images/content/kport-1.jpg"
              alt="Detail of the K:Port timber structure with integrated LED lighting panels"
              loading="lazy"
              layout="constrained"
              style={{ maxHeight: "55vh" }}
              id="header-image-1"
            />
            <FullWidthCaption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </FullWidthCaption>
          </figure>
          <figure>
            <StaticImage
              src="../images/content/kport-2.jpg"
              alt="Detail of the K:Port timber structure, photovoltaic panels and integrated lighting"
              loading="lazy"
              layout="constrained"
              style={{ maxHeight: "55vh" }}
              id="header-image-2"
            />
            <FullWidthCaption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </FullWidthCaption>
          </figure>
          <figure>
            <StaticImage
              src="../images/content/kport-3.jpg"
              alt="Detail of the K:Port timber structure, photovoltaic panels and rain water drainage chains"
              loading="lazy"
              layout="constrained"
              style={{ maxHeight: "55vh" }}
              id="header-image-3"
            />
            <FullWidthCaption>
              <span className="bold">Client:</span> Transport for London -
              Woolwich, London
            </FullWidthCaption>
          </figure>
        </HeaderImageWrapper>
      </HeaderImageContainer>
      <ControlButtons>
        <BackButton aria-label="Previous image" onClick={handleBackClick}>
          {nextArrow}
        </BackButton>
        <ForwardButton aria-label="Next image" onClick={handleForwardClick}>
          {nextArrow}
        </ForwardButton>
      </ControlButtons>
    </CarouselContainer>
  )
}
