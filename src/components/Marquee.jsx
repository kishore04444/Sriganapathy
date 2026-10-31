export function Marquee({ t }) {
  const labels = t.varieties.map(([name]) => name).join('  ·  ');
  return <div className="marquee" aria-label={t.marqueeLabel}><div aria-hidden="true">{labels}  ·  {labels}</div></div>;
}
