"use client";
import Logo from '@/components/Logo'
import Link from 'next/link'
import clsx from 'clsx'
import { FC } from 'react'
import CartBtn from './CartBtn'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import { Button } from '@/shared/Button/Button'
import { useWishList } from '@/context/WishListContext'

export interface HeaderProps {
  hasBorderBottom?: boolean
}
 

const Header: FC<HeaderProps> = ({ hasBorderBottom = true }) => {
  const{wishList} = useWishList(); 
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-neutral-900">
      <div className="container">
        <div
          className={clsx(
            'flex h-20 items-center border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b'
          )}
        >
          <div className="flex items-center gap-x-3 sm:gap-x-8">
            <Logo />
            <div className="hidden h-9 border-l border-neutral-200 md:block dark:border-neutral-700"></div>
          </div>

          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>



          <div className="hidden lg:flex mr-4 items-center gap-x-2.5 sm:gap-x-5">
            <Button href="/contact" outline className="rounded-full! px-5 py-2 text-sm font-medium">
              Contact Us
            </Button>
          </div>



          <div className="flex items-center gap-x-2.5 sm:gap-x-5">
            <div className="block lg:hidden">
              <HamburgerBtnMenu />
            </div>
            <Link href="/WishListContxt" className="relative p-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <svg
                className={clsx('h-5 w-5 text-neutral-600 dark:text-neutral-400', wishList.length > 0 && 'text-primary-600')}
                xmlns="http://www.w3.org/2000/svg"
                fill='none'
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              </div>
            </Link>
            <CartBtn />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
