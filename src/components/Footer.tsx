'use client'
import Logo from '@/components/Logo'
import SocialsList1 from '@/shared/SocialsList1/SocialsList1'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <Logo />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              mak.Indus is your premier destination for high-quality tools and equipment. We provide only the best for professionals and DIY enthusiasts alike.
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                Follow Us
              </h4>
              <SocialsList1 className="!flex-row !gap-x-2" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Shop', 'About Us', 'Contact Us', 'Our Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-8">
              Customer Support
            </h4>
            <ul className="flex flex-col gap-4">
              {['My Account', 'Order History', 'Wishlist', 'Shipping Info', 'Returns & Exchanges'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-0">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Industrial Way, Suite 100<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@makindus.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-600 py-6 dark:bg-primary-900/20">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-primary-100 opacity-90">Get special offers, free giveaways, and deals delivered to your inbox.</p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-6 rounded-full bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/50 text-neutral-900 dark:text-white"
            />
            <button className="h-12 px-8 rounded-full bg-neutral-900 text-white font-bold hover:bg-black transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-4 bg-white dark:bg-neutral-950">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-neutral-800 dark:text-neutral-200">mak.Indus</span>. Engineered for Excellence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-medium text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


