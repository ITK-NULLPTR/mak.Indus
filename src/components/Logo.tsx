import Link from 'next/link'
import React from 'react'
import Logopng from '@/images/logo.png'
export interface LogoProps extends React.ComponentPropsWithoutRef<'img'> {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'shrink-0', ...props }) => {
  return (
    <Link href="/" className={`flex items-center text-neutral-950 dark:text-neutral-50 ${className}`}>
      <img
        src={Logopng.src}
        alt="Logo"
        width={130}
        height={50}
        className="object-contain"
      />
    </Link>
  )
}

export default Logo