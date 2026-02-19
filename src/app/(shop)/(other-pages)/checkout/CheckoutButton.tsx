'use client'

import { TCardProduct } from '@/data/data'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import { useState } from 'react'
import toast from 'react-hot-toast'

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

    const handleCheckout = async () => {
        setIsLoading(true)

        try {
            // Get form data from the page
            // In a real implementation, you would collect this from the form
            // For now, using placeholder data
            const orderData = {
                customerName: 'Cole Enrico', // This should come from the form
                customerEmail: 'customer@example.com', // This should come from the form
                customerPhone: '+808 xxx', // This should come from the form
                shippingAddress: {
                    street: '123, Dream Avenue',
                    city: 'Norris',
                    state: 'Texas',
                    postalCode: '2500',
                    country: 'United States',
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
