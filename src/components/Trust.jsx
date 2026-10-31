export function Trust({ t }) {
  return <section className="trust-strip" aria-label={t.labels.businessFacts}>{t.trust.map((fact, i) => <div key={fact}><span>0{i + 1}</span><b>{fact}</b></div>)}</section>;
}
