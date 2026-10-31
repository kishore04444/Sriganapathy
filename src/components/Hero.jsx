import { Clock3, Leaf, Phone, Sprout, Users } from 'lucide-react';
const phone = '+919842466544';
function Button({ children, className = '', ...props }) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Hero({ t, jump }) {
  return <section className="hero"><div className="hero-copy"><div className="eyebrow light"><span className="eyebrow-line" />{t.heroKicker}</div>
    <h1>{t.heroTitle}</h1><p>{t.heroText}</p><div className="hero-actions"><Button className="gold" onClick={() => jump('farmer')}><Sprout size={17} />{t.farmer}</Button><Button className="outline-light" onClick={() => jump('buyer')}><Users size={17} />{t.buyer}</Button><a className="button text-light" href={`tel:${phone}`}><Phone size={17} />{t.callMundy}</a></div>
    {t.auctionTime && <div className="auction-pill"><span className="live-dot" /><Clock3 size={15} /> {t.auctionTime}</div>}
  </div><div className="hero-image"><img src="/images/hero-banana.webp" srcSet="/images/hero-banana.webp 1200w" fetchPriority="high" width="1200" height="900" alt={t.labels.galleryAlt} /><div className="hero-image-overlay" /><div className="hero-image-note"><Leaf size={15} /> {t.labels.heroLocation}</div></div></section>;
}
