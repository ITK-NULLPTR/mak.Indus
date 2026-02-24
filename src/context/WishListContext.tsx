"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface WishListContextType {
    wishList: string[];
    addToWishList: (item: string) => void;
    removeFromWishList: (item: string) => void;
    toggleWishListItem: (productId: string) => void;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider = ({ children }: { children: ReactNode }) => {
    const [wishList, setWishList] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('local-wishList');
        if (saved) setWishList(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('local-wishList', JSON.stringify(wishList));
    }, [wishList]);

    const toggleWishListItem = (productId: string) => {
        setWishList((prev) => {
            return prev.find(item => item === productId)
                ? prev.filter(item => item !== productId)
                : [...prev, productId]
        });
    }

    const addToWishList = (item: string) => {
        setWishList((prev) => prev.includes(item) ? prev : [...prev, item]);
    }

    const removeFromWishList = (item: string) => {
        setWishList((prev) => prev.filter(i => i !== item));
    }

    return (
        <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList, toggleWishListItem }}>
            {children}
        </WishListContext.Provider>
    );
}

export const useWishList = () => {
    const context = useContext(WishListContext);
    if (!context) {
        throw new Error('useWishList must be used within WishListProvider');
    }
    return context;
}