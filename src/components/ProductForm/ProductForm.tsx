'use client'

import { NotifyAddToCart } from '@/components/AddToCardButton'
import { TProductDetail } from '@/data/data'
import { useCartStore } from '@/store/cartStore'
import Form from 'next/form'
import React from 'react'
import toast from 'react-hot-toast'

const ProductForm = ({
  children,
  className,
  product,
}: {
  children?: React.ReactNode
  className?: string
  product: TProductDetail
}) => {
  const { addItem } = useCartStore()
  const { featuredImage, title, price, id, handle } = product

  const notifyAddTocart = (quantity: number, size: string, color: string) => {
    toast.custom(
      (t) => (
        <NotifyAddToCart
          show={t.visible}
          imageUrl={featuredImage?.src || ''}
          quantity={quantity}
          size={size}
          color={color}
          title={title!}
          price={price!}
        />
      ),
      { position: 'top-right', id: 'nc-product-notify', duration: 4000 }
    )
  }

  const onFormSubmit = async (formData: FormData) => {
    const quantity = formData.get('quantity') ? Number(formData.get('quantity')) : 1
    const size = formData.get('size') ? String(formData.get('size')) : ''
    const color = formData.get('color') ? String(formData.get('color')) : ''

    // Add to cart store
    addItem({
      id: id || Math.random().toString(),
      name: title,
      price: price,
      image: featuredImage ? {
        src: featuredImage.src,
        alt: featuredImage.alt || title || '',
        width: featuredImage.width || 0,
        height: featuredImage.height || 0
      } : undefined,
      quantity,
      size,
      color,
      handle,
    })

    notifyAddTocart(quantity, size, color)

    console.log('Added to cart:', {
      productId: id,
      quantity,
      size,
      color,
      name: title
    })
  }

  return (
    <Form action={onFormSubmit} className={className}>
      {children}
    </Form>
  )
}

export default ProductForm
