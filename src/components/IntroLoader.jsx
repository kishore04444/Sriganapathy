import { useEffect, useState } from 'react';
import { BananaIllustration } from './BananaIllustration';
export function IntroLoader({ t }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (sessionStorage.getItem('sg-loader-seen') === '1' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setVisible(true);
    const started = performance.now();
    const timer = window.setInterval(() => {
      const value = Math.min(100, ((performance.now() - started) / 900) * 100);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(timer);
        sessionStorage.setItem('sg-loader-seen', '1');
        window.setTimeout(() => setVisible(false), 80);
      }
    }, 30);
    return () => window.clearInterval(timer);
  }, []);
  if (!visible) return null;
  return <div className="intro-loader" role="status" aria-live="polite"><div className="loader-inner"><BananaIllustration /><p>{t.loaderLabel}</p><div className="loader-track"><span style={{ width: `${progress}%` }} /></div><button type="button" className="loader-skip" onClick={() => { sessionStorage.setItem('sg-loader-seen', '1'); setVisible(false); }}>{t.skipLoader}</button></div></div>;
}
