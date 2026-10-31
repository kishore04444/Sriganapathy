import { useEffect, useRef, useState } from 'react';
import { Leaf } from 'lucide-react';
export function Journey({ t }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(Number(entry.target.dataset.step));
    }), { rootMargin: '-30% 0px -45% 0px', threshold: 0 });
    refs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <section className="journey section" aria-labelledby="journey-title"><div className="section-heading"><div><div className="eyebrow light">{t.journeyKicker}</div><h2 id="journey-title">{t.journeyTitle}</h2></div><div className="journey-counter" aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(t.journey.length).padStart(2, '0')}</div></div><div className="journey-grid" style={{ '--journey-progress': `${(active / (t.journey.length - 1)) * 100}%` }}>{t.journey.map(([number, title, text], i) => <article ref={(element) => { refs.current[i] = element; }} data-step={i} className={i === active ? 'active' : ''} tabIndex="0" key={number}><span>{number}</span><div className="journey-dot"><Leaf size={15} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
