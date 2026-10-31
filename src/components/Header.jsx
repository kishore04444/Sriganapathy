import { ChevronDown, Leaf, Menu, Phone, X } from 'lucide-react';

const phone = '+919842466544';

export function Header({ t, lang, setLang, menu, setMenu }) {
  const nav = ['#top', '#about', '#farmers', '#buyers', '#products', '#facilities', '#institutions', '#contact'];
  return <header className="header" id="top">
    <a className="brand" href="#top"><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading &amp; Distribution</small></span></a>
    <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={t.labels.toggleNavigation} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
    <nav className={menu ? 'nav open' : 'nav'} aria-label={t.labels.primaryNavigation}>
      {t.nav.map((item, index) => <a key={item} href={nav[index]} onClick={() => setMenu(false)}>{item}</a>)}
      <button className="lang" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')} aria-label={lang === 'en' ? t.labels.switchToTamil : t.labels.switchToEnglish}>{lang === 'en' ? 'தமிழ்' : 'EN'} <ChevronDown size={14} /></button>
      <a className="nav-cta" href={`tel:${phone}`} onClick={() => setMenu(false)}><Phone size={15} /> +91 98424 66544</a>
    </nav>
  </header>;
}
