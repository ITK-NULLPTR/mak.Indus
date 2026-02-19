'use client'

import { Divider } from '@/components/Divider'
import Heading from '@/components/Heading/Heading'
import Prices from '@/components/Prices'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link01Icon } from '@hugeicons/core-free-icons'

export default function Page() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('orderNumber')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to get order from sessionStorage (the actual order just placed)
    const savedOrder = sessionStorage.getItem('lastOrder')
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder)
      // Verify it matches the order number in URL
      if (parsedOrder.number === orderNumber || !orderNumber) {
        setOrder(parsedOrder)
      }
    }
    setLoading(false)
  }, [orderNumber])

  if (loading) {
    return (
      <div className="container py-24 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4">Loading order details...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container py-24 text-center">
        <Heading>Order not found</Heading>
        <p className="mt-4 text-neutral-500">We couldn't find the details for this order.</p>
        <Link href="/collections/all" className="mt-8 inline-block font-medium text-primary-600">
          Continue Shopping &rarr;
        </Link>
      </div>
    )
  }

  const { products, cost, number, date, shippingAddress, customerName } = order

  return (
    <main className="container pb-24">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-3xl">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary-600">Order success</p>
          <Heading className="mt-4 text-3xl sm:text-4xl">Thank you for your order!</Heading>

          <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
            We appreciate your order, we’re currently processing it. A confirmation email has been sent to your inbox.
          </p>

          <div className="mt-12 bg-neutral-50 p-6 rounded-2xl border border-neutral-100 dark:bg-neutral-800/50 dark:border-neutral-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Order number</dt>
                <dd className="mt-1 text-xl font-bold text-neutral-900 dark:text-white">#{number}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Date placed</dt>
                <dd className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">{date}</dd>
              </div>
            </div>
          </div>

          <ul
            role="list"
            className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200 text-sm dark:divide-neutral-700 dark:border-neutral-700"
          >
            {products.map((product: any) => (
              <li key={product.id} className="flex gap-x-6 py-8">
                <div className="relative h-32 w-24 flex-none overflow-hidden rounded-xl bg-neutral-100 sm:h-40 sm:w-32">
                  {product.featuredImage?.src && (
                    <Image
                      alt={product.title}
                      src={product.featuredImage.src}
                      fill
                      sizes="200px"
                      className="object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-auto flex-col">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      <Link href={'/products/' + product.handle}>{product.title}</Link>
                    </h3>
                    <div className="mt-2 flex items-center gap-x-3 text-neutral-500 dark:text-neutral-400">
                      <span>{product.color}</span>
                      {product.size && <span className="h-4 w-px bg-neutral-300 dark:bg-neutral-600" />}
                      {product.size && <span>Size: {product.size}</span>}
                    </div>
                  </div>
                  <div className="mt-auto flex items-end justify-between">
                    <p className="text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap">Quantity: {product.quantity}</p>
                    <Prices price={product.price} className="text-lg font-bold text-neutral-900 dark:text-white" />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6 border-t border-neutral-200 pt-10 dark:border-neutral-700">
            <div className="flex justify-between text-sm font-medium">
              <dt className="text-neutral-500 dark:text-neutral-400">Subtotal</dt>
              <dd className="text-neutral-900 dark:text-white">${cost.subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <dt className="text-neutral-500 dark:text-neutral-400">Shipping</dt>
              <dd className="text-neutral-900 dark:text-white">${cost.shipping.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <dt className="text-neutral-500 dark:text-neutral-400">Taxes</dt>
              <dd className="text-neutral-900 dark:text-white">${cost.tax.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between pt-6">
              <dt className="text-xl font-bold text-neutral-900 dark:text-white">Order Total</dt>
              <dd className="text-2xl font-bold text-primary-600">${cost.total.toFixed(2)}</dd>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 dark:bg-neutral-800/30 dark:border-neutral-700">
              <dt className="text-sm font-bold text-neutral-900 uppercase tracking-widest dark:text-white">Shipping Address</dt>
              <dd className="mt-4 text-neutral-600 dark:text-neutral-300">
                <address className="not-italic leading-relaxed">
                  <span className="block font-semibold text-neutral-900 dark:text-white">{customerName}</span>
                  <span className="block mt-1">{shippingAddress.address}</span>
                  <span className="block">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}</span>
                  <span className="block">{shippingAddress.country}</span>
                </address>
              </dd>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 dark:bg-neutral-800/30 dark:border-neutral-700">
              <dt className="text-sm font-bold text-neutral-900 uppercase tracking-widest dark:text-white">Shipping Method</dt>
              <dd className="mt-4 text-neutral-600 dark:text-neutral-300">
                <p className="font-medium text-neutral-900 dark:text-white">Standard Shipping</p>
                <p className="mt-1 italic">Takes up to 3-5 working days</p>
              </dd>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-neutral-200 pt-10 dark:border-neutral-700">
            <Link
              href="/"
              className="w-full sm:w-auto text-center px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Back to Home
            </Link>
            <Link href="/collections/all" className="text-sm font-bold text-neutral-900 flex items-center gap-2 group dark:text-white">
              <HugeiconsIcon icon={Link01Icon} size={18} className="group-hover:rotate-45 transition-transform" />
              <span>CONTINUE SHOPPING</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
