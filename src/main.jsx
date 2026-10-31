import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Check, ChevronDown, Clock3, Leaf, Menu, MessageCircle,
  Phone, Send, ShieldCheck, Sparkles, Truck, Users, Warehouse, X, MapPin,
  PackageCheck, Sprout, Handshake, School, Store, Hospital, GraduationCap
} from 'lucide-react';
import './styles.css';

const phone = '+919842466544';
const whatsappBase = 'https://wa.me/919842466544';
const maps = 'https://www.google.com/maps/search/?api=1&query=Sri+Ganapathy+Banana+Commission+Mundy+Coimbatore';
const images = {
  hero: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1800&q=88',
  farm: 'https://cdn.wikifarmer.com/wp-content/uploads/2023/04/Banana-Crop-History-Nutritional-Value-and-Health-Benefits.jpg',
  market: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1000&q=88',
  storage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=88',
  bananas: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1000&q=88',
  crates: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=88'
};

const copy = {
  en: {
    nav: ['Home', 'About', 'Farmers', 'Buyers', 'Products', 'Facilities', 'Institutions', 'Contact'],
    heroKicker: 'Sri Ganapathy Banana Commission Mundy · Coimbatore',
    heroTitle: 'From the Farm. Through the Mundy. To Your Business.',
    heroText: 'Sri Ganapathy connects banana farmers, local traders and institutional buyers through procurement, early morning auctions, wholesale, retail and distribution.',
    farmer: "I'm a Farmer", buyer: "I'm a Buyer", call: 'Call Sri Ganapathy', location: 'Coimbatore, Tamil Nadu',
    overviewKicker: 'A practical trade partner', overviewTitle: 'Closer to the source. Clearer for business.',
    overviewText: 'We work directly with banana farmers and local banana vendors. From farm visits and mutually discussed buying terms to auction mornings and business supply, our work stays grounded in real banana bunches and real relationships.',
    overviewItems: [['Procurement', 'Farm visits and direct buying conversations.', Sprout], ['Auction', 'Early morning access for local vendors and traders.', Users], ['Distribution', 'Wholesale, retail and institutional supply.', Truck]],
    workflowKicker: 'How the mundy works', workflowTitle: 'A simple chain, carefully managed.',
    workflow: [['01', 'Farmer', 'Harvest is discussed with growers.'], ['02', 'Procurement', 'Bunches are purchased at agreed terms.'], ['03', 'Transport', 'Produce travels to our mundy.'], ['04', 'Mundy', 'Bunches are received and organised.'], ['05', 'Auction', 'Early morning trade begins.'], ['06', 'Buyer', 'Vendors and institutions source with confidence.']],
    farmerKicker: 'For banana farmers', farmerTitle: 'Bring your harvest to a dependable market conversation.', farmerText: 'If you are a banana farmer, speak to Ragu or Muruganandham about your harvest, visit timing and buying requirements. We will discuss the banana bunches and next steps directly.', farmerAction: 'Start a farmer enquiry',
    buyerKicker: 'For buyers and traders', buyerTitle: 'Plan your next market morning with the right banana supply.', buyerText: 'Banana vendors, wholesale buyers and retail buyers can enquire about auction access, bunches, ripening stage and current availability.', buyerAction: 'Start a buyer enquiry',
    facilitiesKicker: 'Storage & ripening', facilitiesTitle: 'Care after the banana harvest.', facilitiesText: 'Availability and stage depend on the banana bunches and current schedule. Talk to our team for an honest conversation about your requirement.',
    hot: 'Hot storage / controlled ripening', hotText: 'A practical facility to hold and manage banana ripening without making unverified technical or treatment claims.', cold: 'AC-controlled cold storage', coldText: 'Air-conditioned storage to help manage stock and ripening. Yellow-stage bananas without visible black spotting can be discussed according to availability.',
    productsKicker: 'Bananas for different needs', productsTitle: 'Choose by use, stage and availability.', productsText: 'Specific banana varieties and quantities change with the season and incoming bunches. Enquire for what is available today.',
    products: [['Fresh banana bunches', 'For banana vendors, traders and retail buying.', images.bananas], ['Market-ready bananas', 'For shops and customers looking for a ready stage.', images.market], ['Bulk banana supply', 'For wholesale and institutional conversations.', images.crates]],
    institutionKicker: 'Institutional banana supply', institutionTitle: 'Bananas for the places people depend on.', institutionText: 'We can discuss banana requirements for schools, colleges, hospitals, hostels and shops. Share your need and we will respond with current banana availability.', institutionAction: 'Enquire for an institution',
    aboutKicker: 'About Sri Ganapathy', aboutTitle: 'Two partners. One grounded way of working.', aboutText: 'Ragu and Muruganandham lead the business with a focus on direct farmer relationships, careful handling and dependable market connections. No inflated promises — just a clear conversation about the banana bunches available.',
    contactKicker: 'Start a conversation', contactTitle: 'Tell us where you fit in the chain.', contactText: 'Use the form for a farmer, buyer or institutional enquiry. You can also call or WhatsApp directly.', formName: 'Your name', formPhone: 'Phone number', formType: 'Enquiry type', formMessage: 'Tell us what you need', select: 'Choose one', farmerType: 'Farmer enquiry', buyerType: 'Buyer / wholesale enquiry', institutionType: 'Institutional supply enquiry', formSubmit: 'Open WhatsApp enquiry', map: 'Get directions', success: 'WhatsApp is ready with your enquiry.',
    footerText: 'Banana procurement, commission trading, wholesale, retail and distribution from Coimbatore.', address: '51–52, 8th Street Extension, Subbana Gounder Layout, New Siddhapudur, Coimbatore – 641012', rights: 'Sri Ganapathy Banana Trading & Distribution'
  },
  ta: {
    nav: ['முகப்பு', 'எங்களைப் பற்றி', 'விவசாயிகள்', 'வாங்குபவர்கள்', 'தயாரிப்புகள்', 'வசதிகள்', 'நிறுவனங்கள்', 'தொடர்பு'],
    heroKicker: 'ஸ்ரீ கணபதி வாழை கமிஷன் மண்டி · கோயம்புத்தூர்',
    heroTitle: 'விவசாய நிலத்திலிருந்து. மண்டி வழியாக. உங்கள் வணிகத்திற்கு.',
    heroText: 'கொள்முதல், அதிகாலை ஏலம், மொத்தம், சில்லறை மற்றும் விநியோகம் மூலம் வாழை விவசாயிகள், உள்ளூர் வணிகர்கள் மற்றும் நிறுவன வாங்குபவர்களை ஸ்ரீ கணபதி இணைக்கிறது.',
    farmer: 'நான் விவசாயி', buyer: 'நான் வாங்குபவர்', call: 'ஸ்ரீ கணபதியை அழைக்க', location: 'கோயம்புத்தூர், தமிழ்நாடு',
    overviewKicker: 'நடைமுறை வணிகக் கூட்டாளர்', overviewTitle: 'ஆதாரத்திற்கு அருகில். வணிகத்திற்கு தெளிவாக.',
    overviewText: 'வாழை விவசாயிகள் மற்றும் உள்ளூர் வாழை விற்பனையாளர்களுடன் நேரடியாகப் பணியாற்றுகிறோம். பண்ணை வருகை முதல் அதிகாலை ஏலம் மற்றும் வணிக விநியோகம் வரை எங்கள் பணி உண்மையான வாழைக் குலைகள் மற்றும் உறவுகளை மையமாகக் கொண்டது.',
    overviewItems: [['கொள்முதல்', 'பண்ணை வருகை மற்றும் நேரடி வாங்குதல்.', Sprout], ['ஏலம்', 'உள்ளூர் விற்பனையாளர்களுக்கான அதிகாலை அணுகல்.', Users], ['விநியோகம்', 'மொத்தம், சில்லறை மற்றும் நிறுவன விநியோகம்.', Truck]],
    workflowKicker: 'மண்டி எவ்வாறு இயங்குகிறது', workflowTitle: 'கவனமாக நிர்வகிக்கப்படும் எளிய சங்கிலி.',
    workflow: [['01', 'விவசாயி', 'விவசாயிகளுடன் அறுவடை பற்றி பேசுகிறோம்.'], ['02', 'கொள்முதல்', 'ஒப்புக்கொண்ட விதிமுறையில் குலைகள் வாங்கப்படுகின்றன.'], ['03', 'போக்குவரத்து', 'வாழைக் குலைகள் எங்கள் மண்டிக்கு வருகின்றன.'], ['04', 'மண்டி', 'குலைகள் பெறப்பட்டு ஒழுங்குபடுத்தப்படுகின்றன.'], ['05', 'ஏலம்', 'அதிகாலை வணிகம் தொடங்குகிறது.'], ['06', 'வாங்குபவர்', 'விற்பனையாளர்கள் மற்றும் நிறுவனங்கள் வாங்குகின்றனர்.']],
    farmerKicker: 'வாழை விவசாயிகளுக்காக', farmerTitle: 'உங்கள் அறுவடைக்கு நம்பகமான சந்தை உரையாடல்.', farmerText: 'நீங்கள் வாழை விவசாயி என்றால், உங்கள் அறுவடை, வருகை நேரம் மற்றும் வாங்குதல் தேவைகள் குறித்து ரகு அல்லது முருகானந்தத்துடன் பேசுங்கள்.', farmerAction: 'விவசாயி விசாரணை',
    buyerKicker: 'வாங்குபவர்கள் மற்றும் வணிகர்களுக்காக', buyerTitle: 'அடுத்த சந்தை காலைக்குத் தேவையான வாழை விநியோகத்தைத் திட்டமிடுங்கள்.', buyerText: 'வாழை விற்பனையாளர்கள், மொத்த மற்றும் சில்லறை வாங்குபவர்கள் ஏலம், வாழைக் குலைகள், பழுக்கும் நிலை மற்றும் தற்போதைய கிடைப்பைப் பற்றி விசாரிக்கலாம்.', buyerAction: 'வாங்குபவர் விசாரணை',
    facilitiesKicker: 'சேமிப்பு மற்றும் பழுக்க வைத்தல்', facilitiesTitle: 'வாழை அறுவடைக்குப் பிந்தைய பராமரிப்பு.', facilitiesText: 'கிடைப்பு மற்றும் நிலை வாழைக் குலைகள் மற்றும் தற்போதைய அட்டவணையைப் பொறுத்தது. உங்கள் தேவையைப் பற்றி நேர்மையாக பேசுங்கள்.',
    hot: 'சூடான சேமிப்பு / கட்டுப்படுத்தப்பட்ட பழுக்க வைத்தல்', hotText: 'வாழைகளை நிர்வகிக்க உதவும் நடைமுறை வசதி. உறுதிப்படுத்தப்படாத தொழில்நுட்ப அல்லது சிகிச்சை கூற்றுகள் எதுவும் இல்லை.', cold: 'AC கட்டுப்படுத்தப்பட்ட குளிர்சாதன சேமிப்பு', coldText: 'சேமிப்பு மற்றும் பழுக்க வைத்தலை நிர்வகிக்க உதவும் குளிர்சாதன வசதி. கிடைப்பைப் பொறுத்து மஞ்சள் நிலையில் வழங்கலாம்.',
    productsKicker: 'வெவ்வேறு தேவைகளுக்கான வாழைகள்', productsTitle: 'பயன்பாடு, நிலை மற்றும் கிடைப்பைப் பொறுத்து.', productsText: 'குறிப்பிட்ட வாழை வகைகள் மற்றும் அளவுகள் பருவம் மற்றும் வருகை வாழைக் குலைகளைப் பொறுத்து மாறும். இன்றைய கிடைப்பை விசாரிக்கவும்.',
    products: [['புதிய வாழைக் குலைகள்', 'வாழை விற்பனையாளர்கள், வணிகர்கள் மற்றும் சில்லறை வாங்குதலுக்கு.', images.bananas], ['சந்தைக்குத் தயாரான வாழைகள்', 'கடைகள் மற்றும் தயாரான நிலையில் விரும்பும் வாடிக்கையாளர்களுக்கு.', images.market], ['மொத்த வாழை விநியோகம்', 'மொத்த மற்றும் நிறுவன உரையாடல்களுக்கு.', images.crates]],
    institutionKicker: 'நிறுவன வாழை விநியோகம்', institutionTitle: 'மக்கள் நம்பும் இடங்களுக்கு வாழை விநியோகம்.', institutionText: 'பள்ளிகள், கல்லூரிகள், மருத்துவமனைகள், விடுதிகள் மற்றும் கடைகளுக்கான வாழை தேவைகளைப் பற்றி பேசலாம்.', institutionAction: 'நிறுவன விசாரணை',
    aboutKicker: 'ஸ்ரீ கணபதி பற்றி', aboutTitle: 'இரு கூட்டாளிகள். ஒரே நேர்மையான பணி முறை.', aboutText: 'ரகு மற்றும் முருகானந்தம் நேரடி விவசாயி உறவுகள், கவனமான கையாளுதல் மற்றும் நம்பகமான சந்தை இணைப்பில் கவனம் செலுத்துகின்றனர். கிடைக்கும் வாழைக் குலைகள் பற்றி தெளிவான உரையாடல் மட்டுமே.',
    contactKicker: 'உரையாடலைத் தொடங்குங்கள்', contactTitle: 'இந்தச் சங்கிலியில் நீங்கள் எங்கு இருக்கிறீர்கள் என்று சொல்லுங்கள்.', contactText: 'விவசாயி, வாங்குபவர் அல்லது நிறுவன விசாரணைக்கு படிவத்தைப் பயன்படுத்துங்கள். நேரடியாக அழைக்கவும் அல்லது WhatsApp செய்யவும்.', formName: 'உங்கள் பெயர்', formPhone: 'தொலைபேசி எண்', formType: 'விசாரணை வகை', formMessage: 'உங்கள் தேவையை எழுதுங்கள்', select: 'ஒன்றைத் தேர்ந்தெடுக்கவும்', farmerType: 'விவசாயி விசாரணை', buyerType: 'வாங்குபவர் / மொத்த விசாரணை', institutionType: 'நிறுவன விநியோக விசாரணை', formSubmit: 'WhatsApp விசாரணையைத் திறக்க', map: 'வழியைப் பெறுக', success: 'உங்கள் விசாரணையுடன் WhatsApp தயாராக உள்ளது.',
    footerText: 'கோயம்புத்தூரிலிருந்து வாழை கொள்முதல், கமிஷன் வணிகம், மொத்தம், சில்லறை மற்றும் விநியோகம்.', address: '51–52, 8வது தெரு விரிவாக்கம், சுப்பண்ண கவுண்டர் லேஅவுட், நியூ சித்தாபுதூர், கோயம்புத்தூர் – 641012', rights: 'ஸ்ரீ கணபதி வாழை வணிகம் மற்றும் விநியோகம்'
  }
};

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('sg-lang') || 'en');
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [enquiry, setEnquiry] = useState('buyer');
  const [activeJourney, setActiveJourney] = useState(0);
  const [journeyOffset, setJourneyOffset] = useState(0);
  const workflowTrackRef = useRef(null);
  const workflowStepRefs = useRef([]);
  const t = copy[lang];
  useEffect(() => { localStorage.setItem('sg-lang', lang); document.documentElement.lang = lang === 'ta' ? 'ta' : 'en'; }, [lang]);
  useEffect(() => {
    const steps = [...document.querySelectorAll('.workflow-step')];
    if (!steps.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveJourney(Number(entry.target.dataset.step));
      });
    }, { rootMargin: '-34% 0px -48% 0px', threshold: 0 });
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [lang]);
  useLayoutEffect(() => {
    const track = workflowTrackRef.current;
    const step = workflowStepRefs.current[activeJourney];
    if (!track || !step) return undefined;
    const updateOffset = () => setJourneyOffset(step.getBoundingClientRect().top - track.getBoundingClientRect().top);
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [activeJourney, lang]);
  const closeMenu = () => setMenu(false);
  const jumpToEnquiry = (type) => { setEnquiry(type); setSent(false); closeMenu(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); };
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello Sri Ganapathy, my name is ${data.get('name')}. Phone: ${data.get('phone')}. Enquiry: ${data.get('type')}. ${data.get('message') || ''}`;
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const typeLabel = enquiry === 'farmer' ? t.farmerType : enquiry === 'institution' ? t.institutionType : t.buyerType;
  return <div className="app">
    <a className="skip-link" href="#main-content">{lang === 'en' ? 'Skip to content' : 'உள்ளடக்கத்திற்குச் செல்லவும்'}</a>
    <header className="header" id="top">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading & Distribution</small></span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={lang === 'en' ? 'Toggle navigation' : 'வழிசெலுத்தல்'} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
      <nav className={menu ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {t.nav.map((item, index) => <a key={item} href={['#top', '#about', '#farmers', '#buyers', '#products', '#facilities', '#institutions', '#contact'][index]} onClick={closeMenu}>{item}</a>)}
        <button className="lang" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')} aria-label={lang === 'en' ? 'Switch to Tamil' : 'ஆங்கிலத்திற்கு மாற்று'}>{lang === 'en' ? 'தமிழ்' : 'EN'} <ChevronDown size={14} /></button>
        <a className="nav-cta" href={`tel:${phone}`} onClick={closeMenu}><Phone size={15} /> +91 98424 66544</a>
      </nav>
    </header>
    <main id="main-content">
      <section className="hero"><div className="hero-image"><img src={images.hero} alt={lang === 'en' ? 'Fresh banana bunches in an Indian plantation' : 'இந்திய வாழைத் தோட்டத்தில் புதிய வாழைக் குலைகள்'} /><div className="hero-image-overlay"></div><div className="hero-image-note"><Leaf size={15} /> {lang === 'en' ? 'Rooted in Coimbatore' : 'கோயம்புத்தூரில் வேரூன்றியது'}</div></div><div className="hero-copy"><div className="eyebrow light"><span className="eyebrow-line"></span>{t.heroKicker}</div><h1>{t.heroTitle}</h1><p>{t.heroText}</p><div className="hero-actions"><button className="button gold" onClick={() => jumpToEnquiry('farmer')}><Sprout size={17} /> {t.farmer}</button><button className="button outline-light" onClick={() => jumpToEnquiry('buyer')}><PackageCheck size={17} /> {t.buyer}</button><a className="button text-light" href={`tel:${phone}`}><Phone size={17} /> {t.call}</a></div><div className="hero-meta"><MapPin size={15} /> {t.location}<span></span><Clock3 size={15} /> {lang === 'en' ? 'Early morning auctions' : 'அதிகாலை ஏலம்'}</div></div></section>
      <section className="plantation-break"><div className="plantation-copy"><div className="eyebrow light">{lang === 'en' ? 'A living supply chain' : 'உயிருள்ள விநியோகச் சங்கிலி'}</div><h2>{lang === 'en' ? 'Every bunch begins in a real banana plantation.' : 'ஒவ்வொரு வாழைக் குலையும் உண்மையான வாழைத் தோட்டத்தில் தொடங்குகிறது.'}</h2><p>{lang === 'en' ? 'We stay close to the soil, the growers and the changing rhythm of the plantation.' : 'மண், விவசாயிகள் மற்றும் தோட்டத்தின் மாறும் இயற்கை ஓட்டத்திற்கு நாங்கள் அருகில் இருக்கிறோம்.'}</p></div><div className="plantation-photo"><img src={images.farm} alt={lang === 'en' ? 'Banana plantation with tall banana trees' : 'உயரமான வாழை மரங்களுடன் வாழைத் தோட்டம்'} /><div className="plantation-photo-caption">{lang === 'en' ? 'Farm relationships · careful handling · honest trade' : 'விவசாயி உறவுகள் · கவனமான கையாளுதல் · நேர்மையான வணிகம்'}</div></div></section>
      <section className="overview section" id="about"><div className="section-lead"><div className="eyebrow">{t.overviewKicker}</div><h2>{t.overviewTitle}</h2><p>{t.overviewText}</p></div><div className="overview-list">{t.overviewItems.map(([title, text, Icon]) => <article key={title}><span className="number">0{t.overviewItems.findIndex(x => x[0] === title) + 1}</span><div className="overview-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="workflow section"><div className="workflow-head"><div className="eyebrow light">{t.workflowKicker}</div><h2>{t.workflowTitle}</h2><div className="journey-status"><span className="journey-pulse"></span>{lang === 'en' ? `Journey stage ${String(activeJourney + 1).padStart(2, '0')} / 06` : `பயண நிலை ${String(activeJourney + 1).padStart(2, '0')} / 06`}</div></div><div className="workflow-track" ref={workflowTrackRef}>{<div className="journey-object" style={{ '--journey-offset': `${journeyOffset}px` }}><span className="journey-progress-dot"></span></div>}{t.workflow.map(([number, title, text], index) => <article key={number} ref={(element) => { workflowStepRefs.current[index] = element; }} data-step={index} className={`workflow-step ${activeJourney === index ? 'is-active' : ''}`}><span>{number}</span><div className="workflow-dot">{index === 0 ? <Sprout size={17} /> : index === 5 ? <Handshake size={17} /> : <Check size={17} />}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="audience farmer-section section" id="farmers"><div className="audience-image"><img src={images.farm} alt={lang === 'en' ? 'Banana plantation rows ready for harvest' : 'அறுவடைக்குத் தயாரான வாழைத் தோட்ட வரிசைகள்'} /><span>{t.farmerKicker}</span></div><div className="audience-copy"><div className="eyebrow">{t.farmerKicker}</div><h2>{t.farmerTitle}</h2><p>{t.farmerText}</p><button className="arrow-link button-reset" onClick={() => jumpToEnquiry('farmer')}>{t.farmerAction} <ArrowUpRight size={16} /></button></div></section>
      <section className="audience buyer-section section" id="buyers"><div className="audience-copy"><div className="eyebrow">{t.buyerKicker}</div><h2>{t.buyerTitle}</h2><p>{t.buyerText}</p><button className="button primary" onClick={() => jumpToEnquiry('buyer')}>{t.buyerAction} <ArrowUpRight size={16} /></button></div><div className="buyer-image"><img src={images.market} alt={lang === 'en' ? 'Banana bunches ready for wholesale market' : 'மொத்த சந்தைக்குத் தயாரான வாழைக் குலைகள்'} /><div className="buyer-image-card"><Users size={18} /><b>{lang === 'en' ? 'Auction mornings' : 'அதிகாலை ஏலம்'}</b><span>{lang === 'en' ? 'Ask about current banana availability' : 'தற்போதைய வாழை கிடைப்பை விசாரிக்கவும்'}</span></div></div></section>
      <section className="facilities section" id="facilities"><div className="facilities-head"><div><div className="eyebrow light">{t.facilitiesKicker}</div><h2>{t.facilitiesTitle}</h2></div><p>{t.facilitiesText}</p></div><div className="facility-grid"><article className="facility-card"><img src={images.storage} alt={lang === 'en' ? 'Banana bunches in a commercial storage area' : 'வணிக வாழை சேமிப்பு பகுதியில் வாழைக் குலைகள்'} /><div className="facility-content"><Warehouse size={21} /><h3>{t.hot}</h3><p>{t.hotText}</p><button className="card-link button-reset" onClick={() => jumpToEnquiry('buyer')}>{lang === 'en' ? 'Discuss availability' : 'கிடைப்பைப் பற்றி பேசுங்கள்'} <ArrowUpRight size={15} /></button></div></article><article className="facility-card light-facility"><img src={images.storage} alt={lang === 'en' ? 'Banana bunches managed in clean storage' : 'சுத்தமான சேமிப்பில் நிர்வகிக்கப்படும் வாழைக் குலைகள்'} /><div className="facility-content"><Sparkles size={21} /><h3>{t.cold}</h3><p>{t.coldText}</p><button className="card-link button-reset" onClick={() => jumpToEnquiry('buyer')}>{lang === 'en' ? 'Discuss availability' : 'கிடைப்பைப் பற்றி பேசுங்கள்'} <ArrowUpRight size={15} /></button></div></article></div></section>
      <section className="products section" id="products"><div className="section-lead centered"><div className="eyebrow">{t.productsKicker}</div><h2>{t.productsTitle}</h2><p>{t.productsText}</p></div><div className="product-grid">{t.products.map(([title, text, image]) => <article className="product-card" key={title}><img src={image} alt={title} /><div><span>{lang === 'en' ? 'Banana availability' : 'வாழை கிடைப்பு'}</span><h3>{title}</h3><p>{text}</p><button onClick={() => jumpToEnquiry('buyer')} className="button-reset arrow-link">{lang === 'en' ? 'Ask about availability' : 'கிடைப்பை விசாரிக்கவும்'} <ArrowUpRight size={15} /></button></div></article>)}</div></section>
      <section className="institution section" id="institutions"><div className="institution-image"><img src={images.crates} alt={lang === 'en' ? 'Banana bunches prepared for institutional distribution' : 'நிறுவன விநியோகத்திற்குத் தயாரான வாழைக் குலைகள்'} /></div><div className="institution-copy"><div className="eyebrow">{t.institutionKicker}</div><h2>{t.institutionTitle}</h2><p>{t.institutionText}</p><div className="institution-icons"><span><School size={18} /> {lang === 'en' ? 'Schools' : 'பள்ளிகள்'}</span><span><GraduationCap size={18} /> {lang === 'en' ? 'Colleges' : 'கல்லூரிகள்'}</span><span><Hospital size={18} /> {lang === 'en' ? 'Hospitals' : 'மருத்துவமனைகள்'}</span><span><Store size={18} /> {lang === 'en' ? 'Shops' : 'கடைகள்'}</span></div><button className="button primary" onClick={() => jumpToEnquiry('institution')}>{t.institutionAction} <ArrowUpRight size={16} /></button></div></section>
      <section className="about section" id="about-business"><div className="about-mark"><Handshake size={45} /></div><div><div className="eyebrow">{t.aboutKicker}</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="partner-names"><span>Ragu</span><span>Muruganandham</span></div></div></section>
      <section className="contact section" id="contact"><div className="contact-info"><div className="eyebrow light">{t.contactKicker}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-links"><a href={`tel:${phone}`}><Phone size={18} /> +91 98424 66544</a><a href={`${whatsappBase}?text=${encodeURIComponent('Hello Sri Ganapathy, I have a general enquiry.')}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a><a href={maps} target="_blank" rel="noreferrer"><MapPin size={18} /> {t.map}</a></div></div><form className="contact-form" onSubmit={submit}><label>{t.formName}<input required name="name" placeholder={lang === 'en' ? 'Enter your name' : 'உங்கள் பெயரை எழுதுங்கள்'} /></label><label>{t.formPhone}<input required name="phone" type="tel" placeholder={lang === 'en' ? '+91' : '+91'} /></label><label>{t.formType}<select required name="type" value={typeLabel} onChange={(e) => setEnquiry(e.target.value.includes('Farmer') || e.target.value.includes('விவசாயி') ? 'farmer' : e.target.value.includes('Institutional') || e.target.value.includes('நிறுவன') ? 'institution' : 'buyer')}><option>{t.farmerType}</option><option>{t.buyerType}</option><option>{t.institutionType}</option></select></label><label>{t.formMessage}<textarea name="message" rows="4" placeholder={lang === 'en' ? 'Tell us about your harvest or requirement...' : 'உங்கள் அறுவடை அல்லது தேவையை எழுதுங்கள்...'}></textarea></label><button className="button gold full" type="submit">{sent ? <><Check size={17} /> {t.success}</> : <>{t.formSubmit} <Send size={16} /></>}</button></form></section>
    </main>
    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading & Distribution</small></span></a><p>{t.footerText}</p><div className="footer-actions"><a href={maps} target="_blank" rel="noreferrer"><MapPin size={17} /></a><a href={`tel:${phone}`}><Phone size={17} /></a><a href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle size={17} /></a></div></div><div className="footer-bottom"><span>{t.address}</span><span>© {new Date().getFullYear()} {t.rights}</span></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
