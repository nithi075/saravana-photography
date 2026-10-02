
import './Floating.css'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className="floating-contact">

      {/* Phone */}
      <a
        href="tel:+919443913985"
        className="floating-contact__btn floating-contact__btn--phone"
        aria-label="Call Saravana Photography"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919443913985"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact__btn floating-contact__btn--whatsapp"
        aria-label="WhatsApp Saravana Photography"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  )
}


