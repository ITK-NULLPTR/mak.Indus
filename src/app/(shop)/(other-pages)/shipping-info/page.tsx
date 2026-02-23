'use client'

import React from 'react'

const ShippingInfoPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <h1 className="text-3xl font-bold sm:text-4xl">Shipping Information</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Everything you need to know about our global delivery services.
                </p>
            </header>
            <div className="mt-12 space-y-10 prose prose-neutral dark:prose-invert max-w-none">
                <section>
                    <h2 className="text-xl font-bold">Standard Delivery</h2>
                    <p>We offer standard delivery to all major locations. Typically, orders arrive within 3-5 business days. All orders are tracked.</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold">International Shipping</h2>
                    <p>mak.Indus ships worldwide. International shipping times vary between 7-14 days depending on the destination and customs processing.</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold">Shipping Costs</h2>
                    <ul className="list-disc pl-5">
                        <li>Orders over $100: FREE Standard Shipping</li>
                        <li>Orders under $100: $9.95 flat rate</li>
                        <li>Express Delivery: $19.95</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default ShippingInfoPage
