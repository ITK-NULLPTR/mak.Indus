'use client'

import React from 'react'

const AccountPage = () => {
    return (
        <div className="container py-16 lg:py-24">
            <header className="max-w-2xl">
                <h1 className="text-3xl font-bold sm:text-4xl">My Account</h1>
                <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                    Manage your profile, addresses, and view your recent orders.
                </p>
            </header>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700">
                    <h2 className="text-lg font-semibold">Personal Info</h2>
                    <p className="mt-2 text-sm text-neutral-500">Update your name and email address.</p>
                    <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500">Edit Profile</button>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700">
                    <h2 className="text-lg font-semibold">Shipping Address</h2>
                    <p className="mt-2 text-sm text-neutral-500">Manage your primary delivery location.</p>
                    <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500">Add Address</button>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700">
                    <h2 className="text-lg font-semibold">Security</h2>
                    <p className="mt-2 text-sm text-neutral-500">Adjust your password and login settings.</p>
                    <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500">Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default AccountPage
