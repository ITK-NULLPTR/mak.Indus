import Breadcrumb from '@/shared/Breadcrumb'
import { Metadata } from 'next'
import CartContent from './CartContent'

export const metadata: Metadata = {
  title: 'Cart Page',
  description: 'Effective cart page for your e-commerce website',
}

const CartPage = () => {
  return (
    <div className="nc-CartPage">
      <main className="container py-16 lg:pt-20 lg:pb-28">
        <div className="mb-12 sm:mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">Shopping Cart</h2>
          <Breadcrumb breadcrumbs={[{ id: 1, name: 'Home', href: '/' }]} currentPage="Shopping Cart" className="mt-5" />
        </div>

        <hr className="my-10 border-neutral-200 xl:my-12 dark:border-neutral-700" />

        <CartContent />
      </main>
    </div>
  )
}

export default CartPage
