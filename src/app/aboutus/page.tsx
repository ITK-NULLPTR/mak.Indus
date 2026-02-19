'use client'

import Image from 'next/image'
import AboutImg from '@/images/aboutus/aboutus.webp'
import Header2 from '@/components/Header/Header2'

export default function AboutUsPage() {
  return (
    <>
      <Header2 />
      

      <section className="relative overflow-hidden bg-green-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <p className="mb-3 text-sm font-medium text-green-600">
              Grow smarter, live better
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Exclusive Collection <br />
              for everyone
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400"></span>
              We design premium gardening and kitchen tools that combine
              durability, comfort, and modern aesthetics for everyday use.
            </p>

            <button className="mt-8 rounded-full bg-green-600 px-8 py-3 text-white transition hover:bg-green-700">
              Learn More
            </button>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px] bg-white shadow-xl">
              <Image
                src={AboutImg}
                alt="About us"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating dots */}
            <span className="absolute -top-6 left-1/3 h-6 w-6 rounded-full bg-purple-400"></span>
            <span className="absolute -bottom-6 left-10 h-5 w-5 rounded-full bg-green-500"></span>
            
          </div>
        </div>
      </section>
      
    </>
  )
}
