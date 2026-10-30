import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight, ShieldCheck, SunMedium, Home, Building2, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<Props> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'Solar Solutions',
      path: '#solutions',
      isDropdown: true,
      items: [
        { label: 'Residential Rooftop Solar', path: '/residential', desc: '1 kW to 10 kW custom home rooftop systems' },
        { label: 'Commercial & Industrial Solar', path: '/commercial', desc: 'Warehouses, factories, institutions & offices' },
        { label: 'Housing Societies & RWAs', path: '/housing-societies', desc: 'Common area lighting, pumps & gated communities' },
      ]
    },
    { label: 'PM Surya Ghar', path: '/pm-surya-ghar' },
    { label: 'PM-KUSUM', path: '/pm-kusum' },
    { label: 'Calculators', path: '/calculator' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pointer-events-none' : ''}`}>
        {/* Top Utility Bar (Visible at top, smoothly collapses when scrolled) */}
        <div
          className={`bg-slate-950 text-slate-300 text-xs border-b border-slate-900 hidden md:block transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0 py-0 border-b-0 pointer-events-none' : 'max-h-12 opacity-100 py-2 px-4 sm:px-8 pointer-events-auto'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${COMPANY_DETAILS.phone1.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-solar-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-solar-500" />
                <span>{COMPANY_DETAILS.phone1}</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phone2.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-solar-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-solar-500" />
                <span>{COMPANY_DETAILS.phone2}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="inline-flex items-center gap-1.5 hover:text-solar-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-solar-500" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>MNRE & Telangana DISCOM Empanelled EPC</span>
              </div>
              <button
                onClick={() => handleLinkClick('/calculator')}
                className="hover:text-solar-400 transition-colors text-slate-300 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <SunMedium className="w-3.5 h-3.5 text-solar-500" />
                Solar Proposal Creator
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar: Full-width resting when at top; Floating capsule like v2 when scrolled */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'px-3 sm:px-6 pt-2.5 sm:pt-3 pointer-events-none' : 'px-0 pt-0'}`}>
          <nav
            aria-label="Main Navigation"
            className={`transition-all duration-300 pointer-events-auto ${
              isScrolled
                ? 'mx-auto max-w-6xl w-full rounded-2xl bg-white/90 backdrop-blur-2xl border border-stone-200/90 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-2 sm:py-2.5 px-4 sm:px-6'
                : 'w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs'
            }`}
          >
          <div className={`${isScrolled ? 'w-full' : 'max-w-7xl mx-auto'} flex items-center justify-between gap-3 lg:gap-4 xl:gap-6 flex-nowrap w-full`}>
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
              className="shrink-0 flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-solar-500 rounded-lg p-0.5 cursor-pointer"
            >
              <div className="bg-slate-950 px-2.5 py-1.5 rounded-xl border border-slate-800 flex items-center shadow-xs group-hover:border-slate-700 transition-colors">
                <img
                  src="/assets/Logo-6-e1778049478712.png"
                  alt="Meghvi Solar Logo"
                  className="h-6 sm:h-7 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="hidden xl:block pl-2.5 border-l border-stone-200">
                <span className="block text-xs uppercase tracking-widest font-mono text-slate-400 font-bold leading-none">
                  Energy Engineered
                </span>
                <span className="block text-xs font-semibold leading-tight mt-0.5 text-emerald-700">
                  Hyderabad • South India
                </span>
              </div>
            </a>

            {/* Desktop Links: Single Strict Line */}
            <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-1 xl:gap-2 flex-nowrap whitespace-nowrap">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  const isSolutionsActive = ['/residential', '/commercial', '/housing-societies'].includes(currentPath);
                  return (
                    <div key={link.label} className="relative group shrink-0">
                      <button
                        type="button"
                        onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                        aria-expanded={solutionsDropdownOpen}
                        aria-haspopup="true"
                        className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] font-semibold tracking-tight transition-all inline-flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                          isSolutionsActive
                            ? 'text-slate-950 bg-stone-100 font-bold ring-1 ring-stone-200'
                            : 'text-slate-700 hover:text-slate-950 hover:bg-stone-100/70'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3 h-3 text-slate-500 group-hover:rotate-180 transition-transform shrink-0" />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        role="menu"
                        aria-label="Solar Offerings"
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl shadow-2xl p-2 z-50 transition-all duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3 bg-white/95 backdrop-blur-xl border border-stone-200/90 ${
                          solutionsDropdownOpen
                            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                            : 'opacity-0 translate-y-1 invisible pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:pointer-events-auto'
                        }`}
                      >
                        <div className="px-2 py-1.5 mb-1 border-b border-stone-100">
                          <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">
                            Solar Infrastructure Engineering
                          </span>
                        </div>
                        {link.items?.map((item) => {
                          const isSubActive = currentPath === item.path;
                          return (
                            <a
                              key={item.path}
                              href={item.path}
                              onClick={(e) => { e.preventDefault(); handleLinkClick(item.path); }}
                              className={`w-full flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer ${
                                isSubActive
                                  ? 'bg-solar-50/80 text-solar-950 font-medium ring-1 ring-solar-200/60'
                                  : 'hover:bg-stone-50 text-slate-800'
                              }`}
                            >
                              <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                                isSubActive ? 'bg-solar-500 text-slate-950 shadow-xs' : 'bg-stone-100 text-slate-600'
                              }`}>
                                {item.path === '/residential' && <Home className="w-4 h-4" />}
                                {item.path === '/commercial' && <Building2 className="w-4 h-4" />}
                                {item.path === '/housing-societies' && <Users className="w-4 h-4" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="block text-xs font-bold leading-snug text-slate-900">{item.label}</span>
                                <span className="block text-xs mt-0.5 leading-snug text-slate-500">{item.desc}</span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const isActive = currentPath === link.path || (link.path === '/about-us' && currentPath === '/about');
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.path); }}
                    className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] font-semibold tracking-tight transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'text-slate-950 font-bold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-stone-100/70'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 rounded-lg -z-10 bg-stone-100 ring-1 ring-stone-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Header Action CTA */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}
                className="btn-amber text-xs font-bold py-2 px-3.5 xl:px-4 rounded-xl shadow-xs hover:shadow active:scale-95 transition-all inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Get Solar Assessment</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </motion.a>
            </div>

            {/* Mobile hamburger & Cross icon (Crisp dark in all modes) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="p-2 rounded-xl lg:hidden cursor-pointer text-slate-900 hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                id="mobile-navigation-drawer"
                role="region"
                aria-label="Mobile Navigation Drawer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="overflow-hidden lg:hidden border-t px-5 py-6 space-y-4 shadow-xl border-stone-200 bg-white/98 backdrop-blur-2xl text-slate-900 rounded-b-2xl"
              >
                <div className="space-y-1">
                  <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    Home
                  </a>

                  <div className="py-2 border-y border-stone-100 my-1">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold px-3 block mb-1">
                      Solar Offerings
                    </span>
                    <a
                      href="/residential"
                      onClick={(e) => { e.preventDefault(); handleLinkClick('/residential'); }}
                      className="w-full block text-left py-2 px-3 text-sm font-medium text-slate-700 hover:bg-stone-50 rounded-lg"
                    >
                      Residential Rooftop Solar
                    </a>
                    <a
                      href="/commercial"
                      onClick={(e) => { e.preventDefault(); handleLinkClick('/commercial'); }}
                      className="w-full block text-left py-2 px-3 text-sm font-medium text-slate-700 hover:bg-stone-50 rounded-lg"
                    >
                      Commercial & Industrial Solar
                    </a>
                    <a
                      href="/housing-societies"
                      onClick={(e) => { e.preventDefault(); handleLinkClick('/housing-societies'); }}
                      className="w-full block text-left py-2 px-3 text-sm font-medium text-slate-700 hover:bg-stone-50 rounded-lg"
                    >
                      Housing Societies & RWAs
                    </a>
                  </div>

                  <a
                    href="/pm-surya-ghar"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/pm-surya-ghar'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/pm-surya-ghar'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    PM Surya Ghar Yojana (₹78k Subsidy)
                  </a>

                  <a
                    href="/pm-kusum"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/pm-kusum'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/pm-kusum'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    PM-KUSUM Agricultural Solar
                  </a>

                  <a
                    href="/calculator"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/calculator'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/calculator'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    Calculators & Proposals
                  </a>

                  <a
                    href="/about-us"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/about-us'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/about-us' || currentPath === '/about'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    About Meghvi Solar
                  </a>

                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}
                    className={`w-full block text-left py-2.5 px-3 rounded-xl text-base font-medium ${
                      currentPath === '/contact'
                        ? 'bg-solar-50 text-solar-900 font-bold'
                        : 'text-slate-800 hover:bg-stone-50'
                    }`}
                  >
                    Contact & Office
                  </a>
                </div>

                <div className="pt-3 border-t border-stone-200">
                  <button
                    onClick={() => handleLinkClick('/contact')}
                    className="w-full btn-amber text-sm py-3 justify-center cursor-pointer"
                  >
                    Book Free Rooftop Survey
                  </button>

                  <div className="mt-4 text-center">
                    <span className="text-xs text-slate-500 block">Direct Hyderabad Engineering Desk:</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone1.replace(/\s+/g, '')}`}
                      className="text-sm font-bold font-mono mt-0.5 inline-block text-slate-900 hover:text-solar-600"
                    >
                      {COMPANY_DETAILS.phone1}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
    {/* Natural layout flow spacer so page content starts cleanly below the fixed navbar */}
    <div className="h-[64px] md:h-[102px] w-full shrink-0 pointer-events-none select-none" aria-hidden="true" />
  </>
  );
};
