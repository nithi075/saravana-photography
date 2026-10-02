
import './Contact.css'
import contactImg from '../../assets/contact.jpeg'

export default function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
    >

      <div className="contact__hero">

        {/* Contact Image */}
        <div className="contact__hero-img-wrap">
          <img
            src={contactImg}
            alt="Saravana Photography wedding photography"
            loading="lazy"
            className="contact__hero-img"
          />
        </div>

        {/* Overlay */}
        <div
          className="contact__hero-overlay"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="contact__hero-content">

          <span className="section-label">
            Saravana Photography
          </span>

          <h2
            className="contact__heading"
            id="contact-heading"
          >
            Let's Capture Your Story
          </h2>

          <p className="contact__subtext">
            Your wedding day is filled with moments that deserve
            to be remembered forever. Get in touch with Saravana
            Photography and let's create beautiful memories
            together.
          </p>

          <a
            href="https://wa.me/919443913985"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
            aria-label="Contact Saravana Photography on WhatsApp"
          >
            Get in Touch
          </a>

        </div>

      </div>

    </section>
  )
}

