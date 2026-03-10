'use client'

import { TCollection } from '@/data/data'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import CollectionCard3 from './CollectionCard3'
import Heading from './Heading/Heading'

interface Props {
  className?: string
  emblaOptions?: EmblaOptionsType
  collections: TCollection[]
  headingDim?: string
  heading?: string
  categoryHref?: string
}

const SectionCollectionSlider = ({
  className,
  collections,
  headingDim = 'Quality tools are waiting for you',
  heading = 'Discover more',
  emblaOptions = {
    slidesToScroll: 'auto',
  },
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)

  return (
    <div className={'w-full ' + className}>
      <Heading
        className="max-w-350 mx-auto px-4 md:px-10 container mb-12 text-neutral-900 lg:mb-14 dark:text-neutral-50"
        headingDim={headingDim}
        hasNextPrev
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
        onClickPrev={onPrevButtonClick}
        onClickNext={onNextButtonClick}
      >
        {heading}
      </Heading>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-5">
          <div className="w-full px-4 md:px-8>" />
           <div className="max-w-350 mx-auto"></div>
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="max-w-3xl embla__slide basis-10/12 ps-10 sm:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3"
            >
              <CollectionCard3 collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionCollectionSlider
