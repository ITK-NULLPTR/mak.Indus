import Logo from '@/components/Logo'
import Link from 'next/link'
import clsx from 'clsx'
import { FC } from 'react'
import CartBtn from './CartBtn'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import { Button } from '@/shared/Button/Button'

export interface HeaderProps {
  hasBorderBottom?: boolean
}

const Header: FC<HeaderProps> = ({ hasBorderBottom = true }) => {
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
            <Button href="/contact" outline className="!rounded-full px-5 py-2 text-sm font-medium">
              Contact Us
            </Button>
          </div>



          <div className="flex items-center gap-x-2.5 sm:gap-x-5">
            <div className="block lg:hidden">
              <HamburgerBtnMenu />
            </div>
            <CartBtn />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
