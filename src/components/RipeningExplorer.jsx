import { useState } from 'react';
import { BananaIllustration } from './BananaIllustration';
export function RipeningExplorer({ t }) {
  const [stage, setStage] = useState(0);
  const current = t.ripeningStages[stage];
  return <section className="ripening-explorer section" aria-labelledby="ripening-title"><div className="eyebrow">{t.facilitiesKicker}</div><h2 id="ripening-title">{t.ripeningTitle}</h2><p>{t.ripeningText}</p><div className={`ripening-stage stage-${stage}`}><BananaIllustration /><div><strong>{current[0]}</strong><span>{current[1]}</span></div></div><label className="sr-only" htmlFor="ripening-slider">{t.ripeningTitle}</label><input id="ripening-slider" type="range" min="0" max={t.ripeningStages.length - 1} value={stage} onChange={(event) => setStage(Number(event.target.value))} aria-valuetext={`${current[0]}: ${current[1]}`} /><div className="ripening-labels">{t.ripeningStages.map(([name], index) => <button type="button" className={index === stage ? 'active' : ''} key={name} onClick={() => setStage(index)}>{name}</button>)}</div></section>;
}
