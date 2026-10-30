export interface SystemProposal {
  billRange: number;
  label: string;
  capacity: string;
  kw: number;
  panels: number;
  panelWattage: string;
  structure: string;
  totalCost: number;
  subsidy: number;
  netCost: number;
  monthlyUnits: number;
  monthlySavings: number;
  annualSavings: number;
  payback: string;
  areaRequiredSqFt: number;
  co2OffsetTonsPerYear: number;
}

export const PROPOSAL_DATA: Record<number, SystemProposal> = {
  1000: {
    billRange: 1000,
    label: "Under ₹1,500 / month",
    capacity: "1 kW",
    kw: 1,
    panels: 2,
    panelWattage: "550W–600W Bi-facial / Mono PERC",
    structure: "Hot-Dip Galvanized Iron (GI)",
    totalCost: 80000,
    subsidy: 30000,
    netCost: 50000,
    monthlyUnits: 130,
    monthlySavings: 700,
    annualSavings: 8400,
    payback: "5.8 years",
    areaRequiredSqFt: 100,
    co2OffsetTonsPerYear: 1.2,
  },
  2000: {
    billRange: 2000,
    label: "₹1,500 – ₹2,500 / month",
    capacity: "2 kW",
    kw: 2,
    panels: 4,
    panelWattage: "550W–600W Bi-facial / Mono PERC",
    structure: "Hot-Dip Galvanized Iron (GI)",
    totalCost: 150000,
    subsidy: 60000,
    netCost: 90000,
    monthlyUnits: 300,
    monthlySavings: 2200,
    annualSavings: 26400,
    payback: "3.4 years",
    areaRequiredSqFt: 180,
    co2OffsetTonsPerYear: 2.5,
  },
  3000: {
    billRange: 3000,
    label: "₹2,500 – ₹4,000 / month",
    capacity: "3 kW",
    kw: 3,
    panels: 5,
    panelWattage: "550W–600W TOPCon Tier-1",
    structure: "Hot-Dip Galvanized Iron (GI)",
    totalCost: 220000,
    subsidy: 78000,
    netCost: 142000,
    monthlyUnits: 390,
    monthlySavings: 3000,
    annualSavings: 36000,
    payback: "3.8 years",
    areaRequiredSqFt: 260,
    co2OffsetTonsPerYear: 3.8,
  },
  5000: {
    billRange: 5000,
    label: "₹4,000 – ₹7,000 / month",
    capacity: "5 kW",
    kw: 5,
    panels: 9,
    panelWattage: "550W–600W TOPCon Tier-1",
    structure: "Hot-Dip Galvanized Iron (GI)",
    totalCost: 320000,
    subsidy: 78000,
    netCost: 242000,
    monthlyUnits: 650,
    monthlySavings: 5500,
    annualSavings: 66000,
    payback: "3.6 years",
    areaRequiredSqFt: 420,
    co2OffsetTonsPerYear: 6.2,
  },
  8000: {
    billRange: 8000,
    label: "₹7,000 – ₹10,000 / month",
    capacity: "8 kW",
    kw: 8,
    panels: 14,
    panelWattage: "550W–600W TOPCon Tier-1",
    structure: "Custom Elevated Aluminum / GI",
    totalCost: 500000,
    subsidy: 78000,
    netCost: 422000,
    monthlyUnits: 1000,
    monthlySavings: 9500,
    annualSavings: 114000,
    payback: "3.7 years",
    areaRequiredSqFt: 650,
    co2OffsetTonsPerYear: 9.8,
  },
  10000: {
    billRange: 10000,
    label: "₹10,000+ / month",
    capacity: "10 kW",
    kw: 10,
    panels: 17,
    panelWattage: "550W–600W High Efficiency TOPCon",
    structure: "Custom Elevated Aluminum / GI",
    totalCost: 580000,
    subsidy: 78000,
    netCost: 502000,
    monthlyUnits: 1250,
    monthlySavings: 11800,
    annualSavings: 141600,
    payback: "3.5 years",
    areaRequiredSqFt: 800,
    co2OffsetTonsPerYear: 12.4,
  },
};

export const PARTNER_BRANDS = [
  { name: "Tata Power Solar", logo: "/assets/tata-power-solar-logo-hb2fYys1rwGo5o3j.jpg", category: "Tier-1 Modules" },
  { name: "Adani Solar", logo: "/assets/adani-solar-AKVt3X61SvmTCeTG.webp", category: "Tier-1 Modules" },
  { name: "Waaree", logo: "/assets/waaree-logo-A5foOQt0Bje9ScI0.webp", category: "Tier-1 Modules" },
  { name: "Gautam Solar", logo: "/assets/gautam-cMwe5ZaQESmWw1qY.webp", category: "Tier-1 Modules" },
  { name: "Vikram Solar", logo: "/assets/vikram-2-o4VC7TXWNwXChmII.webp", category: "Tier-1 Modules" },
  { name: "Schneider Electric", logo: "/assets/schneider-NJglLkhb9i9J6Zgh.webp", category: "Inverters & Switchgear" },
  { name: "Havells", logo: "/assets/havells-o5L9wtUwWywynYm6.webp", category: "Inverters & Cables" },
  { name: "Sungrow", logo: "/assets/sungrow-cRcgSk6tTIG4GR4E.webp", category: "String Inverters" },
  { name: "Growatt", logo: "/assets/growwatt-xozlduWV00ZA9sql.webp", category: "Smart Inverters" },
  { name: "Deye", logo: "/assets/deye-logo-gDuKVsJsKTvFR3p8.webp", category: "Hybrid Inverters" },
  { name: "Polycab", logo: "/assets/polycab-9z3MUj985uEN9PX7.webp", category: "Solar Cables & BOS" },
  { name: "Microtek", logo: "/assets/microtek-logo-K8dLo7xd0oVzjqHE.webp", category: "Inverters" },
];

export const CLIENT_LOGOS = [
  { name: "Avasa", logo: "/assets/avasa-a8mjmthlEl2ZTflk-1.webp" },
  { name: "Credence", logo: "/assets/credence-B98661P5wN08Hf35-1024x443.webp" },
  { name: "Greenpark", logo: "/assets/greenpark-logo-NoLcmOlImNfLgwjt.jpeg" },
  { name: "JFF", logo: "/assets/iff-JFf1XEA7hekaqFfF.jpeg" },
  { name: "KTC", logo: "/assets/ktc-UeT3J3HVwoD4HbMI.webp" },
  { name: "VIP", logo: "/assets/vip-vCZH7gjD2nKvSh2Q.jpeg" },
  { name: "Visen", logo: "/assets/visen-jjnKpnnGZHNmSAUT.webp" },
];

export const FAQ_ITEMS = [
  {
    q: "How does net metering work with TSSPDCL / TSNPDCL in Telangana?",
    a: "A bi-directional net meter replaces your traditional meter. During peak sun hours, your solar system powers your home directly and feeds surplus power back to the grid. In the billing cycle, the units fed into the grid are deducted from your total consumption. Meghvi Solar handles 100% of the DISCOM approval, meter inspection, and sanctioning documentation."
  },
  {
    q: "How much government subsidy can I receive under PM Surya Ghar?",
    a: "Under the PM Surya Ghar: Muft Bijli Yojana, residential homeowners receive ₹30,000 for a 1 kW system, ₹60,000 for 2 kW, and a maximum of ₹78,000 for systems of 3 kW or larger. Housing societies and RWAs can claim ₹18,000 per kW up to 500 kW for common area lighting and pumps. The subsidy is credited directly to your bank account via the National Portal."
  },
  {
    q: "What roof space is required and how durable is the structure?",
    a: "Approximately 80 to 100 square feet of shadow-free rooftop space is required per kilowatt (kW). We engineer hot-dip galvanized iron (GI) or anodized high-grade aluminum mounting structures rated for wind speeds up to 150 km/h, anchored with non-penetrating chemical fasteners or weighted civil pedestals to safeguard your roof waterproofing."
  },
  {
    q: "What warranties and performance assurances are provided?",
    a: "Our Tier-1 solar panels carry a 12-year manufacturer product warranty and a 25 to 30-year linear performance warranty (guaranteeing ≥80-84% output at year 25-30). String inverters carry a 5 to 10-year warranty, and Meghvi Solar provides a 5-year comprehensive maintenance and real-time generation monitoring package."
  },
  {
    q: "Will solar panels generate power during cloudy or monsoon days?",
    a: "Yes. Solar panels convert ambient daylight (diffuse irradiance), not direct heat, into electricity. On cloudy or rainy days in Hyderabad, generation is typically 25% to 45% of peak clear-sky generation. Over the complete year, Telangana receives over 300 sunny days, ensuring annual generation targets are comfortably met."
  },
  {
    q: "Can I install solar through flexible EMI financing?",
    a: "Yes. We partner with national banks and green NBFCs offering solar loans with interest rates ranging from 7% to 9.5% per annum, tenures up to 5 to 7 years, and zero or minimal collateral. In most installations, the monthly electricity bill savings exceed the monthly loan EMI from month one."
  }
];

export const COMPANY_DETAILS = {
  name: "Meghvi Solar",
  legalName: "Meghvi Solar Energy Solutions",
  address: "Plot No. 603, Mathillika Apartment, Chandanagar, Hyderabad, Telangana – 500050",
  phone1: "+91 97000 02812",
  phone2: "+91 99000 02812",
  email: "meghvisolar@gmail.com",
  operatingHours: "Mon – Sat: 9:00 AM – 7:00 PM IST",
  statesSupported: [
    "Telangana",
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Odisha",
    "Assam"
  ],
  discoms: ["TSSPDCL", "TSNPDCL", "APSPDCL", "APEPDCL", "BESCOM"]
};
