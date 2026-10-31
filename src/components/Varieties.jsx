import { ArrowUpRight } from 'lucide-react';
export function Varieties({ t, jump }) {
  return <section className="section varieties" id="products"><div className="section-heading"><div><div className="eyebrow">{t.varietiesKicker}</div><h2>{t.varietiesTitle}</h2></div><p>{t.varietiesText}</p></div><div className="variety-grid">{t.varieties.map(([name, use], i) => <article className="variety-card" key={name} tabIndex="0"><span className="variety-number">0{i + 1}</span><div className="variety-card-copy"><h3>{name}</h3><p>{use}</p><small>{t.varietiesDetail}: {use}</small><button className="arrow-link button-reset" onClick={() => jump('buyer')}>{t.ask} <ArrowUpRight size={15} /></button></div></article>)}</div></section>;
}
