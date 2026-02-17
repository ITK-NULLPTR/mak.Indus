'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(imageRef.current, {
            opacity: 0,
            scale: 1.1,
            duration: 1.5,
            ease: 'expo.out'
        })
            .from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            }, '-=1')
            .from(textRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, '-=0.6');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <div ref={imageRef} className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301&ixlib=rb-4.0.3"
                    alt="Contact Us Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
                    We're Here for You
                </h1>
                <p ref={textRef} className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md text-gray-100/90 leading-relaxed">
                    Have questions? Need support? Our team is ready to help you grow smarter and live better.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
