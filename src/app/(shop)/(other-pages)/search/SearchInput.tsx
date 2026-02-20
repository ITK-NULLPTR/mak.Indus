'use client'

import ButtonCircle from '@/shared/Button/ButtonCircle'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

interface ProductSuggestion {
    id: string
    title: string
    handle: string
}

export default function SearchInput({ allProducts }: { allProducts: ProductSuggestion[] }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get('q') || ''

    const [query, setQuery] = useState(initialQuery)
    const [suggestions, setSuggestions] = useState<ProductSuggestion[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useClickAway(containerRef, () => setIsOpen(false))

    useEffect(() => {
        if (query.trim().length > 1) {
            const filtered = allProducts
                .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 5)
            setSuggestions(filtered)
            setIsOpen(filtered.length > 0)
        } else {
            setSuggestions([])
            setIsOpen(false)
        }
    }, [query, allProducts])

    const handleSearch = (q: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (q) {
            params.set('q', q)
        } else {
            params.delete('q')
        }
        router.push(`/search?${params.toString()}`)
        setIsOpen(false)
    }

    return (
        <div className="relative w-full" ref={containerRef}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(query)
                }}
                className="relative"
            >
                <fieldset className="text-neutral-500 dark:text-neutral-300">
                    <label htmlFor="search-input" className="sr-only">
                        Search products
                    </label>
                    <HugeiconsIcon
                        className="absolute top-1/2 left-3.5 -translate-y-1/2 text-2xl sm:left-5"
                        icon={Search01Icon}
                        size={24}
                    />
                    <input
                        className="block w-full rounded-full border bg-white py-4 pr-15 pl-12 placeholder:text-zinc-500 focus:border-primary-300 focus:ring-3 focus:ring-primary-200/50 sm:py-5 sm:text-sm md:pl-15 dark:bg-neutral-800 dark:placeholder:text-zinc-400 dark:focus:ring-primary-600/25"
                        id="search-input"
                        type="search"
                        autoComplete="off"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => query.length > 1 && suggestions.length > 0 && setIsOpen(true)}
                        placeholder="Search for items, brands..."
                    />
                    <ButtonCircle
                        className="absolute top-1/2 right-2 -translate-y-1/2 sm:right-2.5"
                        size="size-11"
                        type="submit"
                    >
                        <ArrowRightIcon className="size-5 text-white" />
                    </ButtonCircle>
                </fieldset>
            </form>

            {/* SUGGESTIONS DROPDOWN */}
            {isOpen && (
                <div className="absolute left-0 mt-3 w-full bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-100 dark:border-neutral-700 z-[100] overflow-hidden divide-y divide-neutral-100 dark:divide-neutral-700">
                    <div className="px-5 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Quick Suggestions
                    </div>
                    {suggestions.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                setQuery(p.title)
                                handleSearch(p.title)
                            }}
                            className="w-full text-left px-5 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors flex items-center justify-between group"
                        >
                            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 transition-colors">
                                {p.title}
                            </span>
                            <ArrowRightIcon className="size-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </button>
                    ))}
                    <button
                        onClick={() => handleSearch(query)}
                        className="w-full text-left px-5 py-4 bg-neutral-50/50 dark:bg-neutral-700/20 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-sm italic text-neutral-500 dark:text-neutral-400 transition-colors"
                    >
                        See all results for "<span className="font-semibold text-neutral-900 dark:text-neutral-100">{query}</span>"
                    </button>
                </div>
            )}
        </div>
    )
}
