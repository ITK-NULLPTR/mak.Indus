'use client'

import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import Nav from '@/shared/Nav/Nav'
import NavItem from '@/shared/Nav/NavItem'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { FilterIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useCallback, useState } from 'react'
import { Divider } from './Divider'
import { FilterSortByMenuListBox } from './FilterSortByMenu'
import { FiltersMenuTabs } from './FiltersMenu'
import Heading from './Heading/Heading'

export interface HeaderFilterSectionProps {
  className?: string
  heading?: string
}

const CATEGORIES = [
  { name: 'All items', value: '' },
  { name: 'Gardening', value: 'gardening' },
  { name: 'Kitchen', value: 'kitchen' },
  { name: 'Cookware', value: 'cookware' },
]

const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({ className = 'mb-12', heading }) => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category') || ''

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return params.toString()
    },
    [searchParams],
  )

  const handleCategoryClick = (value: string) => {
    router.push(`${pathname}?${createQueryString('category', value)}`)
  }

  return (
    <div className={`relative flex flex-col ${className}`}>
      {heading && <Heading className="mb-12 text-neutral-900 dark:text-neutral-50">{heading}</Heading>}
      <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-x-2 lg:gap-y-0">
        <div />

        <span className="hidden shrink-0 lg:block">
          <ButtonPrimary
            size="smaller"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <HugeiconsIcon icon={FilterIcon} size={22} className="-ml-1" color="currentColor" strokeWidth={1.5} />
            <span className="ml-2">Filter</span>
            <ChevronDownIcon className={`size-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
          </ButtonPrimary>
        </span>
      </div>

      <Transition
        as={'div'}
        show={isOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <Divider className="my-8" />
        <div className="flex flex-wrap items-center gap-2.5">
          <FiltersMenuTabs />
          <FilterSortByMenuListBox className="ml-auto" />
        </div>
      </Transition>
    </div>
  )
}

export default HeaderFilterSection
