'use client'

import React from 'react'

const TermsPage = () => {
    return (
        <div className="container py-16 lg:py-24 font-sans leading-relaxed">
            <header className="max-w-2xl bg-neutral-900 text-white p-12 rounded-3xl mb-16">
                <h1 className="text-4xl font-black uppercase tracking-tighter">Terms of Service</h1>
                <p className="mt-4 text-neutral-400 font-medium">
                    Effective Date: February 23, 2026
                </p>
            </header>
            <div className="space-y-16 max-w-4xl">
                <section className="border-l-4 border-primary-600 pl-8">
                    <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">1. Acceptance of Terms</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">By accessing and using the mak.Indus website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                </section>
                <section className="border-l-4 border-neutral-200 dark:border-neutral-800 pl-8">
                    <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">2. Use License</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">Permission is granted to temporarily download one copy of the materials (information or software) on mak.Indus's website for personal, non-commercial transitory viewing only.</p>
                </section>
                <section className="border-l-4 border-primary-600 pl-8 text-neutral-600 dark:text-neutral-400">
                    <h2 className="text-2xl font-bold uppercase tracking-wide mb-6 text-neutral-900 dark:text-neutral-100">3. Disclaimer</h2>
                    <p>The materials on mak.Indus's website are provided on an 'as is' basis. mak.Indus makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
                </section>
            </div>
        </div>
    )
}

export default TermsPage
