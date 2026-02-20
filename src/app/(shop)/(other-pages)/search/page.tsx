import { Divider } from '@/components/Divider'
import HeaderFilterSection from '@/components/HeaderFilterSection'
import ProductCard from '@/components/ProductCard'
import SectionPromo1 from '@/components/SectionPromo1'
import SectionSliderLargeProduct from '@/components/SectionSliderLargeProduct'
import { getProducts } from '@/data/data'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/shared/Pagination/Pagination'
import { Metadata } from 'next'
import { Suspense } from 'react'
import SearchInput from './SearchInput'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search page for products',
}

const PageSearch = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = await searchParams
  const query = typeof params.q === 'string' ? params.q : ''
  const category = typeof params.category === 'string' ? params.category : ''

  // Extract and normalize array parameters from FiltersMenu (which use name="colors[]" etc)
  const colors = Array.isArray(params['colors[]'])
    ? params['colors[]']
    : typeof params['colors[]'] === 'string'
      ? [params['colors[]']]
      : []

  const sizes = Array.isArray(params['sizes[]'])
    ? params['sizes[]']
    : typeof params['sizes[]'] === 'string'
      ? [params['sizes[]']]
      : []

  const searchCategories = Array.isArray(params['categories[]'])
    ? params['categories[]']
    : typeof params['categories[]'] === 'string'
      ? [params['categories[]']]
      : []

  const priceMin = Number(params.price_min) || 0
  const priceMax = Number(params.price_max) || 2000
  const sortBy = typeof params['sort-by'] === 'string' ? params['sort-by'] : ''

  const allProducts = await getProducts()

  // 1. FILTER LOGIC
  let filteredProducts = allProducts.filter((product) => {
    // Search query match
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase())

    // Combine nav category and filter categories
    const activeCategories = [...new Set([category, ...searchCategories])].filter(Boolean)
    const matchesCategory =
      activeCategories.length === 0 ||
      product.categories.some((cat) => activeCategories.includes(cat))

    // Color match (case-insensitive)
    const matchesColor =
      colors.length === 0 ||
      product.options
        .find((o) => o.name === 'Color')
        ?.optionValues.some((v) => colors.some(c => c.toLowerCase() === v.name.toLowerCase()))

    // Size match (case-insensitive)
    const matchesSize =
      sizes.length === 0 ||
      product.options
        .find((o) => o.name === 'Size')
        ?.optionValues.some((v) => sizes.some(s => s.toLowerCase() === v.name.toLowerCase()))

    // Price match
    const matchesPrice = product.price >= priceMin && product.price <= priceMax

    return matchesQuery && matchesCategory && matchesColor && matchesSize && matchesPrice
  })

  // 2. SORT LOGIC
  if (sortBy === 'price-low-high') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high-low') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'best-rating') {
    filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  }

  const featuredProducts = allProducts.slice(0, 4)

  return (
    <div>
      <div className={'h-24 w-full bg-primary-50 2xl:h-28 dark:bg-white/10'} />
      <div className="container">
        <header className="mx-auto -mt-10 flex max-w-2xl flex-col lg:-mt-7">
          <Suspense fallback={null}>
            <SearchInput
              allProducts={allProducts.map((p) => ({
                id: p.id,
                title: p.title,
                handle: p.handle,
              }))}
            />
          </Suspense>
        </header>
      </div>

      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-28 lg:pt-20 lg:pb-28">
        <main>
          {/* FILTER SECTION */}
          <Suspense fallback={null}>
            <HeaderFilterSection />
          </Suspense>

          {/* SEARCH & FILTER STATUS */}
          {(query || category || colors.length > 0 || sizes.length > 0 || searchCategories.length > 0) && (
            <div className="mb-10 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <h2 className="text-xl font-semibold">
                {query ? (
                  <>
                    Search results for: <span className="text-primary-600">"{query}"</span>
                  </>
                ) : (
                  'Filtered Products'
                )}
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
                <p className="text-neutral-500 dark:text-neutral-400">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
                </p>
              </div>
            </div>
          )}

          {/* LOOP ITEMS */}
          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((item) => (
                <ProductCard data={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center py-24 bg-neutral-50/50 dark:bg-neutral-800/20 rounded-[2rem] border-2 border-dashed border-neutral-200 dark:border-neutral-700">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 italic">No matches found</h3>
                <p className="text-neutral-500 dark:text-neutral-400 mt-3 text-lg">
                  We couldn't find anything matching your filters. Try a different search term or reset filters.
                </p>
                <div className="mt-8">
                  <a
                    href="/search"
                    className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all active:scale-95"
                  >
                    Clear all filters
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* PAGINATION */}
          {filteredProducts.length > 0 && (
            <div className="mt-20 flex justify-center lg:mt-24">
              <Pagination className="mx-auto">
                <PaginationPrevious href="?page=1" />
                <PaginationList>
                  <PaginationPage href="?page=1" current>
                    1
                  </PaginationPage>
                  <PaginationPage href="?page=2">2</PaginationPage>
                  <PaginationPage href="?page=3">3</PaginationPage>
                  <PaginationPage href="?page=4">4</PaginationPage>
                </PaginationList>
                <PaginationNext href="?page=3" />
              </Pagination>
            </div>
          )}
        </main>

        <Divider />
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 italic">Recommended for you</h2>
          </div>
          <SectionSliderLargeProduct products={featuredProducts} />
        </div>
        <Divider />
        <SectionPromo1 />
      </div>
    </div>
  )
}

export default PageSearch
