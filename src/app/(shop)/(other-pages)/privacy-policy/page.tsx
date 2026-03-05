import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = "March 6, 2026";

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-16 bg-white shadow-sm border-x border-slate-100">
        
        <header className="border-b-4 border-orange-500 pb-10 mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm italic">
            Mak Indus — Premier Tools & Equipment
          </p>
          <div className="mt-6 flex items-center text-slate-500 text-sm">
            <span className="bg-slate-100 px-3 py-1 rounded-full font-medium">Last Updated: {lastUpdated}</span>
          </div>
        </header>

        <div className="space-y-12 text-slate-700 leading-relaxed">
          
       
          <section>
            <p className="text-lg leading-8 text-slate-600">
              At <strong>Mak Indus</strong>, we are committed to providing only the best for professionals and DIY enthusiasts. Your trust is our greatest asset. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or purchase our high-quality tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center mr-3 text-base">01</span>
              Information We Collect
            </h2>
            <p className="mb-4">To provide a seamless shopping experience, we may collect the following data:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                <span className="font-bold text-slate-900 block">Personal Details:</span> 
                Name, shipping address, and billing information.
              </li>
              <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                <span className="font-bold text-slate-900 block">Contact Info:</span> 
                Email address and phone number for order updates.
              </li>
              <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                <span className="font-bold text-slate-900 block">Device Data:</span> 
                IP address, browser type, and site navigation patterns.
              </li>
              <li className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
                <span className="font-bold text-slate-900 block">Cookies:</span> 
                Small data files used to enhance site functionality and speed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center mr-3 text-base">02</span>
              How We Use Your Data
            </h2>
            <div className="prose prose-slate max-w-none">
              <p>We use your information strictly for business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Processing and delivering your orders efficiently.</li>
                <li>Providing customer support and technical assistance for our equipment.</li>
                <li>Sending periodic updates regarding new tool arrivals or exclusive promotions.</li>
                <li>Improving our website layout and product range based on user feedback.</li>
              </ul>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">Security Commitment</h2>
            <p className="text-slate-300 leading-7">
              We implement industry-standard security measures to ensure your data is never compromised. Mak Indus does not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is handled with the same precision we apply to our tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center mr-3 text-base">03</span>
              Third-Party Disclosure
            </h2>
            <p>
              We may share your information with trusted partners (e.g., courier services for delivery) only to the extent necessary to complete your transaction. These partners are obligated to keep your information confidential.
            </p>
          </section>

       
          <section className="border-t-2 border-slate-100 pt-10">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Contact Us</h2>
            <p className="mb-8 text-slate-600 italic">If you have any questions regarding this policy or your data, please reach out to our support team:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:support@makindus.com" className="group p-6 bg-orange-50 rounded-xl border border-orange-100 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <p className="text-xs uppercase font-bold text-orange-600 group-hover:text-orange-100 mb-1">Email Support</p>
                <span className="text-lg font-bold">support@makindus.com</span>
              </a>
              
              <a href="tel:03081417272" className="group p-6 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-300">
                <p className="text-xs uppercase font-bold text-slate-500 group-hover:text-slate-400 mb-1">Phone / WhatsApp</p>
                <span className="text-lg font-bold">0308-1417272</span>
              </a>
            </div>
          </section>

        </div>

        
        <footer className="mt-20 pt-8 border-t text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mak Indus. All rights reserved. | Engineered for Excellence.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;