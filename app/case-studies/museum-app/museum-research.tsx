import {
  Accessibility,
  ArrowDownRight,
  ArrowRight,
  Brain,
  CalendarDays,
  Heart,
  MessageCircle,
  Search,
  Sparkles,
  TicketCheck,
  Footprints,
} from 'lucide-react'
import { Reveal } from '../../components/reveal'

const researchFindings = [
  {
    value: 44,
    label: 'Parents with children',
    detail: 'were the most likely adult group to report visiting a museum in the AAM 2025 survey.',
    source: 'AAM · 2025 annual survey',
  },
  {
    value: 44,
    label: 'Family bookings',
    detail: 'were made in the final 48 hours before a visit in the Baker Richards / ALVA study.',
    source: 'Museums Association · 2025',
  },
  {
    value: 41,
    label: 'Families surveyed',
    detail: 'included a child with some level of special educational needs in the same study.',
    source: 'Museums Association · 2025',
  },
]

const personas = [
  {
    number: '01',
    name: 'Maya',
    archetype: 'The logistics planner',
    details: '36 · marketing manager · parent of two (6 and 9) · Austin, Texas',
    goal: 'Choose a weekend exhibit that feels worth the time and money for the whole family.',
    friction: 'Family totals, duration and hands-on fit are hard to compare; booking late adds pressure.',
    need: 'A clear four-person total, visit length and activity level before checkout.',
    accent: 'coral',
  },
  {
    number: '02',
    name: 'Devon',
    archetype: 'The spontaneous browser',
    details: '27 · software developer · solo or social visitor · Chicago, Illinois',
    goal: 'See what is currently on view and decide quickly when free time appears.',
    friction: 'Current exhibit details are scattered across social posts, museum pages and listings.',
    need: 'A guest-first “What’s On” view with run dates and walk-in options.',
    accent: 'mint',
  },
  {
    number: '03',
    name: 'Renata',
    archetype: 'The trust-first visitor',
    details: '58 · retired schoolteacher · uses a cane · Portland, Oregon',
    goal: 'Confirm that the route and accommodations will work before committing to a visit.',
    friction: 'Generic or undated access statements make her call ahead to verify the building.',
    need: 'Specific, dated access details with visible disruption status.',
    accent: 'orange',
  },
]

const empathyMaps = [
  {
    name: 'Maya',
    role: 'Family planning',
    color: 'coral',
    map: [
      { label: 'SAYS', icon: MessageCircle, text: 'Wants cost, time and kid-fit in plain language, right at the top.' },
      { label: 'THINKS', icon: Brain, text: 'A Saturday plan can change; committing to a large total too early feels risky.' },
      { label: 'DOES', icon: Footprints, text: 'Saves exhibits from Instagram, compares ticket options and calls when pricing is unclear.' },
      { label: 'FEELS', icon: Heart, text: 'Rushed when doing the math late; frustrated by account steps that add friction.' },
    ],
  },
  {
    name: 'Devon',
    role: 'Spontaneous discovery',
    color: 'mint',
    map: [
      { label: 'SAYS', icon: MessageCircle, text: 'Just wants to know what is current and whether a visit is worth making.' },
      { label: 'THINKS', icon: Brain, text: 'Any single listing may be out of date; relevant recommendations beat generic promotion.' },
      { label: 'DOES', icon: Footprints, text: 'Cross-checks social media, the museum site and third-party listings.' },
      { label: 'FEELS', icon: Heart, text: 'Annoyed by ten minutes of checking basic facts; rigid slots deflate spontaneity.' },
    ],
  },
  {
    name: 'Renata',
    role: 'Access before booking',
    color: 'orange',
    map: [
      { label: 'SAYS', icon: MessageCircle, text: 'Will not book or invite someone until the accessibility question is settled.' },
      { label: 'THINKS', icon: Brain, text: 'Specific information with a recent check date is more trustworthy than reassurance.' },
      { label: 'DOES', icon: Footprints, text: 'Calls staff to confirm routes, seating and temporary building changes.' },
      { label: 'FEELS', icon: Heart, text: 'Reassured by staff who know the space; frustrated when a call repeats the website.' },
    ],
  },
]

const journeyStages = [
  {
    number: '01',
    stage: 'Discover',
    visitor: 'Devon',
    icon: Search,
    question: 'What’s on now?',
    friction: 'Exhibit status and run dates live in too many places.',
    response: 'A guest-first feed, clear dates and filters for now, weekend and free.',
  },
  {
    number: '02',
    stage: 'Decide',
    visitor: 'Maya',
    icon: Sparkles,
    question: 'Will this work for us?',
    friction: 'Cost, visit length and interaction level are separated.',
    response: 'A decision-ready exhibit card with party total, duration and hands-on level.',
  },
  {
    number: '03',
    stage: 'Check access',
    visitor: 'Renata',
    icon: Accessibility,
    question: 'Can I trust the route?',
    friction: 'Generic access claims do not say what was checked or when.',
    response: 'A staff-verified checklist, check date and explicit disruption state.',
  },
  {
    number: '04',
    stage: 'Book or adapt',
    visitor: 'Everyone',
    icon: TicketCheck,
    question: 'What if the plan changes?',
    friction: 'A full slot or blocked route can strand the visitor.',
    response: 'Guest checkout plus a clear next option when the first choice is unavailable.',
  },
]

const wireframeStages = [
  { number: 'A', label: 'Discover', title: 'What’s On', detail: 'Current listings · run dates · filters · walk-in status', variant: 'discover' },
  { number: 'B', label: 'Decide', title: 'At a glance', detail: 'Group total · typical duration · activity · access', variant: 'decide' },
  { number: 'C', label: 'Book', title: 'Choose a visit', detail: 'Party size · date and time · optional email · no account', variant: 'book' },
  { number: 'D', label: 'Recover', title: 'A useful next step', detail: 'Sold out · route disruption · unverified information', variant: 'recover' },
]

const iterationCards = [
  {
    number: '01',
    label: 'DISCOVERY',
    from: 'A catalogue that assumes visitors already know what to look for.',
    to: 'A current “What’s On” feed with now, weekend and free filters.',
  },
  {
    number: '02',
    label: 'DECISION',
    from: 'Ticket details, visit length and age guidance spread across separate screens.',
    to: 'A tiered summary that brings total, duration, activity and access into view earlier.',
  },
  {
    number: '03',
    label: 'ACCESS',
    from: 'A vague accessibility sentence with no visible date or live status.',
    to: 'A specific staff-verified checklist, dated updates and an honest unverified state.',
  },
  {
    number: '04',
    label: 'RECOVERY',
    from: 'A sold-out slot or blocked route that stops the journey.',
    to: 'An alternative date, route or staff-contact option at the moment it is needed.',
  },
]

const secondarySources = [
  {
    title: 'Demographics of US Museum-Goers: 2025 Annual Survey of Museum-Goers',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/09/12/demographics-of-us-museum-goers-a-2025-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'Membership Motivations and Barriers',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/08/15/membership-motivations-and-barriers-an-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'Breaking Down Visitation by Museum Type',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/02/28/breaking-down-visitation-by-museum-type-a-2024-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'Who Goes to Museums the Most?',
    publisher: 'Wonderful Museums',
    href: 'https://www.wonderfulmuseums.com/museum/who-goes-to-museums-the-most/',
  },
  {
    title: 'Social Experiences and Museums — Part One',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/10/24/social-experiences-and-museums-part-one-a-2025-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'Social Experiences and Museums — Part Three',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/11/07/social-experiences-and-museums-part-three-a-2025-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'New research sheds light on changing visitor behaviour and demographics',
    publisher: 'Museums Association · Baker Richards / ALVA study',
    href: 'https://www.museumsassociation.org/museums-journal/news/2025/07/new-research-sheds-light-on-changing-visitor-behaviour-and-demographics/',
  },
  {
    title: 'Visitation Recovery Trends from the Pandemic',
    publisher: 'American Alliance of Museums / Wilkening Consulting',
    href: 'https://www.aam-us.org/2025/10/03/visitation-recovery-trends-from-the-pandemic-a-2025-annual-survey-of-museum-goers-data-story/',
  },
  {
    title: 'Who’s Going to Museums?',
    publisher: 'EveryLibrary · summary of the 2025 AAM survey',
    href: 'https://medium.com/everylibrary/whos-going-to-museums-829c07b98e9e',
  },
]

export function MuseumResearchBoard() {
  return (
    <div className="museum-research-board">
      <div className="museum-research-context">
        <span className="museum-small-label">RESEARCH INPUTS</span>
        <h3>Context, not a claim of causation.</h3>
        <p>Secondary research helped frame who might be underserved and when decisions happen. Persona briefs and AI-simulated conversations were used to stress-test the concept; they are hypotheses, not real participant findings.</p>
        <div className="museum-method-pills">
          <span><Search size={14} aria-hidden="true" /> Secondary research</span>
          <span><MessageCircle size={14} aria-hidden="true" /> Persona roleplay</span>
          <span><CalendarDays size={14} aria-hidden="true" /> Design hypotheses</span>
        </div>
      </div>
      <div className="museum-findings-chart" aria-label="Three separate museum audience research statistics">
        {researchFindings.map((finding) => (
          <Reveal className="museum-finding-row" key={`${finding.value}-${finding.label}`}>
            <div className="museum-finding-copy">
              <strong>{finding.value}%</strong>
              <div>
                <b>{finding.label}</b>
                <p>{finding.detail}</p>
                <small>{finding.source}</small>
              </div>
            </div>
            <div className="museum-finding-track" role="img" aria-label={`${finding.value} percent`}>
              <span style={{ width: `${finding.value}%` }} />
            </div>
          </Reveal>
        ))}
        <p className="museum-chart-note">Different surveys and populations; shown as separate findings, not a direct comparison.</p>
      </div>
    </div>
  )
}

export function MuseumPersonas() {
  return (
    <div className="museum-persona-grid">
      {personas.map((persona) => (
        <Reveal className={`museum-persona-card museum-accent-${persona.accent}`} key={persona.name}>
          <div className="museum-persona-top"><span>{persona.number} / PERSONA</span><ArrowDownRight size={18} aria-hidden="true" /></div>
          <p className="museum-persona-archetype">{persona.archetype}</p>
          <h3>{persona.name}</h3>
          <p className="museum-persona-details">{persona.details}</p>
          <div className="museum-persona-field"><span>WANTS TO</span><p>{persona.goal}</p></div>
          <div className="museum-persona-field"><span>FRICTION</span><p>{persona.friction}</p></div>
          <div className="museum-persona-need"><span>DESIGN NEED</span><p>{persona.need}</p></div>
        </Reveal>
      ))}
    </div>
  )
}

export function MuseumEmpathyMaps() {
  return (
    <div className="museum-empathy-stack">
      <p className="museum-evidence-disclaimer">SYNTHESIZED PERSONA MAPS · BASED ON PROJECT BRIEFS AND AI ROLEPLAY, NOT QUOTED PARTICIPANT DATA</p>
      {empathyMaps.map((persona) => (
        <Reveal className={`museum-empathy-card museum-accent-${persona.color}`} key={persona.name}>
          <div className="museum-empathy-person">
            <span className="museum-empathy-orbit" aria-hidden="true" />
            <span className="museum-small-label">EMPATHY MAP / {persona.name.toUpperCase()}</span>
            <h3>{persona.name}</h3>
            <p>{persona.role}</p>
          </div>
          <div className="museum-empathy-quadrants">
            {persona.map.map((quadrant) => {
              const Icon = quadrant.icon
              return (
                <article className="museum-empathy-quadrant" key={quadrant.label}>
                  <div className="museum-empathy-label"><span className="museum-empathy-icon"><Icon size={15} aria-hidden="true" /></span><span>{quadrant.label}</span></div>
                  <p>{quadrant.text}</p>
                </article>
              )
            })}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function MuseumJourneyMap() {
  return (
    <div className="museum-journey-map" aria-label="Museum visit journey from discovery to booking or recovery">
      <div className="museum-journey-axis" aria-hidden="true"><span>SCATTERED INFORMATION</span><i /><span>DECISION-READY VISIT</span></div>
      <div className="museum-journey-stages">
        {journeyStages.map((stage) => {
          const Icon = stage.icon
          return (
            <Reveal className="museum-journey-stage" key={stage.number}>
              <div className="museum-journey-stage-head"><span>{stage.number}</span><Icon size={18} aria-hidden="true" /></div>
              <p className="museum-journey-visitor">{stage.visitor} · VISITOR LENS</p>
              <h3>{stage.stage}</h3>
              <p className="museum-journey-question">“{stage.question}”</p>
              <div className="museum-journey-friction"><span>FRICTION</span><p>{stage.friction}</p></div>
              <div className="museum-journey-response"><span>DESIGN RESPONSE</span><p>{stage.response}</p></div>
            </Reveal>
          )
        })}
      </div>
      <p className="museum-journey-footnote">The map synthesizes the project’s persona scenarios; it is not a measured journey from observed sessions.</p>
    </div>
  )
}

export function MuseumWireframeFlow() {
  return (
    <div className="museum-wireframe-flow">
      {wireframeStages.map((stage, index) => (
        <div className={`museum-wireframe-step museum-wireframe-${stage.variant}`} key={stage.number}>
          <div className="museum-wireframe-screen" aria-hidden="true">
            <span className="museum-wireframe-status" />
            <span className="museum-wireframe-heading" />
            <span className="museum-wireframe-image" />
            <span className="museum-wireframe-row" />
            <span className="museum-wireframe-row short" />
            <span className="museum-wireframe-action" />
          </div>
          <div className="museum-wireframe-copy"><span>{stage.number} / {stage.label}</span><h3>{stage.title}</h3><p>{stage.detail}</p></div>
          {index < wireframeStages.length - 1 && <ArrowRight className="museum-wireframe-arrow" size={19} aria-hidden="true" />}
        </div>
      ))}
      <p className="museum-wireframe-caption">A low-fi flow map of the 13-screen prototype: discover → decide → book → recover.</p>
    </div>
  )
}

export function MuseumIterationBoard() {
  return (
    <div className="museum-iteration-board">
      {iterationCards.map((iteration) => (
        <Reveal className="museum-iteration-card" key={iteration.number}>
          <div className="museum-iteration-index"><span>{iteration.number}</span><span>{iteration.label}</span></div>
          <div className="museum-iteration-shift">
            <div><span>EARLIER FRAMING</span><p>{iteration.from}</p></div>
            <ArrowDownRight size={18} aria-hidden="true" />
            <div><span>DESIGN DIRECTION</span><p>{iteration.to}</p></div>
          </div>
        </Reveal>
      ))}
      <div className="museum-iteration-note"><span>ACCESSIBILITY FLOOR</span><p>Color is never the only state cue: labels, borders and chip shapes carry meaning. The source design also sets a 12 px minimum label size and a 16/23 px body style.</p></div>
    </div>
  )
}

export function MuseumSources() {
  return (
    <div className="museum-sources-list">
      {secondarySources.map((source, index) => (
        <a className="museum-source-link" href={source.href} key={source.href} target="_blank" rel="noreferrer">
          <span className="museum-source-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="museum-source-name"><b>{source.title}</b><small>{source.publisher}</small></span>
          <span className="museum-source-action" aria-label="Opens source in a new tab"><ArrowRight size={17} aria-hidden="true" /></span>
        </a>
      ))}
    </div>
  )
}
