import React from 'react';

const ReturnPolicy = () => {
  const lastUpdated = "March 6, 2026";

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-16 text-slate-700 leading-relaxed">
      
        <header className="border-b-4 border-slate-900 pb-8 mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">
            Return & Exchange Policy
          </h1>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">
            Mak Indus | Engineered for Excellence
          </p>
          <p className="mt-4 text-slate-500 font-medium">Effective Date: {lastUpdated}</p>
        </header>

        <div className="space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">01</span>
              GENERAL POLICY OVERVIEW
            </h2>
            <div className="pl-11">
              <h3 className="font-bold text-slate-800 mb-2">1.1. No Standard Returns or Exchanges</h3>
              <p>
                <strong>Mak Indus</strong> maintains a strict no-return, no-exchange policy on all completed orders. Because our tools and equipment are often produced or procured based on specific technical specifications, branding, and bulk requirements, they are not held as general stock inventory. All sales are considered final once the order is confirmed and production/processing begins.
              </p>
              <p className="mt-2 italic bg-slate-50 p-3 border-l-4 border-orange-500">
                No return or exchange will be accepted unless there is a legitimate manufacturing issue that demonstrably deviates from the agreed order specifications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">02</span>
              ORDER REVIEW & SHIPMENT
            </h2>
            <div className="pl-11">
              <h3 className="font-bold text-slate-800 mb-2">2.1. Pre-Shipment Proofing</h3>
              <p>
                Before shipment, we provide comprehensive proof of product including high-resolution photographs and detailed specification sheets. You are required to confirm acceptance in writing prior to shipment. This acknowledgment serves as the basis for assessing any later claim.
              </p>
            </div>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">03. DEFECTS & CLAIMS</h2>
            <p className="mb-4 font-semibold">Eligibility criteria for claims:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Production differs materially from approved proof/specs.</li>
              <li>Notify <strong>Mak Indus</strong> in writing within 5 days of delivery.</li>
              <li>Provide verifiable evidence (photos/videos) of the deviation.</li>
              <li>Defect must not be due to handling, shipping, or post-delivery use.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">04</span>
              NO REFUNDS
            </h2>
            <div className="pl-11">
              <p>
                Under no circumstances will <strong>Mak Indus</strong> issue monetary refunds for any order, except where required by law. Validated claims will be addressed via replacement production or non-monetary remedies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">05</span>
              SHIPPING & RESPONSIBILITIES
            </h2>
            <div className="pl-11 space-y-4">
              <p>
                <strong>5.1. Return Costs:</strong> The customer is responsible for all shipping, customs, and related logistics costs at their expense unless otherwise agreed in writing.
              </p>
              <p>
                <strong>5.2. Condition:</strong> Returned goods must be securely packaged in original protective packaging and free from post-delivery damage.
              </p>
            </div>
          </section>

          <section className="border-l-4 border-orange-200 pl-6 py-2">
            <h2 className="text-lg font-bold text-slate-900">06. RESTOCKING FEE</h2>
            <p className="text-sm">
              A restocking fee of <strong>20%</strong> of the order value may be charged if a return is accepted, reflecting administrative and handling costs.
            </p>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-orange-400 uppercase tracking-tight">Initiating a Claim</h2>
            <p className="mb-4">Submit your claim via email to:</p>
            <a href="mailto:support@makindus.com" className="text-xl font-bold border-b-2 border-orange-400 hover:text-orange-400 transition-colors">
              support@makindus.com
            </a>
            <div className="mt-6 text-sm text-slate-400 space-y-1">
              <p>• Include Order Reference Number</p>
              <p>• Attach High-Resolution Photo/Video evidence</p>
              <p>• Include any 3rd party inspection reports</p>
            </div>
          </section>

          {/* Final Note */}
          <section className="pt-10 border-t text-xs text-slate-400 text-center">
            <p>
              <strong>Mak Indus</strong> reserves the right to modify this policy. Continued engagement with our services indicates acceptance of these terms.
            </p>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} Mak Indus. Engineered for Excellence.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;