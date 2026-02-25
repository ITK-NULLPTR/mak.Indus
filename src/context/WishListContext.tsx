"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect, useRef } from 'react';


interface WishListContextType {
    wishList: string[];
    toggleWishListItem: (productId: string) => void;
    isLiked: (productId: string) => boolean;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider = ({ children }: { children: ReactNode }) => {
    const [wishList, setWishList] = useState<string[]>([]);
    const isLoaded = useRef(false);

    // 1. LocalStorage se data load karna (Sirf pehli baar)
    useEffect(() => {
        const saved = localStorage.getItem('local-wishList');
        if (saved) {
            try { 
                setWishList(JSON.parse(saved)); 
            } catch (error) { 
                console.error('Failed to parse wish list:', error); 
            }
        } 
        isLoaded.current = true;
    }, []);

    // 2. State change hone par LocalStorage update karna
    useEffect(() => {
        if (isLoaded.current) {
            localStorage.setItem('local-wishList', JSON.stringify(wishList));
        }
    }, [wishList]);

    // 3. Toggle Logic (Ismein 'return' lazmi hai)
    const toggleWishListItem = (productId: string) => {
        setWishList((prev) => 
            prev.includes(productId) 
                ? prev.filter(item => item !== productId) 
                : [...prev, productId]
        );
    }

    const isLiked = (productId: string) => wishList.includes(productId);

    return (
        <WishListContext.Provider value={{ wishList, toggleWishListItem, isLiked }}>
            {children}
        </WishListContext.Provider>
    );
}

// 4. Custom Hook (Ye hamesha Provider ke bahar hoga)
export const useWishList = () => {
    const context = useContext(WishListContext);
    if (!context) {
        throw new Error('useWishList must be used within WishListProvider');
    }
    return context;
}