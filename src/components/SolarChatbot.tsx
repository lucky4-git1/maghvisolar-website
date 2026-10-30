import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, X, Send, Bot, User, Phone, PhoneCall, Sparkles, 
  ArrowRight, Calculator, CheckCircle2, ChevronRight, Volume2, 
  VolumeX, RotateCcw, Building2, Home, Users, Tractor, ShieldCheck, 
  IndianRupee, ExternalLink, HelpCircle, Check, Loader2
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  timestamp: string;
  type?: 'text' | 'quota_result' | 'handoff_card' | 'nav_card' | 'quota_form';
  metadata?: any;
}

interface Props {
  onNavigate: (path: string) => void;
}

export const SolarChatbot: React.FC<Props> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('meghvi_chat_sound') !== 'false';
  });
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(1);
  const [hasOpenedBefore, setHasOpenedBefore] = useState<boolean>(false);

  // Auto Quota Wizard State
  const [quotaStep, setQuotaStep] = useState<number>(0);
  const [quotaData, setQuotaData] = useState<{
    propertyType: string;
    monthlyBill: number;
    roofArea: number;
  }>({
    propertyType: 'Residential Villa',
    monthlyBill: 5000,
    roofArea: 350
  });

  // Human Handoff Form State
  const [handoffForm, setHandoffForm] = useState<{
    name: string;
    phone: string;
    location: string;
    submitted: boolean;
  }>({
    name: '',
    phone: '',
    location: '',
    submitted: false
  });

  // Audio Synth Helper for subtle audio chimes
  const playChime = (type: 'send' | 'receive') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'send') {
        osc.frequency.setValueAtTime(540, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else {
        osc.frequency.setValueAtTime(680, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch {
      // AudioContext muted or blocked by browser policy
    }
  };

  // Chat Messages State with Session Storage Backup
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = sessionStorage.getItem('meghvi_chat_messages');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return [
      {
        id: 'msg-1',
        sender: 'bot',
        text: 'Namaste! I am the Meghvi Solar Assistant. I can generate an instant rooftop solar quota, verify your ₹78,000 PM Surya Ghar subsidy, navigate the site, or connect you with our Chandanagar senior EPC engineers. How can I help you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      }
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem('meghvi_chat_messages', JSON.stringify(messages));
    } catch {
      // Ignore storage errors
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem('meghvi_chat_sound', String(next));
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
    setHasOpenedBefore(true);
  };

  const clearChat = () => {
    const resetMessages: ChatMessage[] = [
      {
        id: 'msg-reset',
        sender: 'bot',
        text: 'Chat history cleared. How can I assist you with your solar requirements in Hyderabad or Telangana?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      }
    ];
    setMessages(resetMessages);
    setQuotaStep(0);
    setHandoffForm({ name: '', phone: '', location: '', submitted: false });
  };

  // Quick Action Chips
  const quickActions = [
    { label: '⚡ Instant Solar Quota', action: () => startQuotaWizard() },
    { label: '🏛️ ₹78,000 Subsidy Check', action: () => handleUserQuestion('Tell me about PM Surya Ghar ₹78,000 subsidy and DBT process') },
    { label: '🏢 Commercial EPC (350kW+)', action: () => handleUserQuestion('Tell me about Commercial solar and 40% accelerated depreciation') },
    { label: '🚜 PM-KUSUM Pumps', action: () => handleUserQuestion('Explain PM-KUSUM agricultural solar pump subsidy') },
    { label: '📞 Speak to EPC Engineer', action: () => triggerHumanHandoff() },
    { label: '🗺️ Office Location', action: () => handleUserQuestion('Where is your Chandanagar office and what are your phone numbers?') },
  ];

  // Start conversational auto-quota wizard
  const startQuotaWizard = () => {
    setQuotaStep(1);
    const newMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: "Let's calculate your instant solar quota! Step 1 of 2: What type of property do you want to power?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'quota_form',
      metadata: { step: 1 }
    };
    setMessages(prev => [...prev, newMsg]);
    playChime('receive');
  };

  // Answer Property Type
  const selectPropertyType = (type: string) => {
    setQuotaData(prev => ({ ...prev, propertyType: type }));
    setQuotaStep(2);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: type,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: `Great! For your ${type}, what is your typical monthly electricity bill?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'quota_form',
      metadata: { step: 2 }
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    playChime('receive');
  };

  // Answer Monthly Bill and Generate Quota
  const selectMonthlyBill = (bill: number, label: string) => {
    setQuotaData(prev => ({ ...prev, monthlyBill: bill }));
    setQuotaStep(3);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: label,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Calculate Sizing & Financials
    const unitsPerMonth = Math.round(bill / 8.5); // avg ₹8.5/unit in Telangana slab
    const kwNeeded = Math.max(2, Math.min(25, Math.round((unitsPerMonth / 120) * 10) / 10));
    
    // Subsidy: Up to ₹78,000 for residential
    const subsidy = quotaData.propertyType.includes('Commercial') ? 0 : (kwNeeded >= 3 ? 78000 : (kwNeeded >= 2 ? 66000 : 33000));
    const grossCost = Math.round(kwNeeded * 68000);
    const netCost = grossCost - subsidy;
    const monthlyUnits = Math.round(kwNeeded * 120);
    const monthlySavings = Math.round(monthlyUnits * 7.8);
    const annualSavings = monthlySavings * 12;
    const payback = (netCost / annualSavings).toFixed(1);
    const lifetimeSavings = Math.round((annualSavings * 25) - netCost);

    const quotaResultMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: `Here is your verified Meghvi Solar Engineering Quota for ${quotaData.propertyType}:`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'quota_result',
      metadata: {
        kwNeeded,
        grossCost,
        subsidy,
        netCost,
        monthlyUnits,
        monthlySavings,
        annualSavings,
        payback,
        lifetimeSavings,
        propertyType: quotaData.propertyType
      }
    };

    setMessages(prev => [...prev, userMsg, quotaResultMsg]);
    playChime('receive');
  };

  // Human Handoff Trigger
  const triggerHumanHandoff = () => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: 'I would like to speak to an EPC specialist or book a free site survey.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const handoffMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: 'Connecting you with our Lead Solar EPC Engineers at the Chandanagar Technical Operations Desk:',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'handoff_card'
    };

    setMessages(prev => [...prev, userMsg, handoffMsg]);
    playChime('receive');
  };

  // Submit callback request inside chat
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handoffForm.phone) return;

    setHandoffForm(prev => ({ ...prev, submitted: true }));

    const confirmMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `Thank you ${handoffForm.name || 'valued customer'}! Your request has been dispatched to Senior Engineer Er. Rajesh at our Chandanagar office. We will call you at ${handoffForm.phone} within 15 minutes to schedule your complimentary drone roof survey.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    };

    setMessages(prev => [...prev, confirmMsg]);
    playChime('receive');
  };

  // Comprehensive Knowledge Engine & Router
  const handleUserQuestion = (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    playChime('send');
    setIsTyping(true);

    const lower = text.toLowerCase();

    setTimeout(() => {
      setIsTyping(false);
      let replyText = '';
      let replyType: ChatMessage['type'] = 'text';
      let metadata: any = null;

      // 1. Navigation checks
      if (lower.includes('residential') || lower.includes('home') || lower.includes('villa')) {
        replyText = "Our Residential EPC division specializes in elevated pergola rooftop systems that retain 100% terrace lifestyle space, backed by 30-year linear warranties and TSSPDCL net-metering.";
        replyType = 'nav_card';
        metadata = { target: '/residential', title: 'Residential Solar EPC', label: 'Explore Residential Solar' };
      } else if (lower.includes('commercial') || lower.includes('factory') || lower.includes('industry') || lower.includes('shed') || lower.includes('depreciation')) {
        replyText = "For commercial facilities in Telangana, solar delivers an ROI of 3.2 years and qualifies for 40% Accelerated Depreciation under Section 32 of the Income Tax Act.";
        replyType = 'nav_card';
        metadata = { target: '/commercial', title: 'Commercial & Industrial Solar EPC', label: 'Explore Commercial Megawatt' };
      } else if (lower.includes('society') || lower.includes('apartment') || lower.includes('gated community') || lower.includes('flats')) {
        replyText = "Housing societies in Hyderabad eliminate up to 90% of common area maintenance bills (elevators, water pumps, clubhouse) through dedicated common-meter solar arrays.";
        replyType = 'nav_card';
        metadata = { target: '/housing-societies', title: 'Apartments & Housing Societies EPC', label: 'Explore Housing Societies' };
      } else if (lower.includes('surya ghar') || lower.includes('subsidy') || lower.includes('dbt') || lower.includes('78000') || lower.includes('78,000')) {
        replyText = "Under PM Surya Ghar Muft Bijli Yojana, direct bank transfer (DBT) subsidies are guaranteed: ₹33,000 for 1kW, ₹66,000 for 2kW, and ₹78,000 for 3kW and above. We handle 100% of the portal liaison and TSSPDCL feasibility.";
        replyType = 'nav_card';
        metadata = { target: '/pm-surya-ghar', title: 'PM Surya Ghar Central Subsidy', label: 'View Subsidy Structure' };
      } else if (lower.includes('kusum') || lower.includes('pump') || lower.includes('farm') || lower.includes('agriculture')) {
        replyText = "PM-KUSUM provides up to 90% subsidy for farmers in Telangana to replace expensive diesel pumps with high-flow DC solar submersible pumps with automated dual-axis tracking.";
        replyType = 'nav_card';
        metadata = { target: '/pm-kusum', title: 'PM-KUSUM Solar Agricultural Pumps', label: 'Explore Farm Solar' };
      } else if (lower.includes('calculator') || lower.includes('estimate') || lower.includes('loan') || lower.includes('emi')) {
        replyText = "You can simulate your exact rooftop generation, DISCOM tariff offset, and SBI Surya Ghar loan EMIs using our Engineering Sizing Studio.";
        replyType = 'nav_card';
        metadata = { target: '/calculator', title: 'Solar Proposal & Loan Studio', label: 'Open Proposal Studio' };
      } else if (lower.includes('contact') || lower.includes('office') || lower.includes('address') || lower.includes('phone') || lower.includes('call') || lower.includes('human') || lower.includes('talk')) {
        replyText = "Meghvi Solar is located at Chandanagar, Hyderabad 500050. Our technical team is available at +91 90001 02120 and +91 99898 56655.";
        replyType = 'handoff_card';
      } else if (lower.includes('quota') || lower.includes('cost') || lower.includes('price')) {
        startQuotaWizard();
        return;
      } else if (lower.includes('net meter') || lower.includes('tsspdcl') || lower.includes('tsnpdcl')) {
        replyText = "We are an empanelled Grade-A EPC contractor with TSSPDCL & TSNPDCL. We handle the entire feasibility sanction, bi-directional net-meter replacement, and CEIG approvals within 15–20 days.";
      } else if (lower.includes('panel') || lower.includes('hardware') || lower.includes('brand') || lower.includes('warranty')) {
        replyText = "We deploy only Tier-1 ALMM & DCR-compliant bifacial TOPCon monocrystalline modules (Waaree, Adani, Tata, Vikram) coupled with German/global IP66 inverters (Sungrow, GoodWe, SolarEdge) backed by 30-year linear performance warranties.";
      } else {
        replyText = "Thank you for asking! Meghvi Solar provides turnkey rooftop solar solutions across Hyderabad and Telangana. Would you like an instant sizing quota, assistance with the ₹78,000 PM Surya Ghar subsidy, or to speak directly with an EPC engineer?";
      }

      const botReplyMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: replyType,
        metadata: metadata
      };

      setMessages(prev => [...prev, botReplyMsg]);
      playChime('receive');
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal.trim();
    setInputVal('');
    handleUserQuestion(text);
  };

  return (
    <>
      {/* FLOATING ACTION DOCK: Proposal Studio + Direct WhatsApp + AI Concierge */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 select-none">
        
        {/* Proposal Studio Button */}
        <button
          onClick={() => onNavigate('/calculator')}
          aria-label="Open Proposal Studio and Solar Calculator"
          className="bg-slate-950/95 backdrop-blur-md text-white hover:bg-slate-900 text-xs font-semibold py-2.5 px-3.5 rounded-xl shadow-xl border border-slate-700/80 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5 text-solar-400" />
          <span className="hidden sm:inline">Proposal Studio</span>
        </button>

        {/* Direct WhatsApp Consultation Button */}
        <a
          href="https://wa.me/919700002812?text=Hello%20Meghvi%20Solar,%20I%20would%20like%20to%20know%20more%20about%20solar%20installation"
          target="_blank"
          rel="noreferrer"
          aria-label="Direct WhatsApp Consultation"
          className="w-11 h-11 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-emerald-500/50 cursor-pointer"
          title="Direct WhatsApp Consultation"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Floating Teaser Prompt when closed */}
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={handleOpenChat}
            className="hidden lg:flex items-center gap-2 bg-slate-950/95 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-xl text-xs hover:border-solar-500/80 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-solar-400 shrink-0" />
            <span className="font-semibold text-slate-200">Need Solar Quota?</span>
            <span className="text-[10px] font-mono bg-solar-500/20 text-solar-400 px-1.5 py-0.5 rounded font-bold">AI Concierge</span>
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              handleOpenChat();
            }
          }}
          aria-label={isOpen ? "Close solar assistant" : "Open Meghvi Solar AI Concierge"}
          className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center transition-all cursor-pointer border ${
            isOpen 
              ? 'bg-slate-900 text-white border-slate-700 hover:bg-slate-800' 
              : 'bg-solar-500 text-slate-950 border-amber-400 hover:bg-solar-400 shadow-amber-glow'
          }`}
          title="Meghvi Solar AI Concierge"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              {unreadCount > 0 && !hasOpenedBefore && (
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-600 text-white font-mono text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  1
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* CHAT WINDOW MODAL / DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] max-h-[82vh] h-[640px] bg-white rounded-3xl shadow-2xl border border-stone-200/90 flex flex-col overflow-hidden text-slate-900"
          >
            {/* Header */}
            <div className="bg-slate-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-solar-500/20 border border-solar-500/40 flex items-center justify-center text-solar-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs tracking-tight">Meghvi Solar AI</h3>
                    <span className="text-[9px] font-mono font-bold bg-solar-500/20 text-solar-400 px-1 py-0.2 rounded">TELANGANA</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">TSSPDCL / TSNPDCL Live Assistant</p>
                </div>
              </div>

              {/* Streamlined Header Action Micro-Buttons */}
              <div className="flex items-center gap-1 text-slate-400">
                <a
                  href={`tel:${COMPANY_DETAILS.phone1}`}
                  className="p-1.5 rounded-lg hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                  title={`Call Senior PV Engineer (${COMPANY_DETAILS.phone1})`}
                  aria-label="Call Meghvi Solar EPC Desk"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </a>

                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-1.5 rounded-lg hover:text-solar-400 hover:bg-slate-800 transition-colors"
                  title={soundEnabled ? "Audio chimes enabled (Click to mute)" : "Audio muted (Click to enable)"}
                  aria-label="Toggle Sound"
                >
                  {soundEnabled ? (
                    <Volume2 className="w-3.5 h-3.5 text-solar-400" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={clearChat}
                  className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                  title="Reset conversation"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors ml-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body with Custom Sleek Scrollbar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-ivory-50/50 chat-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-solar-500 text-slate-950 font-medium rounded-br-xs shadow-xs'
                        : 'bg-white text-slate-800 border border-stone-200/90 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Step 1 Property Selector Form */}
                    {msg.type === 'quota_form' && msg.metadata?.step === 1 && (
                      <div className="mt-3 pt-2 border-t border-stone-200 space-y-1.5">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Select Property:</span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {['Residential Villa', 'Gated Community', 'Commercial Shed', 'Farm / Agriculture'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => selectPropertyType(t)}
                              className="p-2 text-left bg-stone-50 hover:bg-solar-50 border border-stone-200 hover:border-solar-500 rounded-xl text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
                            >
                              <span>{t}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-solar-600" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2 Monthly Bill Selector Form */}
                    {msg.type === 'quota_form' && msg.metadata?.step === 2 && (
                      <div className="mt-3 pt-2 border-t border-stone-200 space-y-1.5">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Average Monthly Bill:</span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { bill: 2500, label: '₹1,500 – ₹3,000' },
                            { bill: 5000, label: '₹3,000 – ₹6,000' },
                            { bill: 10000, label: '₹6,000 – ₹12,000' },
                            { bill: 25000, label: '₹15,000+' }
                          ].map((b) => (
                            <button
                              key={b.bill}
                              type="button"
                              onClick={() => selectMonthlyBill(b.bill, b.label)}
                              className="p-2 text-left bg-stone-50 hover:bg-solar-50 border border-stone-200 hover:border-solar-500 rounded-xl text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
                            >
                              <span>{b.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-solar-600" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interactive Quota Result Card */}
                    {msg.type === 'quota_result' && msg.metadata && (
                      <div className="mt-3 p-3 bg-stone-900 text-white rounded-xl border border-stone-800 space-y-2.5">
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-solar-400 font-mono text-xs font-bold uppercase tracking-wider">
                            {msg.metadata.kwNeeded} kW Recommended Array
                          </span>
                          <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">
                            TSSPDCL Feasible
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px] font-mono">EST. GROSS COST</span>
                            <span className="font-bold text-white font-mono">₹{msg.metadata.grossCost.toLocaleString('en-IN')}</span>
                          </div>
                          <div>
                            <span className="text-emerald-400 block text-[10px] font-mono">GOVT. SUBSIDY</span>
                            <span className="font-bold text-emerald-400 font-mono">-₹{msg.metadata.subsidy.toLocaleString('en-IN')}</span>
                          </div>
                          <div>
                            <span className="text-solar-400 block text-[10px] font-mono">NET INVESTMENT</span>
                            <span className="font-extrabold text-solar-400 font-mono text-sm">₹{msg.metadata.netCost.toLocaleString('en-IN')}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] font-mono">PAYBACK PERIOD</span>
                            <span className="font-bold text-white font-mono">{msg.metadata.payback} Years</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-stone-800 text-[11px] text-slate-300">
                          ⚡ Generates <strong className="text-white">{msg.metadata.monthlyUnits} units/month</strong>, saving <strong className="text-emerald-400">₹{msg.metadata.annualSavings.toLocaleString('en-IN')}/year</strong>.
                        </div>

                        {/* Quota Action CTA Buttons */}
                        <div className="pt-1 flex flex-col gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate('/calculator');
                              setIsOpen(false);
                            }}
                            className="w-full py-2 px-3 bg-solar-500 hover:bg-solar-400 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Calculator className="w-3.5 h-3.5" />
                            <span>Download Full Engineering Proposal</span>
                          </button>

                          <a
                            href={`https://wa.me/919000102120?text=Hi%20Meghvi%20Solar%2C%20I%20just%20calculated%20a%20${msg.metadata.kwNeeded}kW%20system%20quota%20for%20my%20${msg.metadata.propertyType}%20and%20would%20like%20to%20schedule%20a%20free%20site%20survey.`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>Share to WhatsApp & Book Survey</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Site Navigation Card */}
                    {msg.type === 'nav_card' && msg.metadata && (
                      <div className="mt-3 pt-2 border-t border-stone-200">
                        <button
                          type="button"
                          onClick={() => {
                            onNavigate(msg.metadata.target);
                            setIsOpen(false);
                          }}
                          className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-between transition-colors shadow-xs"
                        >
                          <span>{msg.metadata.label || 'Go to Page'}</span>
                          <ArrowRight className="w-4 h-4 text-solar-400" />
                        </button>
                      </div>
                    )}

                    {/* Human Handoff Card */}
                    {msg.type === 'handoff_card' && (
                      <div className="mt-3 p-3 bg-stone-900 text-white rounded-xl border border-stone-800 space-y-3">
                        <div className="text-xs">
                          <span className="text-solar-400 font-mono font-bold block mb-1">CHANDANAGAR EPC DESK</span>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            Our Senior PV engineers provide on-demand site feasibility inspections and DISCOM net-meter load processing.
                          </p>
                        </div>

                        {/* Direct Call & WhatsApp buttons */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <a
                            href={`tel:${COMPANY_DETAILS.phone1}`}
                            className="py-2 px-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-solar-400" />
                            <span>Call Engineer</span>
                          </a>

                          <a
                            href={`https://wa.me/919000102120?text=Hi%20Meghvi%20Solar%2C%20I%20would%20like%20to%20consult%20with%20a%20senior%20rooftop%20solar%20engineer%20for%20my%20property.`}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 px-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white font-semibold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>WhatsApp</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Inline Callback Form */}
                        {!handoffForm.submitted ? (
                          <form onSubmit={handleCallbackSubmit} className="pt-2 border-t border-stone-800 space-y-2">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Or Request Quick Callback:</span>
                            <input
                              type="text"
                              placeholder="Your Name"
                              value={handoffForm.name}
                              onChange={(e) => setHandoffForm(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-solar-500"
                            />
                            <input
                              type="tel"
                              required
                              placeholder="Mobile Number (e.g. 90001 02120)"
                              value={handoffForm.phone}
                              onChange={(e) => setHandoffForm(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-solar-500"
                            />
                            <button
                              type="submit"
                              className="w-full py-1.5 bg-solar-500 hover:bg-solar-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                            >
                              Request 15-Minute Callback
                            </button>
                          </form>
                        ) : (
                          <div className="p-2 bg-emerald-950/60 border border-emerald-700/60 rounded-lg text-[11px] text-emerald-300 flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Callback queued. Our engineer will call you shortly!</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-1 mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-stone-200/90 rounded-2xl rounded-bl-xs px-3.5 py-2.5 w-18 shadow-2xs">
                  <span className="w-1.5 h-1.5 bg-solar-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-solar-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-solar-500 rounded-full animate-bounce" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Streamlined Quick Prompt Suggestions Docked Above Input Bar */}
            <div className="bg-stone-50/90 border-t border-stone-200/80 px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold shrink-0 mr-0.5">
                Quick:
              </span>
              {quickActions.map((qa, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={qa.action}
                  className="px-2.5 py-1 bg-white hover:bg-solar-50 hover:border-solar-400 border border-stone-200 rounded-full text-slate-700 hover:text-slate-950 whitespace-nowrap font-medium text-[11px] transition-colors shrink-0 shadow-2xs cursor-pointer"
                >
                  {qa.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about quota, subsidy, or type 'call me'..."
                className="flex-1 bg-stone-100 hover:bg-stone-50 focus:bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-solar-500 hover:bg-solar-400 disabled:opacity-40 disabled:hover:bg-solar-500 text-slate-950 flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
