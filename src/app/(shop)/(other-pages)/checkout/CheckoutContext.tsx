'use client'

import React, { createContext, useContext, useState } from 'react'

interface CheckoutData {
    contactInfo: {
        email: string
        phone: string
    }
    shippingAddress: {
        firstName: string
        lastName: string
        address: string
        aptSuite: string
        city: string
        country: string
        state: string
        postalCode: string
    }
    paymentMethod: 'Credit-Card' | 'Internet-banking' | 'Wallet' | 'Cash-on-Delivery'
}

interface CheckoutContextType {
    data: CheckoutData
    updateContactInfo: (info: CheckoutData['contactInfo']) => void
    updateShippingAddress: (address: CheckoutData['shippingAddress']) => void
    updatePaymentMethod: (method: CheckoutData['paymentMethod']) => void
    isStepValid: (step: 'ContactInfo' | 'ShippingAddress' | 'PaymentMethod') => boolean
}

const defaultData: CheckoutData = {
    contactInfo: { email: '', phone: '' },
    shippingAddress: {
        firstName: '',
        lastName: '',
        address: '',
        aptSuite: '',
        city: '',
        country: '',
        state: '',
        postalCode: '',
    },
    paymentMethod: 'Credit-Card',
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<CheckoutData>(defaultData)

    const updateContactInfo = (info: CheckoutData['contactInfo']) => {
        setData((prev) => ({ ...prev, contactInfo: info }))
    }

    const updateShippingAddress = (address: CheckoutData['shippingAddress']) => {
        setData((prev) => ({ ...prev, shippingAddress: address }))
    }

    const updatePaymentMethod = (method: CheckoutData['paymentMethod']) => {
        setData((prev) => ({ ...prev, paymentMethod: method }))
    }

    const isStepValid = (step: 'ContactInfo' | 'ShippingAddress' | 'PaymentMethod') => {
        switch (step) {
            case 'ContactInfo':
                return !!data.contactInfo.email && !!data.contactInfo.phone
            case 'ShippingAddress':
                return !!data.shippingAddress.address && !!data.shippingAddress.city
            case 'PaymentMethod':
                return !!data.paymentMethod
            default:
                return false
        }
    }

    return (
        <CheckoutContext.Provider
            value={{
                data,
                updateContactInfo,
                updateShippingAddress,
                updatePaymentMethod,
                isStepValid,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = () => {
    const context = useContext(CheckoutContext)
    if (context === undefined) {
        throw new Error('useCheckout must be used within a CheckoutProvider')
    }
    return context
}
