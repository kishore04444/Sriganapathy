import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
export const realFaq = (faq) => faq.filter(([, answer]) => answer.trim());
export function FAQ({ t }) {
  const [open, setOpen] = useState(null);
  const items = realFaq(t.faq);
  if (!items.length) return null;
  return <section className="faq section"><div className="eyebrow">{t.faqKicker}</div><h2>{t.faqTitle}</h2><div className="faq-list">{items.map(([question, answer], i) => { const id = `faq-answer-${i}`; const expanded = open === i; return <div className="faq-item" key={question}><button aria-expanded={expanded} aria-controls={id} onClick={() => setOpen(expanded ? null : i)}><span>{question}</span>{expanded ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}</button><div id={id} role="region" aria-hidden={!expanded} hidden={!expanded}><p>{answer}</p></div></div>; })}</div></section>;
}
