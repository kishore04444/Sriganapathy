import { MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
const phone = '+919842466544';
const whatsapp = 'https://wa.me/919842466544';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=51-52%2C+8th+Street+Extension%2C+Subbana+Gounder+Layout%2C+New+Siddhapudur%2C+Coimbatore%2C+Tamil+Nadu+641012';
function Button({ children, className = '', ...props }) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Contact({ t, enquiry, setEnquiry }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const firstInvalid = useRef(null);
  useEffect(() => { if (firstInvalid.current) firstInvalid.current.focus(); }, [errors]);
  const change = () => { if (sent) setSent(false); };
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const rawPhone = String(data.get('phone') || '').replace(/\D/g, '').replace(/^91/, '');
    const next = {};
    if (!name) next.name = t.required;
    if (!/^[6-9]\d{9}$/.test(rawPhone)) next.phone = t.invalidPhone;
    setErrors(next);
    if (Object.keys(next).length) {
      firstInvalid.current = form.elements[next.name ? 'name' : 'phone'];
      return;
    }
    const message = `Hello Sri Ganapathy, my name is ${name}. Phone: ${data.get('phone')}. Enquiry: ${data.get('type')}. ${data.get('message') || ''}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const typeLabel = enquiry === 'farmer' ? t.farmerType : enquiry === 'institution' ? t.institutionType : t.buyerType;
  return <section className="contact section" id="contact"><div className="contact-copy"><div className="eyebrow light">{t.contactKicker}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-links"><a href={`tel:${phone}`}><Phone size={18} /> +91 98424 66544</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {t.labels.whatsapp}</a><a href={maps} target="_blank" rel="noreferrer"><MapPin size={18} /> {t.labels.directions}</a></div><div className="map-card"><MapPin size={18} /><span>51–52, 8th Street Extension, New Siddhapudur, Coimbatore – 641012</span></div></div><form className="contact-form" onSubmit={submit} noValidate onChange={change}><label htmlFor="contact-name">{t.name}<input id="contact-name" required name="name" aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <small id="name-error" role="alert">{errors.name}</small>}</label><label htmlFor="contact-phone">{t.phone}<input id="contact-phone" required name="phone" type="tel" inputMode="tel" aria-required="true" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />{errors.phone && <small id="phone-error" role="alert">{errors.phone}</small>}</label><label htmlFor="contact-type">{t.type}<select id="contact-type" name="type" value={typeLabel} onChange={(e) => { setEnquiry(e.target.value.includes('Farmer') || e.target.value.includes('விவசாயி') ? 'farmer' : e.target.value.includes('Institutional') || e.target.value.includes('நிறுவன') ? 'institution' : 'buyer'); change(); }}><option>{t.farmerType}</option><option>{t.buyerType}</option><option>{t.institutionType}</option></select></label><label htmlFor="contact-message">{t.message}<textarea id="contact-message" name="message" rows="4" /></label><Button className="gold full" type="submit">{sent ? t.success : <>{t.submit} <Send size={16} /></>}</Button></form></section>;
}
