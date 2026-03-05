import React from 'react';
import Link from 'next/link';

const FAQPage = () => {
  const faqs = [
    {
      category: "About Mak Indus & Our Services",
      questions: [
        {
          q: "What does Mak Indus do?",
          a: "Mak Indus is a premier destination and OEM manufacturer specializing in high-quality tools, industrial equipment, and customized hardware solutions. We partner with professionals and DIY enthusiasts worldwide to provide equipment built to specific technical standards."
        },
        {
          q: "What does OEM manufacturing mean in your context?",
          a: "Original Equipment Manufacturing (OEM) means we produce tools and equipment based on your specific designs, branding, and technical requirements, rather than just selling generic off-the-shelf stock."
        }
      ]
    },
    {
      category: "Ordering & Specifications",
      questions: [
        {
          q: "How do I start a production order?",
          a: "Contact our sales team via email or WhatsApp with your technical drawings or specifications. We will provide a detailed quote and lead time based on your requirements."
        },
        {
          q: "Do you produce samples?",
          a: "Yes. For bulk orders, we provide pre-production samples to ensure the weight, material grade, and dimensions meet your professional standards before full-scale manufacturing begins."
        }
      ]
    },
    {
      category: "Shipping & Logistics",
      questions: [
        {
          q: "How are shipping costs and responsibilities determined?",
          a: "We operate under international Incoterms® (such as CNF, CIF, or DAP). Generally, export clearance is handled by Mak Indus, while import duties and local taxes are the responsibility of the buyer unless DDP terms are agreed upon."
        },
        {
          q: "Do you handle customs clearance?",
          a: "We manage all export documentation from Pakistan. However, the buyer is responsible for import customs clearance in their destination country unless a specific 'Delivered Duty Paid' (DDP) agreement is in place."
        }
      ]
    },
    {
      category: "Returns & Claims",
      questions: [
        {
          q: "Can I return or exchange products?",
          a: "Due to the customized and bulk nature of our equipment, Mak Indus maintains a strict no-return policy once production begins. However, claims for manufacturing defects are thoroughly investigated."
        },
        {
          q: "What if I receive defective goods?",
          a: "Claims must be submitted within 5 days of delivery with high-resolution photo/video evidence. Validated manufacturing defects will be resolved through replacement production or credit."
        }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        
       
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Mak Indus tools, ordering processes, and international shipping logistics.
          </p>
        </div>

      
        <div className="space-y-12">
          {faqs.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-2">
                {section.category}
              </h2>
              <div className="grid gap-4">
                {section.questions.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-8">Our technical support team is ready to assist you with your equipment needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Contact Support
            </Link>
            <a 
              href="mailto:support@makindus.com" 
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold transition-colors border border-slate-700"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;