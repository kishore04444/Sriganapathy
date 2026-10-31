export function Gallery({ t, gallery }) {
  if (!gallery.images.length) return null;
  return <section className="gallery section"><div className="eyebrow">{t.galleryKicker}</div><h2>{t.galleryTitle}</h2><div className="gallery-grid">{gallery.images.map((image) => <img key={image.src} src={image.src} srcSet={image.srcSet || image.src} width={image.width} height={image.height} loading="lazy" alt={image.alt} />)}</div></section>;
}
