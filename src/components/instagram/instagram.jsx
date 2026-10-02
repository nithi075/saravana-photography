import { motion, useReducedMotion } from 'framer-motion';
import './instagram.css';

import gallery1 from '../../assets/gal1.jpeg';
import gallery2 from '../../assets/gal2.jpeg';
import gallery3 from '../../assets/gal3.jpeg';
import gallery4 from '../../assets/gal5.jpeg';
import gallery5 from '../../assets/gal4.jpg';


const INSTAGRAM_URL = 'https://www.instagram.com/light_in_life_photography_/';
const INSTAGRAM_HANDLE = '@light_in_life_photography_';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Instagram = () => {
  // Skip the fade-up for people who have reduced motion turned on
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="insta-feed"
      id="instagram"
      aria-labelledby="instagram-heading"
    >
      {/* Header */}
      <div className="insta-feed__header">
        <div className="insta-feed__heading">
          <span className="insta-feed__label">Follow Along</span>

          <h2 className="insta-feed__title" id="instagram-heading">
            Visual Narratives
          </h2>

          <p className="insta-feed__description">
            A closer look at the weddings, engagements and quiet moments
            we've been lucky to capture lately.
          </p>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-feed__handle"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </div>

      {/* Gallery */}
      <div className="insta-feed__grid">
        {images.map((img, i) => (
          <motion.a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-feed__item"
            aria-label={`View photo ${i + 1} on Instagram`}
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          >
            <div className="insta-feed__image">
              <img
                src={img}
                alt={`Wedding photography, gallery photo ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <span className="insta-feed__icon" aria-hidden="true" />
            <span className="insta-feed__number" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="insta-feed__footer">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-feed__button"
        >
          Follow on Instagram <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Instagram;
