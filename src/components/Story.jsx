import { ArrowUpRight } from 'lucide-react';
export function Story({ t }) {
  return <section className="story section" id="about"><div className="story-copy"><div className="eyebrow">{t.storyKicker}</div><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="arrow-link" href="#contact">{t.labels.talkToTeam} <ArrowUpRight size={16} /></a></div><div className="story-photo"><img src="/images/plantation-banana-1200.webp" srcSet="/images/plantation-banana-480.webp 480w, /images/plantation-banana-800.webp 800w, /images/plantation-banana-1200.webp 1200w" sizes="(max-width: 900px) 100vw, 45vw" width="1200" height="840" loading="lazy" alt={t.labels.farmAlt} /><span>{t.labels.talkToTeam}</span></div></section>;
}
