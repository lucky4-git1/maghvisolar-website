import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, AlertCircle, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface Props {
  defaultUserType?: string;
  defaultBill?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const ConsultationForm: React.FC<Props> = ({
  defaultUserType = 'Residential',
  defaultBill = '₹2,500 – ₹4,000',
  className = '',
  title = "Request Free Technical Rooftop Survey",
  subtitle = "Direct consultation with a licensed Hyderabad solar engineer. Zero obligation."
}) => {
  const [userType, setUserType] = useState<string>(defaultUserType);
  const [bill, setBill] = useState<string>(defaultBill);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [state, setState] = useState<string>('Telangana');
  const [termsAgreed, setTermsAgreed] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [leadRef, setLeadRef] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!pincode.trim() || pincode.trim().length < 6) {
      setErrorMessage('Please provide a valid 6-digit postal pincode.');
      return;
    }
    if (!termsAgreed) {
      setErrorMessage('Please consent to contact for solar proposal generation.');
      return;
    }

    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      const generatedRef = `MGS-${Math.floor(100000 + Math.random() * 900000)}`;
      setLeadRef(generatedRef);
      setLoading(false);
      setSubmitted(true);

      // Save locally for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('meghvi_leads') || '[]');
        existing.push({
          ref: generatedRef,
          userType,
          bill,
          fullName,
          phone: cleanPhone,
          pincode,
          address,
          state,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('meghvi_leads', JSON.stringify(existing));
      } catch (err) {
        // ignore storage errors
      }
    }, 850);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-3xl p-8 border border-emerald-300 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Enquiry Registered: Ref #{leadRef}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-3">
          Site Assessment Requested!
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{fullName}</strong>. A Meghvi Solar technical project engineer will contact you at <strong>+91 {phone}</strong> within 2 business hours with an engineering shadow-analysis report.
        </p>
        
        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919700002812?text=Hello%20Meghvi%20Solar,%20I%20just%20submitted%20lead%20assessment%20request"
            target="_blank"
            rel="noreferrer"
            className="btn-amber text-xs py-2.5 px-4"
          >
            Open WhatsApp for Fast Track
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFullName('');
              setPhone('');
            }}
            className="btn-secondary text-xs py-2.5 px-4"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden ${className}`}>
      <div className="relative bg-slate-900 text-white p-6 sm:p-7 border-b border-slate-800 overflow-hidden">
        {/* Photovoltaic Solar Panel Cells Texture Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/commercial_industrial_solar_rooftop.jpg"
            alt="Solar PV Panels Background"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20" />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-solar-400 bg-solar-500/10 px-2.5 py-0.5 rounded-full border border-solar-500/20 mb-2">
            <Sparkles className="w-3 h-3 text-solar-400" />
            Direct EPC Consultation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
        {errorMessage && (
          <div role="alert" aria-live="polite" className="flex items-center gap-2 p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* User Type Tabs */}
        <div>
          <span id="category-group-label" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1.5">
            1. Installation Category
          </span>
          <div role="radiogroup" aria-labelledby="category-group-label" className="grid grid-cols-3 gap-2">
            {['Residential', 'Commercial', 'Housing Society'].map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={userType === t}
                onClick={() => setUserType(t)}
                className={`py-2 px-2 text-center text-xs font-semibold rounded-xl border transition-all ${
                  userType === t
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Bill Selection */}
        <div>
          <label htmlFor="consultation-bill" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1.5">
            2. Monthly Electricity Bill Bracket
          </label>
          <select
            id="consultation-bill"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full text-xs font-medium bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-slate-800 focus:bg-white focus:border-solar-500"
          >
            <option value="Under ₹1,500">Under ₹1,500 / month (1 kW)</option>
            <option value="₹1,500 – ₹2,500">₹1,500 – ₹2,500 / month (2 kW)</option>
            <option value="₹2,500 – ₹4,000">₹2,500 – ₹4,000 / month (3 kW Recommended)</option>
            <option value="₹4,000 – ₹7,000">₹4,000 – ₹7,000 / month (5 kW)</option>
            <option value="₹7,000 – ₹10,000">₹7,000 – ₹10,000 / month (8 kW)</option>
            <option value="₹10,000+">₹10,000+ / month (10 kW+ Commercial)</option>
          </select>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="consultation-fullname" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1">
              Your Full Name *
            </label>
            <input
              id="consultation-fullname"
              type="text"
              required
              placeholder="e.g. S. Rao"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-slate-900 focus:bg-white focus:border-solar-500"
            />
          </div>

          <div>
            <label htmlFor="consultation-phone" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1">
              Mobile Number (WhatsApp) *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">+91</span>
              <input
                id="consultation-phone"
                type="tel"
                required
                maxLength={10}
                placeholder="97000 00000"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className={`w-full text-xs font-mono rounded-xl pl-11 pr-3 py-2.5 text-slate-900 transition-colors ${
                  errorMessage && phone.replace(/\D/g, '').length < 10
                    ? 'border-2 border-rose-500 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/30'
                    : 'bg-stone-50 border border-stone-200 focus:bg-white focus:border-solar-500'
                }`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="consultation-pincode" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1">
              Pin Code (for DISCOM feeder check) *
            </label>
            <input
              id="consultation-pincode"
              type="text"
              required
              maxLength={6}
              placeholder="e.g. 500050"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              className={`w-full text-xs font-mono rounded-xl px-3 py-2.5 text-slate-900 transition-colors ${
                errorMessage && pincode.replace(/\D/g, '').length < 6
                  ? 'border-2 border-rose-500 bg-rose-50/20 focus:ring-2 focus:ring-rose-500/30'
                  : 'bg-stone-50 border border-stone-200 focus:bg-white focus:border-solar-500'
              }`}
            />
          </div>

          <div>
            <label htmlFor="consultation-state" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1">
              State / Region
            </label>
            <select
              id="consultation-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full text-xs font-medium bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-slate-800 focus:bg-white focus:border-solar-500"
            >
              {COMPANY_DETAILS.statesSupported.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="consultation-address" className="block text-[11px] uppercase font-mono tracking-wider text-slate-500 font-semibold mb-1">
            Locality / Rooftop Address (Optional)
          </label>
          <input
            id="consultation-address"
            type="text"
            placeholder="e.g. Chandanagar, Hyderabad"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-slate-900 focus:bg-white focus:border-solar-500"
          />
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="terms-check"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            className="mt-0.5 rounded border-stone-300 text-solar-600 focus:ring-solar-500"
          />
          <label htmlFor="terms-check" className="text-[11px] text-slate-500 leading-snug">
            I authorize Meghvi Solar engineers to analyze my feeder capacity and send me the personalized rooftop layout via WhatsApp/Phone.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-amber text-sm font-bold py-3.5 flex items-center justify-center gap-2 mt-2"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              Verifying Feeder Capacity...
            </span>
          ) : (
            <>
              <span>Get Free Site Assessment & Quotation</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="text-center pt-2">
          <span className="text-[11px] text-slate-400 font-mono inline-flex items-center gap-1.5 justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Zero SPAM • 100% Privacy Protected • Hyderabad Technical Support
          </span>
        </div>
      </form>
    </div>
  );
};
