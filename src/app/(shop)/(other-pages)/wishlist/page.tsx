'use client'

import React from 'react'
import { Link } from '@/shared/link'

const WishlistPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <h1 className="text-3xl font-bold sm:text-4xl">Your Wishlist</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Save items you love and buy them later.
                </p>
            </header>
            <div className="mt-12 text-center py-20 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-700">
                <svg className="mx-auto h-12 w-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="mt-4 text-neutral-500">Your wishlist is empty.</p>
                <Link href="/shop" className="mt-4 inline-block font-medium text-primary-600 hover:text-primary-500 border-b-2 border-primary-600">
                    Discover Products
                </Link>
            </div>
        </div>
    )
}

export default WishlistPage
