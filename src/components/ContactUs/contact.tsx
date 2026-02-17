'use client';
import React from 'react';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import QASection from './QASection';
import HeroSection from './HeroSection';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            <HeroSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="w-full order-2 lg:order-1">
                        <ContactForm />
                    </div>

                    <div className="space-y-10 w-full order-1 lg:order-2">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-full shrink-0">
                                        <MapPinIcon className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Our Office</p>
                                        <p className="text-gray-600 mt-1">
                                            1234 Street Name, City Name<br />
                                            Country 12345
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-full shrink-0">
                                        <EnvelopeIcon className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email Us</p>
                                        <p className="text-gray-600 mt-1">contact@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-full shrink-0">
                                        <PhoneIcon className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Call Us</p>
                                        <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GoogleMap />
                    </div>
                </div>

                <div className="pt-16 border-t border-gray-200">
                    <QASection />
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
