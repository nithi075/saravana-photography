
import { useState } from 'react'
import './Portfolio.css'

import img1 from '../../assets/featured/img1.jpeg'
import img2 from '../../assets/featured/img2.jpeg'
import img3 from '../../assets/featured/img3.jpeg'
import img4 from '../../assets/featured/img4.jpeg'
import img5 from '../../assets/featured/img5.jpeg'
import img6 from '../../assets/featured/img6.jpeg'
import img7 from '../../assets/featured/img7.jpeg'
import img8 from '../../assets/featured/img8.jpeg'
import img9 from '../../assets/featured/img9.jpeg'
import img10 from '../../assets/featured/img10.jpeg'
import img11 from '../../assets/featured/img11.jpeg'
import img12 from '../../assets/featured/img12.jpeg'
import img13 from '../../assets/featured/img13.jpeg'
import img16 from '../../assets/featured/img16.jpeg'
import img17 from '../../assets/featured/img17.jpeg'
import img18 from '../../assets/featured/img18.jpeg'
import img20 from '../../assets/featured/img20.jpeg'
import img21 from '../../assets/featured/img21.jpeg'
import img22 from '../../assets/featured/img22.jpeg'

import post1 from '../../assets/featured/post1.jpeg'
import post2 from '../../assets/featured/post2.jpeg'
import post3 from '../../assets/featured/post3.jpeg'
import post4 from '../../assets/featured/post4.jpeg'
import post5 from '../../assets/featured/post5.jpeg'
import post6 from '../../assets/featured/post6.jpeg'
import post7 from '../../assets/featured/post7.jpeg'
import post8 from '../../assets/featured/post8.jpeg'
import post9 from '../../assets/featured/post9.jpeg'
import post10 from '../../assets/featured/post10.jpeg'
import post11 from '../../assets/featured/post11.jpeg'
import post12 from '../../assets/featured/post12.jpeg'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'reception', label: 'Reception' },
  { id: 'postwedding', label: 'Post Wedding' },
  { id: 'puberty', label: 'Puberty' },
  { id: 'maternity', label: 'Maternity' },
]

const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.id, category.label])
)

const categoryDescriptions = {
  all: 'Explore our complete collection of weddings, celebrations and special moments.',

  wedding:
    'Timeless wedding photography capturing emotions, traditions and unforgettable moments.',

  reception:
    'Elegant reception coverage filled with celebrations, candid moments and grand memories.',

  postwedding:
    'Beautiful post-wedding photoshoots capturing romantic moments, natural emotions and memories together.',

  puberty:
    'Beautiful puberty ceremony photography capturing cherished traditions, family blessings and unforgettable memories.',

  maternity:
    'Beautiful maternity portraits celebrating motherhood and new beginnings.',
}

const portfolioItems = [
  // Wedding: img1 to img6 and img8
  { id: 1, cat: 'wedding', src: img1 },
  { id: 2, cat: 'wedding', src: img2 },
  { id: 3, cat: 'wedding', src: img3 },
  { id: 4, cat: 'wedding', src: img4 },
  { id: 5, cat: 'wedding', src: img5 },
  { id: 6, cat: 'wedding', src: img6 },
  { id: 8, cat: 'wedding', src: img8 },

  // Maternity: img7 and img9 to img13
  { id: 7, cat: 'maternity', src: img7 },
  { id: 9, cat: 'maternity', src: img9 },
  { id: 10, cat: 'maternity', src: img10 },
  { id: 11, cat: 'maternity', src: img11 },
  { id: 12, cat: 'maternity', src: img12 },
  { id: 13, cat: 'maternity', src: img13 },

  // Reception
  { id: 16, cat: 'puberty', src: img16 },
  { id: 17, cat: 'reception', src: img17 },
  { id: 18, cat: 'reception', src: img18 },

  // Post Wedding: post1 to post12
  { id: 101, cat: 'postwedding', src: post1 },
  { id: 102, cat: 'postwedding', src: post2 },
  { id: 103, cat: 'postwedding', src: post3 },
  { id: 104, cat: 'postwedding', src: post4 },
  { id: 105, cat: 'postwedding', src: post5 },
  { id: 106, cat: 'postwedding', src: post6 },
  { id: 107, cat: 'postwedding', src: post7 },
  { id: 108, cat: 'postwedding', src: post8 },
  { id: 109, cat: 'postwedding', src: post9 },
  { id: 110, cat: 'postwedding', src: post10 },
  { id: 111, cat: 'postwedding', src: post11 },
  { id: 112, cat: 'postwedding', src: post12 },

  // Puberty: img20 to img22
  { id: 20, cat: 'puberty', src: img20 },
  { id: 21, cat: 'puberty', src: img21 },
  { id: 22, cat: 'puberty', src: img22 },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    active === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.cat === active)

  const activeList = filtered

  const openLightbox = (item) => setLightbox(item)

  const closeLightbox = () => setLightbox(null)

  const currentIndex = lightbox
    ? activeList.findIndex((item) => item.id === lightbox.id)
    : -1

  const navigate = (dir) => {
    if (activeList.length === 0 || currentIndex === -1) return

    const nextIndex =
      (currentIndex + dir + activeList.length) % activeList.length

    setLightbox(activeList[nextIndex])
  }

  const describeItem = (item) =>
    `${categoryLabels[item.cat]} photography`

  return (
    <section
      className="portfolio"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      {/* Header */}
      <div className="portfolio__header">
        <span className="section-label">Our Work</span>

        <h2 className="portfolio__heading" id="portfolio-heading">
          Portfolio
        </h2>

        <p className="portfolio__sub">
          From intimate portraits to grand celebrations — every frame tells a story.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        className="portfolio__filters"
        role="tablist"
        aria-label="Portfolio categories"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`portfolio__filter-btn${
              active === cat.id
                ? ' portfolio__filter-btn--active'
                : ''
            }`}
            onClick={() => {
              setActive(cat.id)
              setLightbox(null)
            }}
            role="tab"
            aria-selected={active === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Category Description */}
      <div className="portfolio__category-info">
        <p>{categoryDescriptions[active]}</p>
      </div>

      {/* Photo Grid */}
      <div className="portfolio__grid" key={active}>
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="portfolio__item"
            style={{ animationDelay: `${index * 40}ms` }}
            onClick={() => openLightbox(item)}
            aria-label={`View ${describeItem(item)}`}
          >
            <img
              src={item.src}
              alt={describeItem(item)}
              loading="lazy"
              className="portfolio__img"
            />

            <div className="portfolio__overlay">
              <span className="portfolio__overlay-icon">+</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="portfolio__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closeLightbox()
            if (event.key === 'ArrowRight') navigate(1)
            if (event.key === 'ArrowLeft') navigate(-1)
          }}
          tabIndex={-1}
        >
          <button
            type="button"
            className="portfolio__lb-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          <span className="portfolio__lb-counter">
            {currentIndex + 1} / {activeList.length}
          </span>

          <img
            src={lightbox.src}
            alt={describeItem(lightbox)}
            className="portfolio__lb-img"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="portfolio__lb-nav portfolio__lb-nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              navigate(-1)
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            className="portfolio__lb-nav portfolio__lb-nav--next"
            onClick={(event) => {
              event.stopPropagation()
              navigate(1)
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
