'use client'

import React from 'react'
import { Link } from '@/shared/link'

const OrderHistoryPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <h1 className="text-3xl font-bold sm:text-4xl">Order History</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Check the status of recent orders and manage your returns.
                </p>
            </header>
            <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700">
                <div className="p-8 text-center text-neutral-500">
                    <p>You haven't placed any orders yet.</p>
                    <Link href="/shop" className="mt-4 inline-block font-medium text-primary-600 hover:text-primary-500">
                        Start Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryPage
