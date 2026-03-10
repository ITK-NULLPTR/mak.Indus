
'use client'
import { TCollection } from '@/data/data'
import { Button } from '@/shared/Button/Button'
import Image from 'next/image'
import { FC } from 'react'
import { Link } from './Link'

interface Props {
  className?: string
  collection: TCollection

}

const CollectionCard3 = ({ className = '', collection}: Props)=>{ 
  if (!collection?.handle) {
    return null
  }
  const categoryLink = collection.href || `/collections/&{collection.handle}`

  return (
  <>
    <div className={`group/CollectionCard3 relative block ${className}`}>
      <div
        className={`aspect-w-16 relative overflow-hidden rounded-2xl aspect-h-14 sm:aspect-h-9 ${collection.color}`}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-4 sm:inset-8">
            {collection.image && (
              <div className="absolute -right-4 top-1/2 w-[40%] h-[60%] -translate-y-1/2 sm:w-[65%] sm:h-[85%]">
                <Image
                  alt={collection.image.alt || ''}
                  src={collection.image}
                  fill
                  className="object-contain object-right drop-shadow-xl"
                  sizes="300px" />
              </div>
            )}
          </div>
        </div>
        <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover/CollectionCard3:opacity-40"></span>

        <div className="relative z-10 h-full">
          <div className="absolute inset-5 flex flex-col sm:inset-8">
            <div className="max-w-[55%]">
              <span className={`mb-1 block text-sm text-neutral-600`}>{collection.title}</span>
              {collection.sortDescription && (
                <h2
                  className={`text-xl font-bold text-neutral-900 md:text-2xl leading-tight line-clamp-2 min-h-14 drop-shadow-sm`}
                  dangerouslySetInnerHTML={{ __html: collection.sortDescription || '' }}
                ></h2>
              )}
            </div>
             <div className="mt-10">
               <Link href={categoryLink}>
                <Button color="light" size="smaller" className="shadow-sm border-neutral-200 cursor-pointer">
                Show me all

                </Button>
               </Link>
             </div>
            </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default CollectionCard3
