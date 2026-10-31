import { ArrowUpRight } from 'lucide-react';
function Button({ children, className = '', ...props }) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Audience({ t, type, jump }) {
  const farmer = type === 'farmer';
  return <section className={`audience section ${farmer ? 'farmer-section' : 'buyer-section'}`} id={farmer ? 'farmers' : 'buyers'}><div className="audience-photo"><img src={farmer ? '/images/farmer-market.webp' : '/images/buyer-bunches.webp'} srcSet={farmer ? '/images/farmer-market.webp 1000w' : '/images/buyer-bunches.webp 1000w'} width="1000" height="700" loading="lazy" alt={farmer ? t.labels.marketAlt : t.labels.buyerAlt} /></div><div className="audience-copy"><div className="eyebrow">{farmer ? t.farmerKicker : t.buyerKicker}</div><h2>{farmer ? t.farmerTitle : t.buyerTitle}</h2><p>{farmer ? t.farmerText : t.buyerText}</p><Button className="primary" onClick={() => jump(farmer ? 'farmer' : 'buyer')}>{farmer ? t.farmer : t.buyer} <ArrowUpRight size={16} /></Button></div></section>;
}
