import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { PieCountdown } from "./pie"

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

const CarouselBackground = styled.div`
  display: contents;
  background: var(--feature);
  @media (min-width: 600px) {
  }
`

const AnotherDiv = styled.div`
  @media (min-width: 600px) {
    background: var(--feature);
    position: sticky;
    top: 35px;
  }
`

const CarouselContainer = styled.div`
  position: relative;

  @media (min-width: 600px) {
    max-width: 1000px;
    margin: 0 auto;
    top: -35px;
    :hover {
      ${ForwardButton} {
        opacity: 0.7;
      }
    }
  }
`

const CarouselWrapper = styled.div`
  overflow: scroll hidden;
  @supports (contain: paint) {
    scroll-snap-type: x mandatory;
  }
  color-scheme: var(--theme);
`

const ControlButtons = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;

  @media (max-width: 600px) {
    display: none;
  }
`

const ScrollArea = styled.div<{ imageCount: number }>`
  --imageCount: ${({ imageCount }) => imageCount};
  --columnGap: 40px;

  width: calc(
    var(--imageCount) * 100% + (var(--imageCount) - 1) * var(--columnGap)
  );

  display: grid;
  column-gap: var(--columnGap);
  grid-template-columns: repeat(var(--imageCount), 1fr);
`

const Figure = styled.figure`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

const FigCaption = styled.figcaption<{ showPie: boolean }>`
  padding: 12px ${props => (props.showPie !== false ? "40px" : "20px")} 12px 0;
  font-size: 11px;
  text-align: end;
  transition: padding 0.2s;
`

export const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>()
  const scrollRef = useRef<HTMLDivElement>()
  const imageIndex = useRef(0)
  const [showPie, setShowPie] = useState(undefined)
  const [refreshPie, setRefreshPie] = useState(0)

  const autoUpdateID = useRef(undefined)
  const intervalStarted = useRef(false)

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
    containerRef.current.scroll({
      left: (containerRef.current.offsetWidth + 40) * imageIndex.current,
      behavior: "smooth",
    })
  }

  const advanceIndex = () => {
    if (imageIndex.current < scrollRef.current.childElementCount - 1) {
      imageIndex.current += 1
    } else imageIndex.current = 0

    updateScrollPosition()
    setRefreshPie(prevRefreshPie => prevRefreshPie + 1)
  }

  const decreaseIndex = () => {
    if (imageIndex.current > 0) imageIndex.current -= 1
    else imageIndex.current = scrollRef.current.childElementCount - 1
    updateScrollPosition()
  }

  const handleForward = () => {
    stopAutoAdvance()
    advanceIndex()
  }

  const handleBackward = () => {
    stopAutoAdvance()
    decreaseIndex()
  }

  const stopAutoAdvance = () => {
    if (autoUpdateID.current) {
      clearInterval(autoUpdateID.current)
      autoUpdateID.current = undefined
      setShowPie(false)
    }
  }

  const handleWheel = e => {
    // check for horizontal scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 3 && Math.abs(e.deltaX) > 5) {
      stopAutoAdvance()
    }
  }

  const handlePointer = () => {
    stopAutoAdvance()
  }

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft
    const containerWidth = containerRef.current.offsetWidth

    if (scrollLeft % containerWidth === 0) {
      imageIndex.current = scrollLeft / containerWidth
    }
  }

  const startInterval = () => {
    if (!showPie && !intervalStarted.current) {
      const prefersReducedMotion = matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      if (!prefersReducedMotion) {
        autoUpdateID.current = setInterval(advanceIndex, 5000)
        intervalStarted.current = true
        setShowPie(true)
      }
    }
  }

  useEffect(() => {
    handleScroll()
    addEventListener("resize", updateScrollPosition)

    return () => {
      clearInterval(autoUpdateID.current)
      removeEventListener("resize", updateScrollPosition)
    }
  }, [])

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleBackward()
    else if (e.key === "ArrowRight") handleForward()
  }

  useEffect(() => {
    addEventListener("keyup", handleKeyUp)
    return () => {
      removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <CarouselBackground>
      <AnotherDiv>
        <CarouselContainer>
          <CarouselWrapper
            tabIndex={0}
            ref={containerRef}
            onWheel={handleWheel}
            onScroll={handleScroll}
            onPointerDown={handlePointer}
          >
            <ScrollArea ref={scrollRef} imageCount={4}>
              <Figure>
                <FigCaption showPie={showPie}>
                  <span className="bold">Client:</span> North Somerset Council -
                  Portishead Marina
                </FigCaption>
                <StaticImage
                  src="../images/content/kport-bluesky.jpg"
                  alt="Detail of the K:Port timber structure with photovoltaic panels casting shadows"
                  loading="eager"
                  layout="constrained"
                  style={{ maxHeight: "70vh" }}
                  onLoad={startInterval}
                  width={1000}
                />
              </Figure>
              <Figure>
                <FigCaption showPie={showPie}>
                  <span className="bold">Client:</span> Transport for London -
                  Woolwich, London
                </FigCaption>
                <StaticImage
                  src="../images/content/kport-1.jpg"
                  alt="Detail of the K:Port timber structure with integrated LED lighting panels"
                  loading="eager"
                  layout="constrained"
                  style={{ maxHeight: "70vh" }}
                  onLoad={startInterval}
                  width={1000}
                />
              </Figure>
              <Figure>
                <FigCaption showPie={showPie}>
                  <span className="bold">Client:</span> Transport for London -
                  Woolwich, London
                </FigCaption>
                <StaticImage
                  src="../images/content/kport-2.jpg"
                  alt="Detail of the K:Port timber structure, photovoltaic panels and integrated lighting"
                  loading="eager"
                  layout="constrained"
                  style={{ maxHeight: "70vh" }}
                  onLoad={startInterval}
                  width={1000}
                />
              </Figure>
              <Figure>
                <FigCaption showPie={showPie}>
                  <span className="bold">Client:</span> Transport for London -
                  Woolwich, London
                </FigCaption>
                <StaticImage
                  src="../images/content/kport-3.jpg"
                  alt="Detail of the K:Port timber structure, photovoltaic panels and rain water drainage chains"
                  loading="eager"
                  layout="constrained"
                  style={{ maxHeight: "70vh" }}
                  onLoad={startInterval}
                  width={1000}
                />
              </Figure>
            </ScrollArea>
          </CarouselWrapper>
          <ControlButtons>
            <BackButton aria-label="Previous image" onClick={handleBackward}>
              {nextArrow}
            </BackButton>
            <ForwardButton aria-label="Next image" onClick={handleForward}>
              {nextArrow}
            </ForwardButton>
          </ControlButtons>
          {showPie && <PieCountdown refreshPie={refreshPie} />}
        </CarouselContainer>
      </AnotherDiv>
    </CarouselBackground>
  )
}
