import React, { useEffect, useState } from 'react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { en } from './content/en';
import { ta } from './content/ta';
import ratesData from '../data/rates.json';
import gallery from '../data/gallery.json';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Story } from './components/Story';
import { Varieties } from './components/Varieties';
import { Rates } from './components/Rates';
import { Journey } from './components/Journey';
import { Audience } from './components/Audience';
import { Facilities } from './components/Facilities';
import { Institutions } from './components/Institutions';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { IntroLoader } from './components/IntroLoader';
import { Marquee } from './components/Marquee';
import { RipeningExplorer } from './components/RipeningExplorer';

const phone = '+919842466544';
const whatsapp = 'https://wa.me/919842466544';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=51-52%2C+8th+Street+Extension%2C+Subbana+Gounder+Layout%2C+New+Siddhapudur%2C+Coimbatore%2C+Tamil+Nadu+641012';

export function App() {
  const [lang, setLang] = useState(() => typeof localStorage !== 'undefined' && localStorage.getItem('sg-lang') === 'ta' ? 'ta' : 'en');
  const [menu, setMenu] = useState(false);
  const [enquiry, setEnquiry] = useState('buyer');
  const t = lang === 'en' ? en : ta;
  useEffect(() => { localStorage.setItem('sg-lang', lang); document.documentElement.lang = lang; }, [lang]);
  const jump = (type) => { setEnquiry(type); setMenu(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); };
  return <div className="app"><IntroLoader t={t} /><a className="skip-link" href="#main-content">{t.labels.skip}</a><Header {...{ t, lang, setLang, menu, setMenu }} /><main id="main-content"><Hero t={t} jump={jump} /><Trust t={t} /><Marquee t={t} /><Story t={t} /><Journey t={t} /><Varieties t={t} jump={jump} /><RipeningExplorer t={t} /><Rates t={t} ratesData={ratesData} /><Audience t={t} type="farmer" jump={jump} /><Audience t={t} type="buyer" jump={jump} /><Facilities t={t} jump={jump} /><Institutions t={t} jump={jump} /><Gallery t={t} gallery={gallery} /><FAQ t={t} /><Contact t={t} enquiry={enquiry} setEnquiry={setEnquiry} /></main><Footer t={t} /><a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label={t.labels.whatsapp}><MessageCircle /></a><div className="mobile-bar"><a href={`tel:${phone}`}><Phone size={17} />{t.callMundy}</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.labels.whatsapp}</a><a href={maps} target="_blank" rel="noreferrer"><MapPin size={17} />{t.labels.directions}</a></div></div>;
}
