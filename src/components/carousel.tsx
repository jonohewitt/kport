import { StaticImage } from "gatsby-plugin-image"
import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  WheelEvent,
} from "react"
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

  @media (hover: hover) {
    :hover {
      opacity: 0.8 !important;
      svg {
        height: 35px;
        width: 35px;
      }
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
  background: ${({ theme }) => theme.feature};
`

const AnotherDiv = styled.div`
  background: ${({ theme }) => theme.feature};

  @media (min-width: 1000px) {
    position: sticky;
    top: 35px;
  }
`

const CarouselContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background};
  @media (min-width: 600px) {
    max-width: 1000px;
    margin: 0 auto;
    top: -35px;
    @media (hover: hover) {
      :hover {
        ${ForwardButton} {
          opacity: 0.7;
        }
      }
    }
  }
`

const CarouselWrapper = styled.div`
  overflow: scroll hidden;
  @supports (contain: paint) {
    scroll-snap-type: x mandatory;
  }
  color-scheme: ${({ theme }) => theme.theme};
`

const ControlButtons = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  @media (min-width: 1180px) {
    width: calc(100% + 160px);
    left: -80px;
    ${ForwardButton} {
      filter: unset;
      svg {
        stroke: ${({ theme }) => theme.text};
      }
    }
    @media (min-width: 1300px) {
      width: calc(100% + 200px);
      left: -100px;
    }
  }
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

const FigCaption = styled.figcaption<{ showPie: boolean | undefined }>`
  padding: 12px ${props => (props.showPie !== false ? "40px" : "20px")} 12px 0;
  font-size: 11px;
  text-align: end;
  transition: padding 0.2s;
`

export const Carousel = () => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>
  const imageIndex = useRef(0)
  const [showPie, setShowPie] = useState<boolean | undefined>(undefined)
  const [refreshPie, setRefreshPie] = useState(0)

  const autoUpdateID = useRef<NodeJS.Timer | undefined>(undefined)
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
    const prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    containerRef.current.scroll({
      left: (containerRef.current.offsetWidth + 40) * imageIndex.current,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft
    const containerWidth = containerRef.current.offsetWidth

    if (scrollLeft % containerWidth === 0) {
      imageIndex.current = scrollLeft / containerWidth
    }
  }

  const checkAndUpdateCarousel = () => {
    handleScroll()
    updateScrollPosition()
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

  const startAutoAdvance = () => {
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

  const stopAutoAdvance = () => {
    if (autoUpdateID.current) {
      containerRef.current.removeEventListener("wheel", handleWheel, {
        passive: true,
      })

      removeEventListener("focus", checkAndUpdateCarousel)

      clearInterval(autoUpdateID.current)
      autoUpdateID.current = undefined
      setShowPie(false)
    }
  }

  const handleWheel = (e: WheelEvent) => {
    // check for horizontal scroll
    if (
      autoUpdateID.current &&
      Math.abs(e.deltaX) > Math.abs(e.deltaY) * 3 &&
      Math.abs(e.deltaX) > 5
    ) {
      stopAutoAdvance()
    }
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleBackward()
    else if (e.key === "ArrowRight") handleForward()
  }

  useEffect(() => {
    checkAndUpdateCarousel()
    addEventListener("resize", updateScrollPosition)
    addEventListener("focus", checkAndUpdateCarousel)
    addEventListener("keyup", handleKeyUp)
    containerRef.current.addEventListener("wheel", handleWheel, {
      passive: true,
    })
    containerRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    })
    return () => {
      clearInterval(autoUpdateID.current as NodeJS.Timer)
      removeEventListener("resize", updateScrollPosition)

      removeEventListener("keyup", handleKeyUp)
      if (autoUpdateID.current) {
        containerRef.current.removeEventListener("wheel", handleWheel, {
          passive: true,
        })
        containerRef.current.removeEventListener("scroll", handleScroll, {
          passive: true,
        })
        removeEventListener("focus", checkAndUpdateCarousel)
      }
    }
  }, [])

  return (
    <CarouselBackground>
      <AnotherDiv>
        <CarouselContainer>
          <CarouselWrapper
            tabIndex={0}
            ref={containerRef}
            onPointerDown={stopAutoAdvance}
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
                  onLoad={startAutoAdvance}
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
                  onLoad={startAutoAdvance}
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
                  onLoad={startAutoAdvance}
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
                  onLoad={startAutoAdvance}
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
