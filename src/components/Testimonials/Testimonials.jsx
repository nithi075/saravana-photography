
/* =============================================
   Testimonials — rotating pages of 3 reviews
   Saravana Photography
   ============================================= */

import { useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    body: 'Saravana Photography captured every beautiful moment of our wedding and reception so perfectly. From the pre-wedding shoot to the traditional wedding moments, everything was handled with great care. The team was friendly, flexible, and made us feel completely comfortable throughout the celebrations.',
    couple: 'Theebica + Purushoth',
  },
  {
    id: 2,
    body: 'We had an amazing experience with Saravana Photography for our engagement, reception, and wedding. The team was incredibly professional, creative, and supportive from start to finish. Every photograph beautifully captured the emotions and happiness of our special day.',
    couple: 'Jeevitha + Pawan',
  },
  {
    id: 3,
    body: 'We booked Saravana Photography for our engagement, pre-wedding shoot, reception, and wedding. The entire team was wonderful and made us feel very comfortable in front of the camera. The photographs and videos came out beautifully. Truly a memorable experience!',
    couple: 'Pratibha + Ashwanth',
  },
  {
    id: 4,
    body: 'We had a wonderful experience with Saravana Photography right from our pre-wedding photoshoot until the wedding celebrations. The team was talented, friendly, and extremely dedicated. Every important moment was captured beautifully, and the final album exceeded our expectations.',
    couple: 'Pooja + Raveen',
  },
  {
    id: 5,
    body: 'A big thank you to Saravana Photography for capturing our special moments so beautifully. The team understood exactly what we wanted and made sure every precious memory was documented. The photographs and videos were delivered with great quality. We would definitely recommend them!',
    couple: 'Divyashree + Narayanan',
  },
  {
    id: 6,
    body: 'We absolutely loved working with the Saravana Photography team. Their patience, creativity, and effort to capture the best moments were truly appreciable. They kept us comfortable throughout the event and captured genuine emotions beautifully. Thank you for giving us memories we can cherish forever.',
    couple: 'Subathra + Animesh',
  },
  {
    id: 7,
    body: 'The candid and traditional photography by Saravana Photography was exceptional. They perfectly balanced natural moments with beautiful traditional portraits. The videography was equally impressive, capturing all the important details of our wedding. Looking through the photos feels like reliving our special day again.',
    couple: 'Nivya + Manoj',
  },
  {
    id: 8,
    body: 'Wonderful experience with Saravana Photography! From the pre-wedding shoot to the wedding day, everything was smooth and well organized. The pictures were beautifully captured and the team did an amazing job with every special moment. Highly recommended for anyone looking for a professional wedding photography team.',
    couple: 'Aishwarya + Rahul',
  },
  {
    id: 9,
    body: 'Saravana Photography did an outstanding job capturing our wedding. We are extremely happy with both the photos and videos. The team was professional, patient, and creative throughout the entire event. Every moment was captured beautifully and the final memories are something we will cherish forever.',
    couple: 'Amrin + Saleem Pasha',
  },
]

/* Group into pages of PAGE_SIZE */
const PAGE_SIZE = 3

const pages = Array.from(
  { length: Math.ceil(testimonials.length / PAGE_SIZE) },
  (_, i) => testimonials.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
)

const SWIPE_DISTANCE = 50

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState('next')
  const touchStartX = useRef(null)

  const goTo = (index, dir) => {
    setDirection(dir)
    setPage(index)
  }

  const handlePrev = () => {
    goTo(
      (page - 1 + pages.length) % pages.length,
      'prev'
    )
  }

  const handleNext = () => {
    goTo(
      (page + 1) % pages.length,
      'next'
    )
  }

  /* Swipe left / right on touch screens */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return

    const distance =
      e.changedTouches[0].clientX - touchStartX.current

    touchStartX.current = null

    if (Math.abs(distance) < SWIPE_DISTANCE) return

    if (distance < 0) {
      handleNext()
    } else {
      handlePrev()
    }
  }

  const firstShown = page * PAGE_SIZE + 1

  const lastShown = Math.min(
    (page + 1) * PAGE_SIZE,
    testimonials.length
  )

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials__container">

        <span className="section-label">
          What Our Couples Say
        </span>

        <h2
          className="testimonials__heading"
          id="testimonials-heading"
        >
          Memories That Speak For Themselves
        </h2>

        <div className="testimonials__row">

          {/* Previous Button */}
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Testimonials */}
          <div
            className="testimonials__grid"
            key={page}
            data-direction={direction}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {pages[page].map((t) => (
              <article
                key={t.id}
                className="testimonial-card"
              >
                <p className="testimonial-card__body">
                  {t.body}
                </p>

                <footer className="testimonial-card__footer">
                  <p className="testimonial-card__couple">
                    {t.couple}
                  </p>

                  <span className="testimonial-card__brand">
                    Saravana Photography
                  </span>
                </footer>
              </article>
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <span aria-hidden="true">→</span>
          </button>

        </div>

        {/* Page Indicators */}
        <div
          className="testimonials__dots"
          role="group"
          aria-label="Testimonial pages"
        >
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonials__dot${
                i === page
                  ? ' testimonials__dot--active'
                  : ''
              }`}
              onClick={() =>
                goTo(
                  i,
                  i > page ? 'next' : 'prev'
                )
              }
              aria-label={`Go to testimonials page ${i + 1}`}
              aria-current={
                i === page ? 'true' : undefined
              }
            />
          ))}
        </div>

        {/* Screen reader announcement */}
        <p
          className="visually-hidden"
          aria-live="polite"
        >
          Showing testimonials {firstShown} to {lastShown} of{' '}
          {testimonials.length}
        </p>

      </div>
    </section>
  )
}

