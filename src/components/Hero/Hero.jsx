
import { useState, useEffect } from 'react'
import './Hero.css'

import hero2 from '../../assets/hero1.jpeg'
import hero1 from '../../assets/hero2.jpeg'
import hero3 from '../../assets/hero3.jpeg'

const slides = [
  {
    id: 1,
    src: hero1,
    alt: 'Saravana Photography — beautiful wedding couple portrait',
  },
  {
    id: 2,
    src: hero2,
    alt: 'Saravana Photography — elegant bridal portrait',
  },
  {
    id: 3,
    src: hero3,
    alt: 'Saravana Photography — authentic wedding ceremony moment',
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, INTERVAL)

    return () => clearInterval(id)
  }, [paused])

  const goTo = (i) => {
    setCurrent(i)
    setPaused(true)

    setTimeout(() => {
      setPaused(false)
    }, INTERVAL * 2)
  }

  return (
    <section
      className="hero"
      aria-label="Saravana Photography wedding photography slideshow"
    >
      {/* Slides */}
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide${
              i === current ? ' hero__slide--active' : ''
            }`}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          Wedding • Engagement • Pre-Wedding • Couple Sessions
        </p>

        <h1 className="hero__heading">
          Your Moments.
          <br />
          Our Memories.
        </h1>

        <p className="hero__description">
          At Saravana Photography, we turn your most precious moments
          into timeless memories. From intimate smiles to unforgettable
          wedding celebrations, we capture every emotion with creativity,
          elegance, and a personal touch.
        </p>

        <a
          href="#contact"
          className="btn btn-light hero__cta"
        >
          Book Your Story
        </a>
      </div>

      {/* Dots */}
      <div
        className="hero__dots"
        role="tablist"
        aria-label="Hero slide navigation"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`hero__dot${
              i === current ? ' hero__dot--active' : ''
            }`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div
        className="hero__scroll-hint"
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}

