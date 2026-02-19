'use client'

import { useCartStore } from '@/store/cartStore'
import Prices from '@/components/Prices'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { Coordinate01Icon, InformationCircleIcon, PaintBucketIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { useCheckout } from './CheckoutContext'

// ... (other imports remain, but I'll need to specify them if I use replace_file_content on a block that includes imports. 
// Since CheckoutSummary.tsx is relatively small, I can replace the whole logic part or imports + component.)

export default function CheckoutSummary() {
    const { items, getTotalPrice, removeItem, clearCart } = useCartStore()
    const { data: checkoutData } = useCheckout()
    const [mounted, setMounted] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-full lg:w-[36%]">
                <h3 className="text-lg font-semibold">Order summary</h3>
                <div className="py-10 text-center">
                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                </div>
            </div>
        )
    }

    const subtotal = getTotalPrice()
    const shipping = 0
    const tax = subtotal * 0.1 // Example tax
    const total = subtotal + shipping + tax

    const handleCheckout = async () => {
        if (items.length === 0) {
            toast.error('Your cart is empty')
            return
        }

        if (!checkoutData.contactInfo.email || !checkoutData.shippingAddress.address) {
            toast.error('Please fill in your contact and shipping information')
            return
        }

        setIsLoading(true)

        try {
            const orderData = {
                customerName: `${checkoutData.shippingAddress.firstName} ${checkoutData.shippingAddress.lastName}`,
                customerEmail: checkoutData.contactInfo.email,
                customerPhone: checkoutData.contactInfo.phone,
                shippingAddress: {
                    street: checkoutData.shippingAddress.address,
                    city: checkoutData.shippingAddress.city,
                    state: checkoutData.shippingAddress.state,
                    postalCode: checkoutData.shippingAddress.postalCode,
                    country: checkoutData.shippingAddress.country,
                },
                items: items,
                subtotal,
                shipping,
                tax,
                total,
            }

            const response = await fetch('/api/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            })

            const data = await response.json()

            if (response.ok) {
                toast.success(`Order placed successfully! Order #${data.orderNumber}`)
                clearCart() // Clear the cart after successful order
                window.location.href = `/order-successful?orderNumber=${data.orderNumber}`
            } else {
                toast.error(data.error || 'Failed to place order')
            }
        } catch (error) {
            console.error('Error placing order:', error)
            toast.error('An error occurred while placing your order')
        } finally {
            setIsLoading(false)
        }
    }

    const renderProduct = (product: any) => {
        const { image, price, name, handle, id, size, color, quantity } = product

        return (
            <div key={id} className="relative flex py-8 first:pt-0 last:pb-0 sm:py-10 xl:py-12">
                <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:w-32">
                    {image?.src && (
                        <Image
                            fill
                            src={image.src}
                            alt={image.alt || name}
                            sizes="300px"
                            className="object-contain object-center"
                        />
                    )}
                    <Link href={'/products/' + handle} className="absolute inset-0"></Link>
                </div>

                <div className="ml-3 flex flex-1 flex-col sm:ml-6">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex-[1.5]">
                                <h3 className="text-base font-semibold">
                                    <Link href={'/products/' + handle}>{name}</Link>
                                </h3>
                                <div className="mt-1.5 flex text-sm text-neutral-600 sm:mt-2.5 dark:text-neutral-300">
                                    <div className="flex items-center gap-x-2">
                                        <HugeiconsIcon icon={PaintBucketIcon} size={16} color="currentColor" strokeWidth={1.5} />
                                        <span>{color}</span>
                                    </div>
                                    <span className="mx-4 border-l border-neutral-200 dark:border-neutral-700"></span>
                                    <div className="flex items-center gap-x-2">
                                        <HugeiconsIcon icon={Coordinate01Icon} size={16} color="currentColor" strokeWidth={1.5} />
                                        <span>{size}</span>
                                    </div>
                                </div>

                                <div className="relative mt-3 flex w-full justify-between sm:hidden">
                                    <span className="text-sm">Qty: {quantity}</span>
                                    <Prices contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full" price={price || 0} />
                                </div>
                            </div>

                            <div className="hidden flex-1 justify-end sm:flex">
                                <Prices price={price * quantity || 0} className="mt-0.5" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto flex items-end justify-between pt-4 text-sm">
                        <div className="hidden sm:block">
                            <span className="text-sm">Qty: {quantity}</span>
                        </div>

                        {/* 
            <button 
                onClick={() => removeItem(id)}
                className="relative z-10 mt-3 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              <span>Remove</span>
            </button> 
            */}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full lg:w-[36%]">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-neutral-200/70 dark:divide-neutral-700">
                {items.length === 0 ? (
                    <div className="py-10 text-center text-neutral-500">Your cart is empty</div>
                ) : (
                    items.map(renderProduct)
                )}
            </div>

            <div className="mt-10 border-t border-neutral-200/70 pt-6 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">

                {/* Discount code form could go here */}

                <div className="mt-4 flex justify-between py-2.5">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between py-2.5">
                    <span>Shipping estimate</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                        ${shipping.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between py-2.5">
                    <span>Tax estimate</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 text-base font-semibold text-neutral-900 dark:text-neutral-200">
                    <span>Order total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <ButtonPrimary
                className="mt-8 w-full"
                onClick={handleCheckout}
                disabled={isLoading || items.length === 0}
            >
                {isLoading ? 'Processing...' : 'Confirm order'}
            </ButtonPrimary>

            <div className="mt-5 flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                <p className="relative block pl-5">
                    <HugeiconsIcon
                        icon={InformationCircleIcon}
                        size={16}
                        color="currentColor"
                        className="absolute top-0.5 -left-1"
                        strokeWidth={1.5}
                    />
                    Learn more{` `}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        className="font-medium text-neutral-900 underline dark:text-neutral-200"
                    >
                        Taxes
                    </Link>
                    <span>
                        {` `}and{` `}
                    </span>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#"
                        className="font-medium text-neutral-900 underline dark:text-neutral-200"
                    >
                        Shipping
                    </Link>
                    {` `} infomation
                </p>
            </div>
        </div>
    )
}
