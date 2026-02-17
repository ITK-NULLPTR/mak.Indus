'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing strategies tailored to your business needs."
    },
    {
        question: "How can I get a quote?",
        answer: "You can get a quote by filling out the contact form on this page, or by emailing us directly. We'll get back to you within 24 hours with a detailed proposal."
    },
    {
        question: "Where are you located?",
        answer: "Our main office is located in the heart of the city, but we work with clients globally. Check out the map on this page to see our exact location."
    },
    {
        question: "Do you provide support after the project is completed?",
        answer: "Yes, we provide ongoing support and maintenance packages to ensure your digital products continue to perform optimally after launch."
    }
];

const QASection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-green-200 shadow-md bg-green-50/30' : 'border-gray-200 hover:border-green-200'
                            }`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between cursor-pointer items-center px-6 py-5 bg-white/50 hover:bg-white transition-colors focus:outline-none"
                        >
                            <span className={`font-semibold text-lg text-left transition-colors duration-200 ${openIndex === index ? 'text-green-700' : 'text-gray-800'
                                }`}>
                                {faq.question}
                            </span>
                            <ChevronDownIcon
                                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-green-600' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QASection;
