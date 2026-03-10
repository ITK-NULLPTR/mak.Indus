import React from 'react';
import Link from 'next/link';
import HeroSection from './HeroSection';
import { Divider } from '@/components/Divider';
import Image from 'next/image';
import kitchencard from '@/images/collectionscards/kitchencard.webp';
import gardencard from '@/images/collectionscards/gardencard.webp';
import cookwarecard from '@/images/collectionscards/cookwarecard.webp';
import gardenaccessoriescard from '@/images/collectionscards/gardenaccessoriescard.webp'; 
import ProductCard from '@/components/ProductCard';


const categories = [
  {
    name: 'Kitchen Tools',
    slug: 'kitchen',
    description: 'Professional grade culinary instruments.',
    image: kitchencard,
  },
  {
    name: 'Gardening Tools',
    slug: 'gardening',
    description: 'Heavy-duty tools for your outdoor space.',
    image: gardencard,
  },
  {
    name: 'Cookware',
    slug: 'cookware',
    description: 'Premium pots, pans, and chef essentials.',
    image: cookwarecard,
  },
  {
    name: 'Garden Accessories',
    slug: 'garden-accessories',
    description: 'Essential add-ons for a perfect garden.',
    image: gardenaccessoriescard,
  },
];

const CollectionsPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <HeroSection />
        <Divider className="my-12" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <Link 
              key={item.slug} 
              href={`/collections/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-3/4 flex items-end shadow-lg"
            >
              <Image
               src={item.image}
               alt={item.name}
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

              <div className="absolute inset-0 bg-slate-800 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                <p className="text-slate-200 text-sm mb-4 transition-opacity">
                  {item.description}
                </p>
                <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;