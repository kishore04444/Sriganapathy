import { ArrowUpRight } from 'lucide-react';
function Button({ children, className = '', ...props }) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Audience({ t, type, jump }) {
  const farmer = type === 'farmer';
  const image = farmer ? 'farmer-market' : 'buyer-bunches';
  return <section className={`audience section ${farmer ? 'farmer-section' : 'buyer-section'}`} id={farmer ? 'farmers' : 'buyers'}><div className="audience-photo"><img src={`/images/${image}-1200.webp`} srcSet={`/images/${image}-480.webp 480w, /images/${image}-800.webp 800w, /images/${image}-1200.webp 1200w`} sizes="(max-width: 900px) 100vw, 45vw" width="1200" height="840" loading="lazy" alt={farmer ? t.labels.marketAlt : t.labels.buyerAlt} /></div><div className="audience-copy"><div className="eyebrow">{farmer ? t.farmerKicker : t.buyerKicker}</div><h2>{farmer ? t.farmerTitle : t.buyerTitle}</h2><p>{farmer ? t.farmerText : t.buyerText}</p><Button className="primary" onClick={() => jump(farmer ? 'farmer' : 'buyer')}>{farmer ? t.farmer : t.buyer} <ArrowUpRight size={16} /></Button></div></section>;
}
