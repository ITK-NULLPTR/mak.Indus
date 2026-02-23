'use client'

import React from 'react'

const RefundPolicyPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest mb-6">Policy</div>
                <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Refund Policy</h1>
                <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">
                    We want you to be completely satisfied with your purchase. Here is how we handle refunds.
                </p>
            </header>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-sm">01</span>
                        Eligibility
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-sm">02</span>
                        Process
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-sm">03</span>
                        Late Refunds
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicyPage
