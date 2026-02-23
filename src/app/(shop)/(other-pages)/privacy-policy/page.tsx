'use client'

import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl border-b border-neutral-200 dark:border-neutral-800 pb-10">
                <h1 className="text-3xl font-bold sm:text-4xl text-neutral-900 dark:text-neutral-100">Privacy Policy</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Last updated: February 23, 2026
                </p>
            </header>
            <div className="mt-12 space-y-10 prose prose-neutral dark:prose-invert max-w-none">
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 italic">1. Introduction</h2>
                    <p>Welcome to mak.Indus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 italic">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-8 mt-4 space-y-2">
                        <li>Identity Data: Name, username.</li>
                        <li>Contact Data: Email address, phone number.</li>
                        <li>Financial Data: Payment card details.</li>
                        <li>Transaction Data: Details about payments to and from you.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 italic">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you.</p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage
