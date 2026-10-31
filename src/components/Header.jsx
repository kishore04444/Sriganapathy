import { ChevronDown, Leaf, Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

const phone = '+919842466544';

export function Header({ t, lang, setLang, menu, setMenu }) {
  const nav = ['#top', '#about', '#farmers', '#buyers', '#products', '#facilities', '#institutions', '#contact'];
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menu) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenu(false);
      if (event.key !== 'Tab' || !menuRef.current) return;
      const focusable = [...menuRef.current.querySelectorAll('a,button')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    menuRef.current?.querySelector('a')?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menu, setMenu]);
  return <header className="header" id="top" ref={menuRef}>
    <a className="brand" href="#top"><span className="brand-mark"><Leaf size={21} fill="currentColor" /></span><span><b>SRI GANAPATHY</b><small>Banana Trading &amp; Distribution</small></span></a>
    <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={t.labels.toggleNavigation} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
    <nav className={menu ? 'nav open' : 'nav'} aria-label={t.labels.primaryNavigation}>
      {t.nav.map((item, index) => <a key={item} href={nav[index]} onClick={() => setMenu(false)}>{item}</a>)}
      <button className="lang" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')} aria-label={lang === 'en' ? t.labels.switchToTamil : t.labels.switchToEnglish}>{lang === 'en' ? 'தமிழ்' : 'EN'} <ChevronDown size={14} /></button>
      <a className="nav-cta" href={`tel:${phone}`} onClick={() => setMenu(false)}><Phone size={15} /> +91 98424 66544</a>
    </nav>
  </header>;
}
