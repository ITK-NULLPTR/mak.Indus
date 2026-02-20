'use client'

import Heading from '@/components/Heading/Heading'
import { TProductItem } from '@/data/data'
import { FC } from 'react'
import ProductCard from './ProductCard'

export interface SectionGridProductsProps {
  className?: string
  heading?: string
  headingFontClassName?: string
  headingClassName?: string
  subHeading?: string
  data: TProductItem[]
}

const SectionGridProducts: FC<SectionGridProductsProps> = ({
  className = '',
  headingFontClassName,
  headingClassName,
  heading,
  subHeading = 'Premium Kitchen & Gardening Tools',
  data,
}) => {
  // Take only first 4 products for Best Sellers
  const displayProducts = data.slice(0, 4)

  return (
    <div className={`nc-SectionGridProducts ${className}`}>
      <Heading
        className={headingClassName}
        fontClass={headingFontClassName}
        headingDim={subHeading}
      >
        {heading || 'New Arrivals'}
      </Heading>

      {/* Grid: 2 products on mobile, 4 products on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default SectionGridProducts
