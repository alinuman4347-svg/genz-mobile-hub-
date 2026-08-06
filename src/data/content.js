import productCover from '../assets/product-cover.png';
import productGlass from '../assets/product-glass.png';
import productCharger from '../assets/product-charger.png';
import productCable from '../assets/product-cable.png';
import productEarbuds from '../assets/product-earbuds.png';
import productPowerbank from '../assets/product-powerbank.png';

export const WHATSAPP_NUMBER = '923280042458';

export function waLink(what) {
  const msg = `Hi Gen Z Mobile Hub! I'd like to order ${what} for office delivery. My phone model is:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#accessories', label: 'Accessories' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export const TICKER_ITEMS = [
  'Phone Covers',
  'Tempered Glass',
  'Fast Chargers',
  'Charging Cables',
  'Wireless Earbuds',
  'Power Banks',
  'Phone Wrapping',
  'Installation',
];

export const FEATURED_PRODUCTS = [
  {
    key: 'magsafe-cover',
    badge: 'Premium',
    title: 'Rugged MagSafe Cover',
    desc: 'Shock-absorbing frame, raised camera lip, magnet-ready back.',
    img: productCover,
    imgHeight: 172,
    waLabel: 'the Rugged MagSafe Cover',
  },
  {
    key: 'tempered-glass',
    badge: '9H Rated',
    title: 'Full-Cover Tempered Glass',
    desc: 'Edge-to-edge, oleophobic coating, free dust-free installation.',
    img: productGlass,
    imgHeight: 200,
    waLabel: 'the Full-Cover Tempered Glass',
  },
  {
    key: 'fast-charger',
    badge: '40W PD',
    title: '40W Dual-Port Fast Charger',
    desc: 'Charge phone and buds together. Live wattage display.',
    img: productCharger,
    imgHeight: 150,
    waLabel: 'the 40W Dual-Port Fast Charger',
  },
  {
    key: 'braided-cable',
    badge: '60W',
    title: 'Braided 60W Type-C Cable',
    desc: '1.5m nylon braid, 10k bend tested, no slowdown.',
    img: productCable,
    imgHeight: 170,
    waLabel: 'the Braided 60W Type-C Cable',
  },
  {
    key: 'tws-earbuds',
    badge: 'ENC',
    title: 'TWS Earbuds Pro',
    desc: 'Clear call mics for meetings, 30h with the case.',
    img: productEarbuds,
    imgHeight: 180,
    waLabel: 'the TWS Earbuds Pro',
  },
  {
    key: 'power-bank',
    badge: '20,000 mAh',
    title: 'Slim PD Power Bank',
    desc: 'Three full charges, fits a laptop bag pocket.',
    img: productPowerbank,
    imgHeight: 150,
    waLabel: 'the Slim PD Power Bank',
  },
];

export const STATS = [
  { count: 500, suffix: '+', label: 'Accessories delivered', highlight: true },
  { count: 100, suffix: '%', label: 'Customer satisfaction' },
  { count: 15, prefix: '<', suffix: ' min', label: 'WhatsApp response time' },
  { count: 40, suffix: '+', label: 'Offices we drop at', highlight: true },
];

export const FEATURES = [
  {
    num: '01',
    title: 'Fast Office Delivery',
    desc: 'Accessories delivered directly to your workplace.',
  },
  {
    num: '02',
    title: 'Premium Quality Accessories',
    desc: 'Carefully selected products for durability and performance.',
  },
  {
    num: '03',
    title: 'Affordable Prices',
    desc: 'Quality products without unnecessary high prices.',
  },
  {
    num: '04',
    title: 'Installation Available',
    desc: 'Professional installation for covers and tempered glass.',
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'Message Us on WhatsApp',
    desc: 'Just say hi and tell us your phone model. No forms, no signups, no pressure.',
    icon: 'whatsapp',
  },
  {
    step: '02',
    title: 'Select Your Accessories',
    desc: 'We send real photos, options and prices. Take your time and pick.',
    icon: 'mascot',
  },
  {
    step: '03',
    title: 'Receive Them at Your Office',
    desc: "We come to your desk and fit it for you, if you'd like.",
    icon: 'arrow',
  },
];

export const REVIEWS = [
  {
    initials: 'HA',
    name: 'Hamza A.',
    role: 'Account Manager',
    text: "Messaged at 11, had a cover and glass fitted at my desk before lunch. Didn't even leave the building.",
  },
  {
    initials: 'SK',
    name: 'Sana K.',
    role: 'Office Admin',
    text: 'Bought a 40W charger and cable for the team. Prices were better than the market and delivery was free.',
  },
  {
    initials: 'BR',
    name: 'Bilal R.',
    role: 'Software Engineer',
    text: 'The glass install was perfect — zero bubbles, zero dust. Better than the shop I used before.',
    highlight: true,
  },
  {
    initials: 'AF',
    name: 'Ayesha F.',
    role: 'HR Executive',
    text: 'They sent real photos on WhatsApp before I paid. Earbuds sound great on client calls.',
  },
  {
    initials: 'UM',
    name: 'Usman M.',
    role: 'Branch Operations',
    text: 'Power bank arrived the same evening. Now half my floor orders from them.',
  },
];
