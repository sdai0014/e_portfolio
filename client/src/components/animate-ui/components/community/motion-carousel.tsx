'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

type EmblaControls = {
  selectedIndex: number;
  scrollSnaps: number[];
  prevDisabled: boolean;
  nextDisabled: boolean;
  onDotClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

type DotButtonProps = {
  selected?: boolean;
  label: string;
  onClick: () => void;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (
  emblaApi: EmblaCarouselType | undefined,
): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on('reInit', onInit).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-6 [--slide-spacing:0.9rem] [--slide-size:88%] sm:[--slide-size:78%] md:[--slide-size:58%] xl:[--slide-size:42%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={index}
                className="mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
                initial={false}
                animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.5 }}
                transition={transition}
              >
                {slide}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex w-[var(--slide-size)] max-w-full items-center justify-between gap-3 sm:gap-4">
        <button
          onClick={onPrev}
          disabled={prevDisabled}
          className="border-[3px] border-black px-2 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_black] transition-all duration-100 hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#F24405] disabled:pointer-events-none disabled:opacity-30 dark:border-white dark:text-white sm:px-2.5 sm:text-sm"
        >
          <ChevronLeft className="size-4.5 sm:size-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              label={`${index + 1}`}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="border-[3px] border-black px-2 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_black] transition-all duration-100 hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#F24405] disabled:pointer-events-none disabled:opacity-30 dark:border-white dark:text-white sm:px-2.5 sm:text-sm"
        >
          <ChevronRight className="size-4.5 sm:size-5" />
        </button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center border-[2px] border-black dark:border-white font-black text-xs"
      animate={{
        width: selected ? 48 : 12,
        height: 12,
        backgroundColor: selected ? '#F24405' : 'transparent',
        borderColor: selected ? '#F24405' : '#000000',
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap text-white"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export { MotionCarousel };
