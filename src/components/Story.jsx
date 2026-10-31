import { ArrowUpRight } from 'lucide-react';
export function Story({ t }) {
  return <section className="story section" id="about"><div className="story-copy"><div className="eyebrow">{t.storyKicker}</div><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="arrow-link" href="#contact">{t.labels.talkToTeam} <ArrowUpRight size={16} /></a></div><div className="story-photo"><img src="/images/plantation.webp" srcSet="/images/plantation.webp 1000w" width="1000" height="700" loading="lazy" alt={t.labels.farmAlt} /><span>{t.labels.talkToTeam}</span></div></section>;
}
