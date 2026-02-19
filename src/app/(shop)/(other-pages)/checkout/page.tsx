import Breadcrumb from '@/shared/Breadcrumb'
import { Metadata } from 'next'
import CheckoutSummary from './CheckoutSummary'
import Information from './Information'
import { CheckoutProvider } from './CheckoutContext'

export const metadata: Metadata = {
  title: 'Checkout Page',
  description: 'Effective checkout page for your e-commerce website',
}

const CheckoutPage = () => {
  return (
    <CheckoutProvider>
      <main className="container py-16 lg:pt-20 lg:pb-28">
        <div className="mb-16">
          <h1 className="mb-5 block text-3xl font-semibold lg:text-4xl">Checkout</h1>
          <Breadcrumb
            breadcrumbs={[
              { id: 1, name: 'Home', href: '/' },
              { id: 2, name: 'Cart', href: '/cart' },
            ]}
            currentPage="Checkout"
          />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Information />
          </div>

          <div className="my-10 shrink-0 border-t lg:mx-10 lg:my-0 lg:border-t-0 lg:border-l xl:lg:mx-14 2xl:mx-16" />

          <CheckoutSummary />
        </div>
      </main>
    </CheckoutProvider>
  )
}

export default CheckoutPage
