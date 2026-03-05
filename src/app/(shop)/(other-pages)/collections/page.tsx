import React from 'react';
import Link from 'next/link';
import HeroSection from './HeroSection';
import { Divider } from '@/components/Divider';

// 1. Define your categories data
const categories = [
  {
    name: 'Kitchen Tools',
    slug: 'kitchen-tools',
    description: 'Professional grade culinary instruments.',
    image: '/images/kitchen-bg.jpg', // Public folder mein images rakhein
  },
  {
    name: 'Gardening Tools',
    slug: 'gardening-tools',
    description: 'Heavy-duty tools for your outdoor space.',
    image: '/images/garden-bg.jpg',
  },
  {
    name: 'Cookware',
    slug: 'cookware',
    description: 'Premium pots, pans, and chef essentials.',
    image: '/images/cookware-bg.jpg',
  },
  {
    name: 'Garden Accessories',
    slug: 'garden-accessories',
    description: 'Essential add-ons for a perfect garden.',
    image: '/images/accessories-bg.jpg',
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
              {/* Placeholder for Image - Replace with <Image /> component later */}
              <div className="absolute inset-0 bg-slate-800 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Text Overlay */}
              <div className="relative p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
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