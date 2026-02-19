import { Divider } from '@/components/Divider'
import { FilterSortByMenuListBox } from '@/components/FilterSortByMenu'
import { FiltersMenuTabs } from '@/components/FiltersMenu'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/data/data'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/shared/Pagination/Pagination'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ handle: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { handle } = await params
  const sParams = await searchParams
  const price_min = sParams.price_min as string | undefined
  const price_max = sParams.price_max as string | undefined
  const categories = sParams.categories || sParams['categories[]']
  const colors = sParams.colors || sParams['colors[]']
  const sizes = sParams.sizes || sParams['sizes[]']
  const sort = (sParams.sort as string) || 'newest'
  const currentPage = Number(sParams.page) || 1
  const ITEMS_PER_PAGE = 12

  let filteredProducts = await getProducts()

  // Filter by price if search params are present
  if (price_min || price_max) {
    const min = price_min ? Number(price_min) : 0
    const max = price_max ? Number(price_max) : Infinity
    filteredProducts = filteredProducts.filter((p) => p.price >= min && p.price <= max)
  }

  // Filter by categories
  const selectedCategories = Array.isArray(categories) ? categories : categories ? [categories] : []
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((p: any) =>
      p.categories && Array.isArray(p.categories) && p.categories.some((c: string) => selectedCategories.includes(c))
    )
  }

  // Filter by colors
  const selectedColors = Array.isArray(colors) ? colors : colors ? [colors] : []
  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter((p: any) =>
      p.options?.some((opt: any) =>
        opt.name === 'Color' && opt.optionValues?.some((val: any) =>
          selectedColors.some(sc => val.name.toLowerCase().includes(sc))
        )
      )
    )
  }

  // Filter by sizes
  const selectedSizes = Array.isArray(sizes) ? sizes : sizes ? [sizes] : []
  if (selectedSizes.length > 0) {
    filteredProducts = filteredProducts.filter((p: any) =>
      p.options?.some((opt: any) =>
        opt.name === 'Size' && opt.optionValues?.some((val: any) => selectedSizes.includes(val.name.toLowerCase()))
      )
    )
  }

  // Apply Sorting
  filteredProducts.sort((a: any, b: any) => {
    switch (sort) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case 'price-low-to-high':
        return a.price - b.price
      case 'price-high-low':
        return b.price - a.price
      case 'a-to-z':
        return a.title.localeCompare(b.title)
      case 'z-to-a':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const products = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams()
    Object.entries(sParams).forEach(([key, value]) => {
      if (key === 'page') return
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v))
      } else if (value !== undefined) {
        params.append(key, value as string)
      }
    })
    params.set('page', pageNumber.toString())
    return `?${params.toString()}`
  }

  return (
    <main>
      {/* TABS FILTER */}
      <div className="flex flex-wrap items-center gap-2.5">
        <FiltersMenuTabs />
        <FilterSortByMenuListBox className="ml-auto" />
      </div>

      <Divider className="mt-8" />

      {/* LOOP ITEMS */}
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((produc) => <ProductCard data={produc} key={produc.id} />)}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center lg:mt-24">
          <Pagination className="mx-auto">
            <PaginationPrevious href={currentPage > 1 ? createPageUrl(currentPage - 1) : null} />
            <PaginationList>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationPage key={page} href={createPageUrl(page)} current={page === currentPage}>
                  {page}
                </PaginationPage>
              ))}
            </PaginationList>
            <PaginationNext href={currentPage < totalPages ? createPageUrl(currentPage + 1) : null} />
          </Pagination>
        </div>
      )}
    </main>
  )
}
