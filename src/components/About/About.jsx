
import './About.css'

import aboutImage1 from '../../assets/about1.jpeg'
import aboutImage2 from '../../assets/about2.jpeg'

export default function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about__container">

        {/* ---- Image Column ---- */}
        <div className="about__images">

          <div className="about__img-primary">
            <img
              className="about__image"
              src={aboutImage1}
              alt="Saravana Photography capturing a beautiful wedding moment"
              loading="lazy"
            />
          </div>

          <div className="about__img-secondary">
            <img
              className="about__image"
              src={aboutImage2}
              alt="Saravana Photography wedding photography"
              loading="lazy"
            />
          </div>

          <span
            className="about__frame"
            aria-hidden="true"
          />

        </div>

        {/* ---- Text Column ---- */}
        <div className="about__text">

          <span className="section-label">
            Why Saravana Photography?
          </span>

          <h2
            className="about__heading"
            id="about-heading"
          >
            We Don't Just Capture Moments.
            <br />
            We Preserve Emotions.
          </h2>

          <p className="about__body">
            At Saravana Photography, we believe that every love story
            deserves to be remembered beautifully. From the nervous
            smiles and quiet glances to the laughter, celebrations,
            and unforgettable wedding moments, we capture the emotions
            that make your story truly yours.
          </p>

          <p className="about__body">
            With a blend of candid photography, traditional portraits,
            creative storytelling, and cinematic visuals, our goal is
            to create photographs and films that take you back to the
            most beautiful moments of your special day.
          </p>

          <a
            href="#contact"
            className="btn about__cta"
          >
            Let's Create Memories

            <span
              className="about__cta-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}

