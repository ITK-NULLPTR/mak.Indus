'use client'

import ButtonClose from '@/shared/Button/ButtonClose'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonThird from '@/shared/Button/ButtonThird'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/shared/checkbox'
import { Radio, RadioField, RadioGroup } from '@/shared/radio'
import * as Headless from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  DollarCircleIcon,
  FilterVerticalIcon,
  Note01Icon,
  PackageDimensions01Icon,
  PaintBucketIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import Form from 'next/form'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PriceRangeSlider } from './PriceRangeSlider'

type FilterOption = {
  id: string
  name: string
  type: 'checkbox' | 'price-range' | 'radio'
  hugeIcon?: IconSvgElement
  // For checkbox type
  options?: { name: string; value: string }[]
  // For price-range type
  min?: number
  max?: number
}

export const demo_filters_options: FilterOption[] = [
  {
    id: 'colors',
    name: 'Colors',
    type: 'checkbox',
    hugeIcon: PaintBucketIcon,
    options: [
      { name: 'Beige', value: 'beige' },
      { name: 'Blue', value: 'blue' },
      { name: 'Black', value: 'black' },
      { name: 'Brown', value: 'brown' },
      { name: 'Green', value: 'green' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    type: 'checkbox',
    hugeIcon: PackageDimensions01Icon,
    options: [
      { name: 'XS', value: 'xs' },
      { name: 'S', value: 's' },
      { name: 'M', value: 'm' },
      { name: 'L', value: 'l' },
      { name: 'XL', value: 'xl' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    type: 'price-range',
    min: 0,
    max: 1000,
    hugeIcon: DollarCircleIcon,
  },
  {
    id: 'sort-by',
    name: 'Sort by',
    type: 'radio',
    hugeIcon: Note01Icon,
    options: [
      { name: 'Most Popular', value: 'most-popular' },
      { name: 'Best Rating', value: 'best-rating' },
      { name: 'Newest', value: 'newest' },
      { name: 'Price Low - High', value: 'price-low-high' },
      { name: 'Price High - Low', value: 'price-high-low' },
    ],
  },
]

type Props = {
  filterOptions?: FilterOption[]
  className?: string
}

export const FiltersMenuTabs = ({
  // Demo purpose only, replace with actual filter options
  filterOptions = demo_filters_options.filter((f) => f.type !== 'radio'),
  className,
}: Props) => {
  const searchParams = useSearchParams()

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({
    categories: [],
    colors: [],
    sizes: [],
    price: [],
  })

  useEffect(() => {
    const cats = searchParams.getAll('categories[]')
    const cols = searchParams.getAll('colors[]')
    const sizs = searchParams.getAll('sizes[]')
    const p_active = (searchParams.get('price_min') || searchParams.get('price_max')) ? ['active'] : []

    setSelectedOptions({
      categories: cats,
      colors: cols,
      sizes: sizs,
      price: p_active,
    })
  }, [searchParams])

  const handleCheckboxChange = (filterId: string, value: string, checked: boolean) => {
    setSelectedOptions((prev) => {
      const current = prev[filterId] || []
      if (checked) {
        return { ...prev, [filterId]: [...current, value] }
      } else {
        return { ...prev, [filterId]: current.filter((v) => v !== value) }
      }
    })
  }

  const handlePriceChange = () => {
    setSelectedOptions((prev) => ({ ...prev, price: ['active'] }))
  }

  if (!filterOptions || filterOptions.length === 0) {
    return <div>No filter options available</div>
  }

  return (
    <div className={clsx('flex flex-wrap md:gap-x-4 md:gap-y-2', className)}>
      {/* ALL FILTERS DIALOG */}
      <div className="shrink-0 md:hidden">
        <FiltersMenuDialog filterOptions={filterOptions} />
      </div>

      {/* POPOVER FILTERS */}
      <div className="hidden md:block">
        <Headless.PopoverGroup as={Form} action="">
          <fieldset className="flex flex-wrap gap-x-4 gap-y-2">
            {filterOptions.map((filterOption, index) => {
              if (!filterOption) {
                return null
              }

              const checkedNumber = selectedOptions[filterOption.id]?.length || 0

              return (
                <Headless.Popover className="group relative" key={index}>
                  <Headless.PopoverButton
                    className={clsx(
                      'relative flex items-center justify-center rounded-full px-4 py-2.5 text-sm select-none ring-inset group-data-open:ring-2 group-data-open:ring-black hover:bg-neutral-50 focus:outline-hidden dark:group-data-open:ring-white dark:hover:bg-neutral-900',
                      checkedNumber
                        ? 'ring-2 ring-black dark:ring-white'
                        : 'ring-1 ring-neutral-300 dark:ring-neutral-700'
                    )}
                  >
                    {filterOption.hugeIcon && <HugeiconsIcon icon={filterOption.hugeIcon} size={18} />}
                    <span className="ms-2">{filterOption.name}</span>
                    <ChevronDownIcon className="ms-3 size-4" />
                    {checkedNumber ? (
                      <span className="absolute top-0 -right-0.5 flex size-4.5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
                        {checkedNumber}
                      </span>
                    ) : null}
                  </Headless.PopoverButton>

                  <Headless.PopoverPanel
                    transition
                    unmount={false}
                    className="absolute -start-5 top-full z-50 mt-3 w-sm transition data-closed:translate-y-1 data-closed:opacity-0"
                  >
                    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
                      <div className="hidden-scrollbar max-h-28rem overflow-y-auto px-5 py-6">
                        {filterOption.type === 'checkbox' && (
                          <div className="space-y-4">
                            {filterOption.options?.map((option) => {
                              if (!option) return null
                              const isChecked = selectedOptions[filterOption.id]?.includes(option.value) || false
                              return (
                                <label key={option.name} className="flex items-center gap-3 cursor-pointer group">
                                  <div className="relative isolate flex size-5 items-center justify-center rounded-[0.3125rem] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                                    <input
                                      type="checkbox"
                                      name={`${filterOption.id}[]`}
                                      value={option.value}
                                      checked={isChecked}
                                      onChange={(e) => handleCheckboxChange(filterOption.id, option.value, e.target.checked)}
                                      className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                                    />
                                    {isChecked && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-black dark:bg-white rounded-[0.3125rem]">
                                        <svg className="size-3.5 text-white dark:text-black" viewBox="0 0 14 14" fill="none">
                                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-sm/6 text-neutral-900 dark:text-neutral-100 font-medium">
                                    {option.name}
                                  </span>
                                </label>
                              )
                            })}
                          </div>
                        )}
                        {filterOption.type === 'price-range' && (
                          <PriceRangeSlider
                            key={index}
                            min={filterOption.min ?? 0}
                            max={filterOption.max ?? 1000}
                            name={filterOption.name}
                            onChange={handlePriceChange}
                          />
                        )}
                        {filterOption.type === 'radio' && (
                          <RadioGroup name={filterOption.id} defaultValue={filterOption.options?.[0]?.value}>
                            {filterOption.options?.map((option, i) => {
                              if (!option) return null
                              return (
                                <RadioField key={option.value}>
                                  <Radio value={option.value} />
                                  <Headless.Label className="text-sm/6 cursor-pointer">{option.name}</Headless.Label>
                                </RadioField>
                              )
                            })}
                          </RadioGroup>
                        )}
                      </div>

                      <div className="flex items-center justify-between rounded-b-2xl bg-neutral-50 p-5 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
                        <Headless.CloseButton className="-mx-3" size="smaller" as={ButtonThird} type="button">
                          Cancel
                        </Headless.CloseButton>
                        <Headless.CloseButton size="smaller" as={ButtonPrimary} type="submit">
                          Apply
                        </Headless.CloseButton>
                      </div>
                    </div>
                  </Headless.PopoverPanel>
                </Headless.Popover>
              )
            })}
          </fieldset>
        </Headless.PopoverGroup>
      </div>
    </div>
  )
}

export const FiltersMenuSidebar = ({ filterOptions = demo_filters_options, className }: Props) => {
  const searchParams = useSearchParams()

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({
    categories: [],
    colors: [],
    sizes: [],
    price: [],
  })

  useEffect(() => {
    const cats = searchParams.getAll('categories[]')
    const cols = searchParams.getAll('colors[]')
    const sizs = searchParams.getAll('sizes[]')
    const p_active = (searchParams.get('price_min') || searchParams.get('price_max')) ? ['active'] : []

    setSelectedOptions({
      categories: cats,
      colors: cols,
      sizes: sizs,
      price: p_active,
    })
  }, [searchParams])

  const handleCheckboxChange = (filterId: string, value: string, checked: boolean) => {
    setSelectedOptions((prev) => {
      const current = prev[filterId] || []
      if (checked) {
        return { ...prev, [filterId]: [...current, value] }
      } else {
        return { ...prev, [filterId]: current.filter((v) => v !== value) }
      }
    })
  }

  const handlePriceChange = () => {
    setSelectedOptions((prev) => ({ ...prev, price: ['active'] }))
  }

  if (!filterOptions || filterOptions.length === 0) {
    return <div>No filter options available</div>
  }

  return (
    <>
      {/* ALL FILTERS DIALOG */}
      <div className="shrink-0 lg:hidden text-start">
        <FiltersMenuDialog filterOptions={filterOptions} />
      </div>

      {/* SIDEBAR FILTERS */}
      <div className="hidden lg:block text-start">
        <Form action="">
          <fieldset className="w-full">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {filterOptions?.map((filterOption) => {
                if (!filterOption) return null
                return (
                  <div key={filterOption.id} className="py-10 first:pt-0 last:pb-0">
                    <legend className="text-lg font-medium">{filterOption.name}</legend>
                    <div className="pt-7">
                      {filterOption.type === 'checkbox' && (
                        <div className="space-y-4">
                          {filterOption.options?.map((option) => {
                            if (!option) return null
                            const isChecked = selectedOptions[filterOption.id]?.includes(option.value) || false
                            return (
                              <label key={option.name} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative isolate flex size-5 items-center justify-center rounded-[0.3125rem] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                                  <input
                                    type="checkbox"
                                    name={`${filterOption.id}[]`}
                                    value={option.value}
                                    checked={isChecked}
                                    onChange={(e) => handleCheckboxChange(filterOption.id, option.value, e.target.checked)}
                                    className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                                  />
                                  {isChecked && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black dark:bg-white rounded-[0.3125rem]">
                                      <svg className="size-3.5 text-white dark:text-black" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                  {option.name}
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      )}
                      {filterOption.type === 'price-range' && (
                        <PriceRangeSlider
                          min={filterOption.min ?? 0}
                          max={filterOption.max ?? 1000}
                          name={filterOption.name}
                          onChange={handlePriceChange}
                        />
                      )}
                      {filterOption.type === 'radio' && (
                        <RadioGroup name={filterOption.id} defaultValue={filterOption.options?.[0]?.value}>
                          {filterOption.options?.map((option) => {
                            if (!option) return null
                            return (
                              <RadioField key={option.value}>
                                <Radio value={option.value} />
                                <Headless.Label className="text-sm/6 cursor-pointer">{option.name}</Headless.Label>
                              </RadioField>
                            )
                          })}
                        </RadioGroup>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </fieldset>
        </Form>
      </div>
    </>
  )
}

export function FiltersMenuDialog({ className, filterOptions = demo_filters_options }: Props) {
  const [showAllFilter, setShowAllFilter] = useState(false)
  const searchParams = useSearchParams()

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({
    categories: [],
    colors: [],
    sizes: [],
    price: [],
  })

  useEffect(() => {
    const cats = searchParams.getAll('categories[]')
    const cols = searchParams.getAll('colors[]')
    const sizs = searchParams.getAll('sizes[]')
    const p_active = (searchParams.get('price_min') || searchParams.get('price_max')) ? ['active'] : []

    setSelectedOptions({
      categories: cats,
      colors: cols,
      sizes: sizs,
      price: p_active,
    })
  }, [searchParams, showAllFilter])

  const handleFormSubmit = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData.entries())
    console.log(formDataObject)
  }

  const handlePriceChange = () => {
    setSelectedOptions((prev) => ({ ...prev, price: ['active'] }))
  }

  const handleCheckboxChange = (filterId: string, value: string, checked: boolean) => {
    setSelectedOptions((prev) => {
      const current = prev[filterId] || []
      if (checked) {
        return { ...prev, [filterId]: [...current, value] }
      } else {
        return { ...prev, [filterId]: current.filter((v) => v !== value) }
      }
    })
  }

  if (!filterOptions || filterOptions.length === 0) {
    return <div>No filter options available</div>
  }

  const checkedNumber = Object.values(selectedOptions).flat().length

  return (
    <div className={clsx('shrink-0', className)}>
      <Headless.Button
        className={clsx(
          'relative flex items-center justify-center rounded-full px-4 py-2.5 text-sm select-none ring-inset hover:bg-neutral-50 focus:outline-hidden dark:hover:bg-neutral-900',
          checkedNumber ? 'ring-2 ring-black dark:ring-white' : 'ring-1 ring-neutral-300 dark:ring-neutral-700'
        )}
        onClick={() => setShowAllFilter(true)}
      >
        <HugeiconsIcon icon={FilterVerticalIcon} size={18} />
        <span className="ms-2 font-medium">All filters</span>
        <ChevronDownIcon className="ms-3 size-4" />
        {checkedNumber ? (
          <span className="absolute top-0 -right-0.5 flex size-4.5 items-center justify-center rounded-full bg-black text-[0.65rem] font-semibold text-white ring-2 ring-white dark:bg-neutral-200 dark:text-neutral-900 dark:ring-neutral-900">
            {checkedNumber}
          </span>
        ) : null}
      </Headless.Button>

      <Headless.Dialog open={showAllFilter} onClose={setShowAllFilter} className="relative z-50">
        <Headless.DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 duration-200 ease-out data-closed:opacity-0"
        />
        <Form
          action=""
          className="fixed inset-0 flex max-h-screen w-screen items-center justify-center pt-3"
        >
          <Headless.DialogPanel
            className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-closed:translate-y-16 data-closed:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            transition
            as={'fieldset'}
          >
            <div className="relative shrink-0 border-b border-neutral-200 p-4 text-center sm:px-8 dark:border-neutral-800">
              <Headless.DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900">
                Filters
              </Headless.DialogTitle>
              <div className="absolute end-2 top-2">
                <Headless.CloseButton
                  as={ButtonClose}
                  colorClassName="bg-white text-neutral-900 hover:bg-neutral-100"
                />
              </div>
            </div>

            <div className="hidden-scrollbar grow overflow-y-auto text-start">
              <div className="divide-y divide-neutral-200 px-4 sm:px-8 dark:divide-neutral-800">
                {filterOptions?.map((filterOption) => {
                  if (!filterOption) return null
                  return (
                    <div key={filterOption.id} className="py-7">
                      <p className="text-lg font-medium">{filterOption.name}</p>
                      <div className="mt-6">
                        {filterOption.type === 'checkbox' && (
                          <div className="space-y-4">
                            {filterOption.options?.map((option) => {
                              if (!option) return null
                              const isChecked = selectedOptions[filterOption.id]?.includes(option.value) || false
                              return (
                                <label key={option.name} className="flex items-center gap-3 cursor-pointer group">
                                  <div className="relative isolate flex size-5 items-center justify-center rounded-[0.3125rem] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                                    <input
                                      type="checkbox"
                                      name={`${filterOption.id}[]`}
                                      value={option.value}
                                      checked={isChecked}
                                      onChange={(e) => handleCheckboxChange(filterOption.id, option.value, e.target.checked)}
                                      className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                                    />
                                    {isChecked && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-black dark:bg-white rounded-[0.3125rem]">
                                        <svg className="size-3.5 text-white dark:text-black" viewBox="0 0 14 14" fill="none">
                                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                    {option.name}
                                  </span>
                                </label>
                              )
                            })}
                          </div>
                        )}
                        {filterOption.type === 'price-range' && (
                          <PriceRangeSlider
                            min={filterOption.min ?? 0}
                            max={filterOption.max ?? 1000}
                            name={filterOption.name}
                            onChange={handlePriceChange}
                          />
                        )}
                        {filterOption.type === 'radio' && (
                          <RadioGroup name={filterOption.id} defaultValue={filterOption.options?.[0]?.value}>
                            {filterOption.options?.map((option) => {
                              if (!option) return null
                              return (
                                <RadioField key={option.value}>
                                  <Radio value={option.value} />
                                  <Headless.Label className="text-sm/6 cursor-pointer">{option.name}</Headless.Label>
                                </RadioField>
                              )
                            })}
                          </RadioGroup>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between bg-neutral-50 p-4 sm:px-8 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
              <Headless.CloseButton as={ButtonThird} size="smaller" className="-mx-2" type="button">
                Cancel
              </Headless.CloseButton>
              <Headless.CloseButton as={ButtonPrimary} size="smaller" type="submit">
                Apply filters
              </Headless.CloseButton>
            </div>
          </Headless.DialogPanel>
        </Form>
      </Headless.Dialog>
    </div>
  )
}
