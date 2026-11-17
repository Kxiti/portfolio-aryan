'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, Smartphone } from 'lucide-react'
import { useState } from 'react'

const prototypeScreens = [
  {
    title: 'What’s On · Now',
    phase: 'DISCOVER',
    description: 'A live-feeling exhibition list puts current options, prices, duration and visit style in one scan.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%201-zTaYxcrXaHayJOEXqwo83DAFNrEYua.png',
    alt: 'Museum app What’s On screen filtered to Now, listing Bodies of Water, Night Casts, Paper Rooms and Ground Truth with prices and visit details.',
  },
  {
    title: 'What’s On · Weekend',
    phase: 'DISCOVER',
    description: 'A weekend filter brings time-sensitive, bookable visits into a single guest-first list.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%202-TpJ39zvensxmNpnZERdUY16N6UaJfe.png',
    alt: 'Museum app weekend listing with Print Lab, Bodies of Water, Curator Walk and Under Fives Morning.',
  },
  {
    title: 'What’s On · Free',
    phase: 'DISCOVER',
    description: 'A separate free filter makes a lower-cost visit easy to find without opening each listing.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%203-XgdeSILCEC5W0rVpnTJtuzHoNCun7m.png',
    alt: 'Museum app What’s On screen filtered to free activities, including The Long Room, Collection highlights, Sculpture court and Under Fives Morning.',
  },
  {
    title: 'Search',
    phase: 'DISCOVER',
    description: 'A calm, low-friction search state sits beside the browse filters.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%205-YYmuiQNPNmf0u2Hx3pBhxjUMbQGcMJ.png',
    alt: 'Minimal museum app search screen with a single search field and guest indicator.',
  },
  {
    title: 'Availability alert',
    phase: 'RECOVER',
    description: 'When a chosen exhibit cannot be booked, the message explains the constraint before the visitor reaches checkout.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%204-VCWop1k7Aicf4l1XhVIHU4SnmVPo5o.png',
    alt: 'Availability dialog over the museum app stating that only Bodies of Water is currently available to book, with an Accept action.',
  },
  {
    title: 'Exhibit detail',
    phase: 'DECIDE',
    description: 'Tiered information introduces the visit length, activity level, total and access notes before asking for a commitment.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%206-h3mavddpLD1LXPgJ37euQDxJDnDOS7.png',
    alt: 'Bodies of Water exhibit page showing an at-a-glance family total, visit duration, hands-on level, ages, access filters and a book without an account button.',
  },
  {
    title: 'Who’s coming?',
    phase: 'DECIDE',
    description: 'Party size and child ages are explicit, while access needs remain visible as part of the decision.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%208-jJbe16obhf0m1AXUiZvtYrUJdwwx9V.png',
    alt: 'Bodies of Water ticket details with adult and child counts, child ages, access needs and a total of 5800 INR.',
  },
  {
    title: 'Choose a time',
    phase: 'BOOK',
    description: 'A month view and clear time slots support both planned visits and same-day choices.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%207-YAlPxIPScbaqlNs2MTYcEcEkPvGNie.png',
    alt: 'Museum app date and time picker for August 2026 with available visit slots and party summary.',
  },
  {
    title: 'Access ledger',
    phase: 'CHECK ACCESS',
    description: 'Concrete notes, staff check dates and a restated route make access details actionable rather than generic.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%209-iDQifOXGVPmN3zUmroz4B4MzLahHIh.png',
    alt: 'Museum app access information with a current lift disruption, staff-verified entrance, thresholds, seating, restrooms, parking and route notes.',
  },
  {
    title: 'Confirm and pay',
    phase: 'BOOK',
    description: 'The confirmation step restates the total and keeps email optional; the flow does not require an account.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%2010-yXvT1Y6v5FBJeBmp9ItAfF7oxU5QxR.png',
    alt: 'Museum checkout screen with a ticket breakdown, total of 58 dollars, optional email, and Pay or Card actions.',
  },
  {
    title: 'Visit pass',
    phase: 'AFTER BOOKING',
    description: 'A ticket, route summary and wallet, calendar and share actions carry the plan into the visit.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%2012-8m8qjA2aEYOgRbzR5pWyPf8wub2ywz.png',
    alt: 'Museum booking confirmation with a pass, route restatement, Add to Wallet, calendar and share actions.',
  },
  {
    title: 'Sold out, route blocked, or unverified',
    phase: 'RECOVER',
    description: 'Three dead-end states are designed with an alternative: another time, another route, or a request to verify.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%2013-n8FOXWDnqrnvPgaJIgHPUbtIqe04HR.png',
    alt: 'Museum app dead-end states for sold-out times, a route disruption and unverified access details, each paired with a next action.',
  },
  {
    title: 'Party total · detailed',
    phase: 'DECIDE',
    description: 'The expandable party detail keeps the family total in view while making age-fit and access choices easy to adjust.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%2011-Ue62pVNVJ8BcCCWSN4KvvxvFi93gFC.png',
    alt: 'Bodies of Water booking summary with adults and children steppers, age selections, access needs and a 5800 INR total.',
  },
]

export function MuseumPrototype() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeScreen = prototypeScreens[activeIndex]

  function changeScreen(index: number) {
    setActiveIndex((index + prototypeScreens.length) % prototypeScreens.length)
  }

  return (
    <div className="museum-prototype">
      <div className="museum-prototype-story">
        <div className="museum-prototype-kicker"><Smartphone size={15} aria-hidden="true" /><span>13 SCREENS · 4 MOMENTS</span></div>
        <div className="museum-prototype-copy" aria-live="polite">
          <span className="museum-prototype-phase">{activeScreen.phase}</span>
          <h3>{activeScreen.title}</h3>
          <p>{activeScreen.description}</p>
        </div>
        <div className="museum-prototype-controls">
          <button type="button" onClick={() => changeScreen(activeIndex - 1)} aria-label="Show previous app screen"><ArrowLeft size={18} aria-hidden="true" /><span>Previous</span></button>
          <span className="museum-prototype-count" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(prototypeScreens.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => changeScreen(activeIndex + 1)} aria-label="Show next app screen"><span>Next</span><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
        <div className="museum-screen-selectors" role="group" aria-label="Choose a museum app screen">
          {prototypeScreens.map((screen, index) => (
            <button
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              key={screen.title}
              aria-label={`Show screen ${index + 1}: ${screen.title}`}
              aria-pressed={index === activeIndex}
              onClick={() => changeScreen(index)}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
        <p className="museum-prototype-caption">Select a screen or move through the flow. Motion respects the device’s reduced-motion preference.</p>
      </div>

      <div className="museum-prototype-visual">
        <div className="museum-device-glow" aria-hidden="true" />
        <figure className="museum-iphone-frame" aria-label={`iPhone mockup showing ${activeScreen.title}`}>
          <div className="museum-iphone-screen">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="museum-iphone-image"
                key={activeScreen.title}
                initial={reduceMotion ? false : { opacity: 0, x: 22, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -18, scale: 0.985 }}
                transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={activeScreen.image} alt={activeScreen.alt} width={402} height={874} unoptimized priority={activeIndex === 0} />
              </motion.div>
            </AnimatePresence>
            <span className="museum-dynamic-island" aria-hidden="true" />
            <span className="museum-home-indicator" aria-hidden="true" />
          </div>
        </figure>
        <div className="museum-device-caption"><span>PUBLIC MUSEUM APP</span><i /> <span>INTERACTIVE PROTOTYPE</span></div>
      </div>
    </div>
  )
}
