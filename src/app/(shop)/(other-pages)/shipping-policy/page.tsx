import React from 'react';

const ShippingPolicy = () => {
  const lastUpdated = "March 6, 2026";

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100">
      <div className="max-w-4xl mx-auto px-6 py-16 text-slate-700 leading-relaxed">
        
        {/* Header */}
        <header className="border-b-4 border-slate-900 pb-8 mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">
            Mak Indus | Global Trade & Logistics
          </p>
          <p className="mt-4 text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
        </header>

        <div className="space-y-12">
          
          {/* 1. Incoterms Overview */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">01</span>
              International Commercial Terms (Incoterms®)
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                <strong>Mak Indus</strong> utilizes Incoterms® 2020 to define the responsibilities of buyers and sellers in international transactions. These terms clarify when delivery obligations are fulfilled, who bears customs duties, and the point at which risk transfers.
              </p>
              
            </div>
          </section>

          {/* 2. Shipping Terms */}
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">02. Shipping Terms & Risk Allocation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-black text-orange-600 uppercase text-sm">CNF / CFR (Cost & Freight)</h3>
                <p className="text-sm mt-1">Mak Indus clears goods for export and pays ocean freight to the destination port. Risk transfers to the buyer once loaded onto the vessel.</p>
              </div>
              <div>
                <h3 className="font-black text-orange-600 uppercase text-sm">CIF (Cost, Insurance & Freight)</h3>
                <p className="text-sm mt-1">Similar to CNF, but Mak Indus secures minimal marine insurance for the buyer's benefit.</p>
              </div>
              <div>
                <h3 className="font-black text-orange-600 uppercase text-sm">DDP (Delivered Duty Paid)</h3>
                <p className="text-sm mt-1 font-bold">Only applies if explicitly agreed in writing.</p>
                <p className="text-sm">Mak Indus bears all costs/risks to the final destination, including import duties and local taxes.</p>
              </div>
            </div>
          </section>

          {/* 3. Customs & Duties */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">03</span>
              Customs, Duties & Taxes
            </h2>
            <div className="pl-11 space-y-4">
              <p>
                <strong>Export Clearance:</strong> Mak Indus handles all export documentation and clearance from Pakistan unless otherwise stated.
              </p>
              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm">
                  <strong>Import Responsibilities:</strong> Unless explicitly stated as DDP, the <strong>Buyer</strong> is responsible for all import duties, VAT/GST, brokerage fees, and local port charges.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Timelines & Documentation */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">04</span>
              Delivery Timelines & Docs
            </h2>
            <div className="pl-11">
              <p className="mb-4 italic text-slate-500 text-sm">All delivery dates are estimates and subject to port congestion or customs inspections.</p>
              <p className="font-bold mb-2">Standard Documentation Provided:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>• Commercial Invoice</li>
                <li>• Packing List</li>
                <li>• Bill of Lading / Air Waybill</li>
                <li>• Certificate of Origin</li>
              </ul>
            </div>
          </section>

          {/* 5. Payment Terms */}
          <section className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-orange-400 uppercase tracking-tight">05. Payment & Banking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300">
              <div>
                <h4 className="text-white font-bold mb-2 uppercase">Letter of Credit (LC)</h4>
                <p>Must be irrevocable and issued by a reputable international bank. Compliance is critical for release of funds.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase">DP / CAD</h4>
                <p>Documents are released by the buyer’s bank only upon full payment at sight.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase">TT / Advance</h4>
                <p>Telegraphic Transfers must be clearly specified in the sales contract prior to shipment.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase">DA (Acceptance)</h4>
                <p>Documents released against a promise to pay on a future specified date (30-90 days).</p>
              </div>
            </div>
          </section>

          {/* 6. Insurance */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded flex items-center justify-center mr-3 text-sm">06</span>
              Insurance & Transit Damage
            </h2>
            <div className="pl-11">
              <p>
                Unless shipped under CIF terms, <strong>Insurance is the Buyer's responsibility</strong>. We strongly recommend procuring marine cargo insurance covering loss, theft, and handling damage during transit.
              </p>
            </div>
          </section>

          {/* Footer / Contact */}
          <footer className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-slate-900 uppercase">Logistics Support</p>
                <a href="mailto:support@makindus.com" className="text-orange-600 hover:underline">support@makindus.com</a>
              </div>
              <p className="text-xs text-slate-400 text-center max-w-xs">
                Mak Indus reserves the right to amend this policy. Continued use of our services constitutes acceptance of these terms.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;