'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Form Submitted:', data);
        toast.success('Message sent successfully! We will get back to you soon.');
        reset();
        setIsSubmitting(false);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll reply within 24 hours.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            {...register('name')}
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                                } focus:ring-4 focus:outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                                } focus:ring-4 focus:outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                        Subject
                    </label>
                    <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        placeholder="How can we help?"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                            } focus:ring-4 focus:outline-none transition-all duration-200 bg-gray-50/50 hover:bg-white`}
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                        Message
                    </label>
                    <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        placeholder="Write your message here..."
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-green-500 focus:ring-green-100'
                            } focus:ring-4 focus:outline-none transition-all duration-200 resize-none bg-gray-50/50 hover:bg-white`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <span>Send Message</span>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
