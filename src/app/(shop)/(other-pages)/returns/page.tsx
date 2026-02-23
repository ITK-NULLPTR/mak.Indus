'use client'

import React from 'react'

const ReturnsPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <h1 className="text-3xl font-bold sm:text-4xl">Returns & Exchanges</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Not satisfied with your purchase? No worries. We make returns easy.
                </p>
            </header>
            <div className="mt-12 space-y-10 prose prose-neutral dark:prose-invert max-w-none">
                <section>
                    <h2 className="text-xl font-bold">Return Policy</h2>
                    <p>You have 30 days from the date of delivery to return any item for a full refund or exchange. Items must be in their original condition and packaging.</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold">How to Start a Return</h2>
                    <ol className="list-decimal pl-5">
                        <li>Log in to your account and go to Order History.</li>
                        <li>Select the order and items you want to return.</li>
                        <li>Print your prepaid return label and drop it off at any authorized shipping center.</li>
                    </ol>
                </section>
            </div>
        </div>
    )
}

export default ReturnsPage
