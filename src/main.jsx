import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, ChevronDown, ChevronUp, Clock3, Leaf, MapPin, Menu,
  MessageCircle, Phone, Send, Sprout, Truck, Users, Warehouse, X
} from 'lucide-react';
import { en } from './content/en';
import { ta } from './content/ta';
import ratesData from '../data/rates.json';
import './styles.css';

const phone = '+919842466544';
const whatsapp = 'https://wa.me/919842466544';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=51-52%2C+8th+Street+Extension%2C+Subbana+Gounder+Layout%2C+New+Siddhapudur%2C+Coimbatore%2C+Tamil+Nadu+641012';
const images = {
  hero: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1800&q=88',
  farm: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg',
  market: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=88',
};

function Button({ children, className = '', ...props }) {
  return <button className={`button ${className}`} {...props}>{children}</button>;
}

function Header({ t, lang, setLang, menu, setMenu }) {
  const nav = ['#top', '#about', '#farmers', '#buyers', '#products', '#facilities', '#institutions', '#contact'];
  return <header className="header" id="top">
    <a className="brand" href="#top"><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading &amp; Distribution</small></span></a>
    <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={lang === 'en' ? 'Toggle navigation' : 'வழிசெலுத்தல்'} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
    <nav className={menu ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {t.nav.map((item, index) => <a key={item} href={nav[index]} onClick={() => setMenu(false)}>{item}</a>)}
      <button className="lang" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')} aria-label={lang === 'en' ? 'Switch to Tamil' : 'ஆங்கிலத்திற்கு மாற்று'}>{lang === 'en' ? 'தமிழ்' : 'EN'} <ChevronDown size={14} /></button>
      <a className="nav-cta" href={`tel:${phone}`} onClick={() => setMenu(false)}><Phone size={15} /> +91 98424 66544</a>
    </nav>
  </header>;
}

function Hero({ t, jump }) {
  return <section className="hero">
    <div className="hero-copy"><div className="eyebrow light"><span className="eyebrow-line" />{t.heroKicker}</div>
      <h1>{t.heroTitle}</h1><p>{t.heroText}</p>
      <div className="hero-actions"><Button className="gold" onClick={() => jump('farmer')}><Sprout size={17} />{t.farmer}</Button><Button className="outline-light" onClick={() => jump('buyer')}><Users size={17} />{t.buyer}</Button><a className="button text-light" href={`tel:${phone}`}><Phone size={17} />{t.call}</a></div>
      <div className="auction-pill"><span className="live-dot" /> <Clock3 size={15} /> {t.auction}</div>
    </div>
    <div className="hero-image"><img src={images.hero} fetchPriority="high" width="1200" height="900" alt="Neutral image of fresh banana bunches" /><div className="hero-image-overlay" /><div className="hero-image-note"><Leaf size={15} /> Coimbatore · Tamil Nadu</div></div>
  </section>;
}

function Trust({ t }) {
  return <section className="trust-strip" aria-label="Business facts">{t.trust.map((fact, i) => <div key={fact}><span>0{i + 1}</span><b>{fact}</b></div>)}</section>;
}

function Story({ t }) {
  return <section className="story section" id="about"><div className="story-copy"><div className="eyebrow">{t.storyKicker}</div><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="arrow-link" href="#contact">Talk to the team <ArrowUpRight size={16} /></a></div><div className="story-photo"><img src={images.farm} width="1000" height="700" loading="lazy" alt="Neutral image of a banana plantation" /><span>Farm relationships · careful handling · honest trade</span></div></section>;
}

function Varieties({ t, jump }) {
  return <section className="section varieties" id="products"><div className="section-heading"><div><div className="eyebrow">{t.varietiesKicker}</div><h2>{t.varietiesTitle}</h2></div><p>{t.varietiesText}</p></div><div className="variety-grid">{t.varieties.map(([name, use], i) => <article className="variety-card" key={name}><span className="variety-number">0{i + 1}</span><h3>{name}</h3><p>{use}</p><small>Subject to availability</small><button className="arrow-link button-reset" onClick={() => jump('buyer')}>{t.ask} <ArrowUpRight size={15} /></button></article>)}</div></section>;
}

function Rates({ t }) {
  return <section className="rates section"><div className="rates-head"><div className="eyebrow light">{t.ratesKicker}</div><h2>{t.ratesTitle}</h2><p>{t.ratesText}</p></div><div className="rates-board">{ratesData.rates.length ? ratesData.rates.map((rate) => <div className="rate-row" key={rate.variety}><b>{rate.variety}</b><span>{rate.grade}</span><strong>{rate.priceRange}</strong></div>) : <div className="empty-rate"><span>₹</span><b>{t.ratesEmpty}</b><p>{t.ratesText}</p></div>}<small>{ratesData.lastUpdated ? `${t.lastUpdated}: ${ratesData.lastUpdated}` : '[TODO: owner to update rates.json]'}</small></div></section>;
}

function Journey({ t }) {
  return <section className="journey section"><div className="section-heading"><div><div className="eyebrow light">{t.journeyKicker}</div><h2>{t.journeyTitle}</h2></div><div className="journey-line" /></div><div className="journey-grid">{t.journey.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="journey-dot"><Leaf size={15} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

function Audience({ t, type, jump }) {
  const farmer = type === 'farmer';
  return <section className={`audience section ${farmer ? 'farmer-section' : 'buyer-section'}`} id={farmer ? 'farmers' : 'buyers'}><div className="audience-photo"><img src={farmer ? images.farm : images.market} width="1000" height="700" loading="lazy" alt={farmer ? 'Neutral image of banana plants' : 'Neutral image of banana bunches at market'} /></div><div className="audience-copy"><div className="eyebrow">{farmer ? t.farmerKicker : t.buyerKicker}</div><h2>{farmer ? t.farmerTitle : t.buyerTitle}</h2><p>{farmer ? t.farmerText : t.buyerText}</p><Button className="primary" onClick={() => jump(farmer ? 'farmer' : 'buyer')}>{farmer ? t.farmer : t.buyer} <ArrowUpRight size={16} /></Button></div></section>;
}

function Facilities({ t, jump }) {
  return <section className="facilities section" id="facilities"><div className="section-heading"><div><div className="eyebrow light">{t.facilitiesKicker}</div><h2>{t.facilitiesTitle}</h2></div><p>{t.facilitiesText}</p></div><div className="facility-grid"><article className="facility-card"><div className="facility-icon"><Warehouse /></div><h3>{t.hot}</h3><p>{t.hotText}</p><button className="card-link" onClick={() => jump('buyer')}>{t.ask} <ArrowUpRight size={15} /></button></article><article className="facility-card pale"><div className="facility-icon"><Truck /></div><h3>{t.cold}</h3><p>{t.coldText}</p><button className="card-link" onClick={() => jump('buyer')}>{t.ask} <ArrowUpRight size={15} /></button></article></div><div className="ripening"><b>{t.stages[0]}</b><span /><b>{t.stages[1]}</b><span /><b>{t.stages[2]}</b></div></section>;
}

function Institutions({ t, jump }) {
  return <section className="institutions section" id="institutions"><div className="section-heading"><div><div className="eyebrow">{t.institutionKicker}</div><h2>{t.institutionTitle}</h2></div><p>{t.institutionText}</p></div><div className="use-case-grid">{t.useCases.map((useCase, i) => <div key={useCase} className="use-case"><span>0{i + 1}</span><h3>{useCase}</h3></div>)}</div><Button className="gold" onClick={() => jump('institution')}>{t.institutionKicker} <ArrowUpRight size={16} /></Button></section>;
}

function Gallery({ t }) {
  return <section className="gallery section"><div className="eyebrow">{t.galleryKicker}</div><h2>{t.galleryTitle}</h2><p>{t.galleryText}</p><div className="gallery-grid"><img src={images.hero} width="900" height="650" loading="lazy" alt="Neutral banana bunch image" /><div className="gallery-placeholder">[TODO: owner-approved photo]</div><img src={images.market} width="900" height="650" loading="lazy" alt="Neutral banana market image" /></div></section>;
}

function FAQ({ t }) {
  const [open, setOpen] = useState(null);
  return <section className="faq section"><div className="eyebrow">{t.faqKicker}</div><h2>{t.faqTitle}</h2><div className="faq-list">{t.faq.map(([question, answer], i) => <div className="faq-item" key={question}><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{question}</span>{open === i ? <ChevronUp /> : <ChevronDown />}</button>{open === i && <p>{answer}</p>}</div>)}</div></section>;
}

function Contact({ t, enquiry, setEnquiry }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const rawPhone = String(data.get('phone')).replace(/\D/g, '').replace(/^91/, '');
    if (!/^[6-9]\d{9}$/.test(rawPhone)) { setError(t.invalidPhone); return; }
    setError('');
    const message = `Hello Sri Ganapathy, my name is ${data.get('name')}. Phone: ${data.get('phone')}. Enquiry: ${data.get('type')}. ${data.get('message') || ''}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const typeLabel = enquiry === 'farmer' ? t.farmerType : enquiry === 'institution' ? t.institutionType : t.buyerType;
  return <section className="contact section" id="contact"><div className="contact-copy"><div className="eyebrow light">{t.contactKicker}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-links"><a href={`tel:${phone}`}><Phone size={18} /> +91 98424 66544</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a><a href={maps} target="_blank" rel="noreferrer"><MapPin size={18} /> {t.directions}</a></div><div className="map-card"><MapPin size={18} /><span>51–52, 8th Street Extension, New Siddhapudur, Coimbatore – 641012</span></div></div><form className="contact-form" onSubmit={submit} noValidate><label>{t.name}<input required name="name" aria-required="true" /></label><label>{t.phone}<input required name="phone" type="tel" inputMode="tel" aria-required="true" /><small>{error}</small></label><label>{t.type}<select name="type" value={typeLabel} onChange={(e) => setEnquiry(e.target.value.includes('Farmer') || e.target.value.includes('விவசாயி') ? 'farmer' : e.target.value.includes('Institutional') || e.target.value.includes('நிறுவன') ? 'institution' : 'buyer')}><option>{t.farmerType}</option><option>{t.buyerType}</option><option>{t.institutionType}</option></select></label><label>{t.message}<textarea name="message" rows="4" /></label><Button className="gold full" type="submit">{sent ? t.success : <>{t.submit} <Send size={16} /></>}</Button></form></section>;
}

function Footer({ t }) {
  return <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading &amp; Distribution</small></span></a><p>{t.footer}</p><div className="footer-actions"><a href={maps} target="_blank" rel="noreferrer" aria-label="Get directions"><MapPin size={17} /></a><a href={`tel:${phone}`} aria-label="Call"><Phone size={17} /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a></div></div><div className="footer-bottom"><span>51–52, 8th Street Extension, Subbana Gounder Layout, New Siddhapudur, Coimbatore – 641012</span><span>© {new Date().getFullYear()} Sri Ganapathy Banana Commission Mundy</span></div></footer>;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('sg-lang') === 'ta' ? 'ta' : 'en');
  const [menu, setMenu] = useState(false);
  const [enquiry, setEnquiry] = useState('buyer');
  const t = lang === 'en' ? en : ta;
  useEffect(() => { localStorage.setItem('sg-lang', lang); document.documentElement.lang = lang; }, [lang]);
  const jump = (type) => { setEnquiry(type); setMenu(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); };
  return <div className="app"><a className="skip-link" href="#main-content">{lang === 'en' ? 'Skip to content' : 'உள்ளடக்கத்திற்குச் செல்லவும்'}</a><Header {...{ t, lang, setLang, menu, setMenu }} /><main id="main-content"><Hero t={t} jump={jump} /><Trust t={t} /><Story t={t} /><Varieties t={t} jump={jump} /><Rates t={t} /><Journey t={t} /><Audience t={t} type="farmer" jump={jump} /><Audience t={t} type="buyer" jump={jump} /><Facilities t={t} jump={jump} /><Institutions t={t} jump={jump} /><Gallery t={t} /><FAQ t={t} /><Contact t={t} enquiry={enquiry} setEnquiry={setEnquiry} /></main><Footer t={t} /><a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a><div className="mobile-bar"><a href={`tel:${phone}`}><Phone size={17} />{t.call}</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp</a><a href={maps} target="_blank" rel="noreferrer"><MapPin size={17} />{t.directions}</a></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
