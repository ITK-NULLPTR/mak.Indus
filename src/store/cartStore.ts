'use client'

import { TCardProduct } from '@/data/data'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore {
    items: TCardProduct[]
    addItem: (item: TCardProduct) => void
    removeItem: (itemId: string) => void
    updateQuantity: (itemId: string, quantity: number) => void
    clearCart: () => void
    getTotalQuantity: () => number
    getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const existingItem = state.items.find((i) => i.id === item.id)

                    if (existingItem) {
                        // If item exists, increase quantity
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id
                                    ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) }
                                    : i
                            ),
                        }
                    }

                    // Add new item
                    return {
                        items: [...state.items, { ...item, quantity: item.quantity || 1 }],
                    }
                }),

            removeItem: (itemId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId),
                })),

            updateQuantity: (itemId, quantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === itemId ? { ...item, quantity } : item
                    ),
                })),

            clearCart: () => set({ items: [] }),

            getTotalQuantity: () => {
                const state = get()
                return state.items.reduce((total, item) => total + (item.quantity || 1), 0)
            },

            getTotalPrice: () => {
                const state = get()
                return state.items.reduce(
                    (total, item) => total + (item.price || 0) * (item.quantity || 1),
                    0
                )
            },
        }),
        {
            name: 'cart-storage', // localStorage key
        }
    )
)
