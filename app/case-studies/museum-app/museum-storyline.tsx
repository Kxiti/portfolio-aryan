'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const moments = [
  {
    label: '01 / DISCOVER',
    title: 'What’s on this weekend?',
    visitor: 'Devon · the spontaneous browser',
    question: 'I just want to know what’s current—and whether I can walk in.',
    response: 'Open on a guest-first What’s On list. Show clear end dates, same-day options and what needs a separate ticket.',
    detail: 'CURRENT · NO LOGIN',
  },
  {
    label: '02 / COMPARE',
    title: 'Will it work for my family?',
    visitor: 'Maya · the logistics planner',
    question: 'What will four tickets cost, how long will we be there, and can the kids touch anything?',
    response: 'Put the family total, typical visit length and hands-on level together—before the booking flow.',
    detail: 'COST · TIME · SUITABILITY',
  },
  {
    label: '03 / CHECK ACCESS',
    title: 'Can I trust the access details?',
    visitor: 'Renata · the trust-first visitor',
    question: 'Is this information specific—and has someone checked it recently?',
    response: 'Show practical access details with a visible checked date. If a detail is unknown or stale, say so plainly.',
    detail: 'SPECIFIC · DATED · HONEST',
  },
  {
    label: '04 / ADAPT',
    title: 'What if the plan changes?',
    visitor: 'A change of plan · the next-step test',
    question: 'That time is gone, or the route is closed. What can I do now?',
    response: 'Offer a useful next step: another date, a walk-in option, a route update or a way to ask staff.',
    detail: 'ALTERNATIVE · NEXT STEP',
  },
]

export function MuseumStoryline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeMoment = moments[activeIndex]

  return (
    <div className="museum-storyline">
      <p className="museum-storyline-note">ILLUSTRATIVE SCENARIOS · PARAPHRASED FROM THE PERSONA BRIEFS, NOT PARTICIPANT QUOTES</p>
      <div className="museum-storyline-steps" role="group" aria-label="Choose a moment in the museum visit story">
        {moments.map((moment, index) => (
          <button
            className={`museum-storyline-step ${index === activeIndex ? 'is-active' : ''}`}
            type="button"
            key={moment.label}
            aria-pressed={index === activeIndex}
            aria-controls="museum-storyline-panel"
            onClick={() => setActiveIndex(index)}
          >
            <span className="museum-step-marker" aria-hidden="true" />
            <span className="museum-step-label">{moment.label}</span>
            <span className="museum-step-title">{moment.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={activeMoment.label}
          id="museum-storyline-panel"
          className="museum-story-panel"
          aria-live="polite"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="museum-dialogue-bubble visitor-bubble">
            <span>VISITOR / {activeMoment.visitor}</span>
            <p>{activeMoment.question}</p>
          </div>
          <div className="museum-dialogue-bubble app-bubble">
            <span>THE DESIGN RESPONSE / {activeMoment.detail}</span>
            <p>{activeMoment.response}</p>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
