'use client'

import React from 'react'
import { useWishList } from '@/context/WishListContext'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/data/data'

const WishlistPage = () => {
  const { wishList } = useWishList()
  const [favoriteProducts, setFavoriteProducts] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  

  React.useEffect(() => {
    const fetchFavoriteProducts = async () => {
      const products = await getProducts()
      const favoriteProducts = products.filter((product) => wishList.includes(product.id?.toString() || ''))
      setFavoriteProducts(favoriteProducts)
      setIsLoading(false)
    }
    fetchFavoriteProducts()
  }, [wishList])

  return (
    <div className ="container py-10 lg:py-20">
        <header className="mb-12 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="text-3xl font-semibold">My Wishlist</h1>
        </header>   
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {wishList.length} {wishList.length === 1 ? 'item' : 'items'} in your wishlist
        </span>
        <header />
        {favoriteProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <div className="mt-6 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">Your wishlist is empty</p>
          </div>
        )}
    </div>
  )
}
export default WishlistPage