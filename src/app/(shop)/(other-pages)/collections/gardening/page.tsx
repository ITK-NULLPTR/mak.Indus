'use client'

import React, { useState } from 'react';
import { HeartIcon, ShoppingBagIcon, ArrowsPointingOutIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Footer from '@/components/Footer';

import Img1 from '@/images/gardening/1.webp';
import Img2 from '@/images/gardening/2.webp';
import Img3 from '@/images/gardening/3.webp';
import Img4 from '@/images/gardening/4.webp';
import Img5 from '@/images/gardening/5.webp';
import Img6 from '@/images/gardening/6.webp';
import Img7 from '@/images/gardening/7.webp';
import Img8 from '@/images/gardening/8.webp';
import HeroSection from './HeroSection';


const kitchenImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];



interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewNumber: number;
  image: string;
  status?: 'new' | 'sale' | null;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Hand Trowel',
    subtitle: 'Precision Digging Tool',
    price: 89.99,
    rating: 4.8,
    reviewNumber: 234,
    image: kitchenImages[0].src,
    status: 'new'
  },
  {
    id: 2,
    title: 'Pruning Shears',
    subtitle: 'Sharp Branch Trimming',
    price: 64.99,
    rating: 4.7,
    reviewNumber: 189,
    image: kitchenImages[1].src,
    status: null
  },
  {
    id: 3,
    title: 'Garden Hoe',
    subtitle: 'Effective Weed Control',
    price: 299.99,
    rating: 4.9,
    reviewNumber: 456,
    image: kitchenImages[2].src,
    status: 'new'
  },
  {
    id: 4,
    title: 'Leaf Rake',
    subtitle: 'Quick Debris Removal',
    price: 449.99,
    rating: 4.6,
    reviewNumber: 312,
    image: kitchenImages[3].src,
    status: null
  },
  {
    id: 5,
    title: 'Watering Can',
    subtitle: 'Even Water Distribution',
    price: 199.99,
    rating: 4.5,
    reviewNumber: 278,
    image: kitchenImages[4].src,
    status: 'new'
  },
  {
    id: 6,
    title: 'Garden Fork',
    subtitle: 'Deep soil aeration',
    price: 34.99,
    rating: 4.4,
    reviewNumber: 167,
    image: kitchenImages[5].src,
    status: null
  },
  {
    id: 7,
    title: 'Shovel',
    subtitle: 'Heavy-Duty Digging',
    price: 179.99,
    rating: 4.7,
    reviewNumber: 423,
    image: kitchenImages[6].src,
    status: 'sale'
  },
  {
    id: 8,
    title: 'Wheelbarrow',
    subtitle: 'Easy Load Transport',
    price: 24.99,
    rating: 4.3,
    reviewNumber: 198,
    image: kitchenImages[7].src,
    status: 'new'
  },
];

const ProductStatus: React.FC<{ status?: 'new' | 'sale' | null }> = ({ status }) => {
  if (!status) return null;

  return (
    <div className="absolute left-3 top-3 z-10">
      {status === 'new' && (
        <div className="rounded-full bg-blue-500 px-2.5 py-1 text-xs font-medium text-white">
          New in
        </div>
      )}
      {status === 'sale' && (
        <div className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-medium text-white">
          Sale
        </div>
      )}
    </div>
  );
};

const Prices: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="text-2xl font-semibold text-green-600">
      ${price.toFixed(2)}
    </div>
  );
};

const LikeButton: React.FC<{ liked?: boolean; className?: string; onClick?: () => void }> = ({ 
  liked = false, 
  className = '',
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 ${className}`}
    >
      <HeartIcon 
        className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
      />
    </button>
  );
};

const ProductCard: React.FC<{ data: Product; isLiked?: boolean }> = ({ data, isLiked = false }) => {
  const [liked, setLiked] = useState(isLiked);
  const { title, subtitle, price, rating, reviewNumber, image, status } = data;

  const renderGroupButtons = () => {
    return (
      <div className="invisible absolute inset-x-1 bottom-0 flex justify-center gap-1.5 opacity-0 transition-all group-hover:visible group-hover:bottom-4 group-hover:opacity-100">
        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs text-white shadow-lg hover:bg-neutral-800"
          type="button"
        >
          <ShoppingBagIcon className="-ml-1 h-3.5 w-3.5" />
          <span>Add to bag</span>
        </button>

        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-neutral-950 shadow-lg hover:bg-neutral-50"
          type="button"
        >
          <ArrowsPointingOutIcon className="-ml-1 h-3.5 w-3.5" />
          <span>Quick view</span>
        </button>
      </div>
    );
  };

  return (
    <div className="product-card relative flex flex-col bg-transparent">
      <div className="group relative z-1 shrink-0 overflow-hidden rounded-3xl bg-neutral-50">
        <div className="relative aspect-11/12 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="h-full w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
        <ProductStatus status={status} />
        <LikeButton 
          liked={liked} 
          className="absolute right-3 top-3" 
          onClick={() => setLiked(!liked)}
        />
        {renderGroupButtons()}
      </div>

      <div className="space-y-4 px-2.5 pt-5 pb-2.5">
        <div>
          <h2 className="text-base font-semibold transition-colors">{title}</h2>
          <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
        </div>

        <div className="flex items-end justify-between">
          <Prices price={price} />
          <div className="mb-0.5 flex items-center">
            <StarIcon className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="ml-1 text-sm text-neutral-500">
              {rating} ({reviewNumber} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GardeningPage() {
  return (
    <>
    <HeroSection />
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
       
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}