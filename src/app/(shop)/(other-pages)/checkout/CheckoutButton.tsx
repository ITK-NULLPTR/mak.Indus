'use client'

import { TCardProduct } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useCheckout } from './CheckoutContext'

interface CheckoutButtonProps {
    cart: {
        lines: TCardProduct[]
        cost: {
            subtotal: number
            shipping: number
            tax: number
            total: number
        }
    }
}

export default function CheckoutButton({ cart }: CheckoutButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const { data: checkoutData } = useCheckout()

    const handleCheckout = async () => {
        setIsLoading(true)

        try {
            const orderData = {
                customerName: `${checkoutData.shippingAddress.firstName} ${checkoutData.shippingAddress.lastName}`,
                customerEmail: checkoutData.contactInfo.email,
                customerPhone: checkoutData.contactInfo.phone,
                shippingAddress: {
                    street: `${checkoutData.shippingAddress.address}${checkoutData.shippingAddress.aptSuite ? ', ' + checkoutData.shippingAddress.aptSuite : ''}`,
                    city: checkoutData.shippingAddress.city,
                    state: checkoutData.shippingAddress.state,
                    postalCode: checkoutData.shippingAddress.postalCode,
                    country: checkoutData.shippingAddress.country,
                },
                items: cart.lines,
                subtotal: cart.cost.subtotal,
                shipping: cart.cost.shipping,
                tax: cart.cost.tax,
                total: cart.cost.total,
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

                // Redirect to success page with order number
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

    return (
        <ButtonPrimary
            className="mt-8 w-full"
            onClick={handleCheckout}
            disabled={isLoading}
        >
            {isLoading ? 'Processing...' : 'Confirm order'}
        </ButtonPrimary>
    )
}
