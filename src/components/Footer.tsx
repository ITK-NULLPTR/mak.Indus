'use client'
import Logo from '@/components/Logo'
import SocialsList1 from '@/shared/SocialsList1/SocialsList1'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { link } from 'fs'
const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/collections' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
]


const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      if (response.ok) {
        toast.success(data.message || 'Successfully subscribed!')
        setEmail('')
      } else {
        toast.error(data.error || 'Something went wrong, please try again.')
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <Logo />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Mak.Indus is your premier destination for high-quality tools and equipment. We provide only the best for professionals and DIY enthusiasts alike.
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                Follow Us
              </h4>
              <SocialsList1 className="flex-row gap-x-2" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <>


                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-8">
              Categories
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                {name: 'Kitchen Tools', href: '/collections/kitchen'},
                {name: 'Gardening Tools', href: '/collections/gardening'},
                {name: 'Cookware', href: '/collections/cookware'},
                {name: 'Garden Accessories', href: '/collections/garden-accessories'},  
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
                <span>03081417272</span>
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

      <div className="bg-primary-600 py-10 dark:bg-primary-900/20 transition-all">
        <div className="container grid grid-cols-1 lg:grid-cols-2 sm:flex-row lg:flex-row items-center" style={{ gap: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="text-white">
            <h3 
            style={{fontSize:'clamp(1.25rem, 3vw, 2.2rem)'}}
            className="font-bold mb-3 tracking-tight">Subscribe to our newsletter</h3>
            <p 
            style={{fontSize:'clamp(0.9rem, 1.5vw, 1.1rem)'}}
            className="text-primary-100 opacity-90 mx-w-lg mx-auto lg:mx-0">Get special offers, free giveaways, and deals delivered to your inbox.</p>
          </div>
          <form className="flex flex-col sm:flex-row  items-center w-full max-w-xl ml-auto mr-auto lg:mr-0 
          style={{gap:'clamp(0.75rem, 1.5vw, 1.25rem)'}}
          " onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              style={{fontSize:'clamp(0.85rem, 1.2vw, 1rem)'}}
              className="w-full h-12 px-6 rounded-full bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/50 text-neutral-900 dark:text-white disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{fontSize:'clamp(0.85rem, 1vw, 1rem)',
              paddingInline:'clamp(1.2rem, 2.5vw, 3rem)',
              width: 'clamp(140px, auto, 220px)'}}
              className=" h-12 m-4 rounded-full bg-neutral-900 text-white font-bold hover:bg-black transition-all disabled:bg-neutral-600 disabled:cursor-not-allowed flex items-center justify-around ml-0 sm:ml-4 shrink-0"
            >
              {isLoading ? (
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Subscribe'}
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Shipping Policy', href: '/shipping-policy' },
              { name: 'Return Policy', href: '/return-policy' },
              { name: 'FAQs', href: '/faqs' }
            ].map((link, index) => (
              <a
                      key={index}
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
             </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


