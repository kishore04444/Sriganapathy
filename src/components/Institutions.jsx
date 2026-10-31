import { ArrowUpRight } from 'lucide-react';
function Button({ children, className = '', ...props }) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Institutions({ t, jump }) {
  return <section className="institutions section" id="institutions"><div className="section-heading"><div><div className="eyebrow">{t.institutionKicker}</div><h2>{t.institutionTitle}</h2></div><p>{t.institutionText}</p></div><div className="use-case-grid">{t.useCases.map((useCase, i) => <div key={useCase} className="use-case"><span>0{i + 1}</span><h3>{useCase}</h3></div>)}</div><Button className="gold" onClick={() => jump('institution')}>{t.institutionKicker} <ArrowUpRight size={16} /></Button></section>;
}
