import React, { useCallback, useEffect, useRef } from "react";
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarouselPicture from "./carouselPicture";

const TWEEN_FACTOR_BASE_OPACITY = 0.7; // Original value = .84
const TWEEN_FACTOR_BASE_SCALE = 0.1; // Original value .52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactorOpacity = useRef(0);
  const tweenFactorScale = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactors = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactorOpacity.current =
      TWEEN_FACTOR_BASE_OPACITY * emblaApi.scrollSnapList().length;
    tweenFactorScale.current =
      TWEEN_FACTOR_BASE_SCALE * emblaApi.scrollSnapList().length;
  }, []);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__img") as HTMLElement;
    });
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue =
            1 - Math.abs(diffToTarget * tweenFactorOpacity.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue =
            1 - Math.abs(diffToTarget * tweenFactorScale.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactors(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactors)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, setTweenFactors, setTweenNodes, tweenOpacity, tweenScale]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <CarouselPicture index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
