import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Compass, Eye, HeartHandshake, TicketCheck } from 'lucide-react'
import { Eyebrow, PageFrame, SectionIntro } from '../../components/site'
import {
  MuseumEmpathyMaps,
  MuseumIterationBoard,
  MuseumJourneyMap,
  MuseumPersonas,
  MuseumResearchBoard,
  MuseumSources,
  MuseumWireframeFlow,
} from './museum-research'
import { MuseumPrototype } from './museum-prototype'
import { MuseumQuickNav, MuseumSectionPager } from './museum-navigation'

export const metadata: Metadata = {
  title: 'Public Museum App UX Case Study — Aryan Jadhav',
  description: 'A research-led museum app case study focused on decision-ready exhibit details, transparent family pricing and verified accessibility information.',
  openGraph: {
    title: 'Public Museum App UX Case Study — Aryan Jadhav',
    description: 'From scattered exhibit details to a clearer, more accessible museum visit decision.',
    type: 'article',
  },
}

const caseSections = [
  { id: 'museum-problem', label: 'Problem & overview' },
  { id: 'museum-discovery', label: 'Problem discovery' },
  { id: 'museum-research', label: 'Research' },
  { id: 'museum-personas', label: 'Personas' },
  { id: 'museum-empathy', label: 'Empathy maps' },
  { id: 'museum-journey', label: 'Journey maps' },
  { id: 'museum-wireframes', label: 'Wireframes' },
  { id: 'museum-iterations', label: 'Iterations' },
  { id: 'museum-solution', label: 'Final solution' },
  { id: 'museum-next-steps', label: 'Next steps' },
  { id: 'museum-sources', label: 'Sources' },
]

function SectionPager({ index }: { index: number }) {
  return (
    <MuseumSectionPager
      position={String(index + 1).padStart(2, '0')}
      total={String(caseSections.length).padStart(2, '0')}
      previous={caseSections[index - 1]}
      next={caseSections[index + 1]}
    />
  )
}

export default function MuseumCaseStudyPage() {
  return (
    <PageFrame className="case-page museum-page museum-case-study">
      <section className="museum-case-hero" id="museum-problem" aria-labelledby="museum-case-title">
        <div className="museum-hero-grid" aria-hidden="true" />
        <div className="museum-hero-top">
          <Eyebrow light>CASE STUDY / 02 · PUBLIC MUSEUM APP</Eyebrow>
          <span className="museum-case-tag">CONCEPT PROJECT <i /> SOLO DESIGN</span>
        </div>
        <div className="museum-hero-layout">
          <div className="museum-hero-copy">
            <p className="museum-overline">GOOGLE UX DESIGN CERTIFICATE · UX RESEARCH + PRODUCT DESIGN</p>
            <h1 id="museum-case-title">A visit should be<br /><em>easy to say yes to.</em></h1>
            <div className="museum-problem-statement">
              <span>THE PROBLEM STATEMENT</span>
              <p>Maya is a busy working parent who needs an exhibit&rsquo;s family cost, duration and kid-suitability at a glance, because unclear pricing and vague age guidance can make her abandon a visit she wants to take.</p>
              <small>PRIMARY DESIGN CHALLENGE · PERSONA-BASED PROJECT STATEMENT</small>
            </div>
            <div className="museum-hero-overview">
              <span className="museum-small-label">PROJECT OVERVIEW</span>
              <p>Design a guest-first museum app that helps visitors decide what to see, what it will cost, and whether the visit will work for their group before they book.</p>
              <div className="museum-overview-facts">
                <div><span>ROLE</span><b>Research · UX · UI</b></div>
                <div><span>PLATFORM</span><b>iPhone prototype · 13 screens</b></div>
                <div><span>METHOD</span><b>Secondary research + persona roleplay</b></div>
                <div><span>TOOL</span><b>Figma</b></div>
              </div>
            </div>
          </div>
          <div className="museum-hero-art" aria-label="Preview of the museum app on an iPhone">
            <div className="museum-hero-art-note"><span>01 — 13</span><b>DECISION-READY<br />BY DESIGN</b></div>
            <figure className="museum-hero-device">
              <div className="museum-hero-device-screen">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2017%20-%201-zTaYxcrXaHayJOEXqwo83DAFNrEYua.png"
                  alt="Museum app What’s On screen with current exhibitions, prices and visit details."
                  width={402}
                  height={874}
                  unoptimized
                  priority
                />
                <span className="museum-hero-dynamic-island" aria-hidden="true" />
              </div>
            </figure>
            <span className="museum-hero-sticker">NO<br />ACCOUNT<br />NEEDED</span>
          </div>
        </div>
        <MuseumQuickNav sections={caseSections} />
        <SectionPager index={0} />
      </section>

      <div className="museum-case-study-content">
        <section className="section-pad museum-discovery-section" id="museum-discovery" aria-label="Problem discovery">
          <SectionIntro index="01" kicker="PROBLEM DISCOVERY" title="The decision happens before the visit." />
          <p className="museum-section-lede">A museum can have great exhibitions and still lose a visitor before they leave home. The project brief surfaced three separate questions hidden inside one simple decision: “Should we go?”</p>
          <div className="museum-discovery-grid">
            <article className="museum-discovery-card">
              <span className="museum-discovery-icon"><Compass size={21} aria-hidden="true" /></span>
              <span className="museum-small-label">DISCOVER · DEVON</span>
              <h3>What&rsquo;s actually on?</h3>
              <p>Current exhibits and end dates are spread across social posts, museum sites and third-party listings.</p>
              <b>Make “now” easy to trust.</b>
            </article>
            <article className="museum-discovery-card">
              <span className="museum-discovery-icon"><TicketCheck size={21} aria-hidden="true" /></span>
              <span className="museum-small-label">DECIDE · MAYA</span>
              <h3>Will it fit our group?</h3>
              <p>Family cost, expected duration and whether an exhibit is hands-on are hard to compare at a glance.</p>
              <b>Make the visit legible before checkout.</b>
            </article>
            <article className="museum-discovery-card">
              <span className="museum-discovery-icon"><HeartHandshake size={21} aria-hidden="true" /></span>
              <span className="museum-small-label">VERIFY · RENATA</span>
              <h3>Can I rely on the access details?</h3>
              <p>Vague or undated accessibility information can force a visitor to call before planning anything else.</p>
              <b>Show specifics, dates and disruptions.</b>
            </article>
          </div>
          <div className="museum-discovery-summary">
            <span>THE DESIGN OPPORTUNITY</span>
            <p>Bring discovery, suitability, price and verified access into the same decision path—without making an account the price of entry.</p>
            <ArrowRight size={22} aria-hidden="true" />
          </div>
          <SectionPager index={1} />
        </section>

        <section className="section-pad museum-research-section" id="museum-research" aria-label="User research and findings">
          <SectionIntro index="02" kicker="USER RESEARCH" title="Use the numbers as context. Keep the limits visible." />
          <MuseumResearchBoard />
          <div className="museum-research-takeaway">
            <span>WHAT THE EVIDENCE SUGGESTS</span>
            <p>Visitors make decisions in different time windows and need more than an exhibit description: they need a useful answer about timing, fit and access.</p>
          </div>
          <SectionPager index={2} />
        </section>

        <section className="section-pad museum-personas-section" id="museum-personas" aria-label="Museum visitor personas">
          <SectionIntro index="03" kicker="PERSONAS" title="Three visitors. Three different gates to a visit." />
          <p className="museum-section-lede">These project personas organize the problems the app is designed around. They are design tools—not a claim that every visitor in a group behaves the same way.</p>
          <MuseumPersonas />
          <SectionPager index={3} />
        </section>

        <section className="section-pad museum-empathy-section" id="museum-empathy" aria-label="Illustrated empathy maps">
          <SectionIntro index="04" kicker="EMPATHY MAPS" title="What sits behind each visitor&rsquo;s question." />
          <MuseumEmpathyMaps />
          <SectionPager index={4} />
        </section>

        <section className="section-pad museum-journey-section" id="museum-journey" aria-label="User journey map">
          <SectionIntro index="05" kicker="USER JOURNEY MAP" title="Four moments that shape the visit decision." />
          <p className="museum-section-lede">The journey map turns the persona challenges into a single design sequence: discover, decide, check access, then book—or recover when the first plan is not possible.</p>
          <MuseumJourneyMap />
          <SectionPager index={5} />
        </section>

        <section className="section-pad museum-wireframes-section" id="museum-wireframes" aria-label="Wireframe flow">
          <SectionIntro index="06" kicker="WIREFRAMES & FLOW" title="Thirteen screens, organized around four moves." />
          <p className="museum-section-lede">The low-fidelity structure keeps each screen in service of a decision. The flow also accounts for the moments when the answer is “not this time.”</p>
          <MuseumWireframeFlow />
          <SectionPager index={6} />
        </section>

        <section className="section-pad museum-iterations-section" id="museum-iterations" aria-label="Design iterations">
          <SectionIntro index="07" kicker="DESIGN ITERATIONS" title="Move the useful detail closer to the decision." />
          <p className="museum-section-lede">The design evolves from broad listings into a visit-ready summary, then makes access status and recovery actions visible instead of burying them in fine print.</p>
          <MuseumIterationBoard />
          <SectionPager index={7} />
        </section>

        <section className="section-pad museum-solution-section" id="museum-solution" aria-label="Final app solution">
          <SectionIntro index="08" kicker="FINAL SOLUTION · INTERACTIVE SCREEN STORY" title="The interface is the story." />
          <p className="museum-solution-lede">Explore the supplied app screens in a realistic iPhone frame—from the first “What&rsquo;s On” scan to tickets, access checks and dead-end recovery.</p>
          <MuseumPrototype />
          <div className="museum-solution-pillars">
            <article><span>01 / CLARITY</span><b>Know the cost, time and experience before committing.</b></article>
            <article><span>02 / TRUST</span><b>Give access details a check date and a current status.</b></article>
            <article><span>03 / MOMENTUM</span><b>Browse and book as a guest; offer a next step when plans change.</b></article>
          </div>
          <SectionPager index={8} />
        </section>

        <section className="section-pad museum-next-steps-section" id="museum-next-steps" aria-label="Measurement and next steps">
          <SectionIntro index="09" kicker="MEASUREMENT & NEXT STEPS" title="A hypothesis to test—not a result to claim." />
          <div className="museum-next-steps-grid">
            <article className="museum-success-metric">
              <span className="museum-small-label">PROPOSED SUCCESS MEASURE</span>
              <p>Share of exhibition views that convert to a completed booking.</p>
              <small>Goal statement from the project brief · no outcome data collected</small>
            </article>
            <article className="museum-validation-note">
              <span className="museum-small-label">NEXT VALIDATION PASS</span>
              <p>Test the listing, family summary and access ledger with real visitors—including families and people who rely on access information.</p>
              <small>Also reconcile the prototype&rsquo;s currency formatting between INR listing screens and the dollar-denominated checkout screens.</small>
            </article>
          </div>
          <div className="museum-research-boundary"><Eye size={18} aria-hidden="true" /><p>The source materials include secondary research, persona briefs and simulated roleplay—not observed usability sessions. No usability success or conversion lift is presented as established fact.</p></div>
          <SectionPager index={9} />
        </section>

        <section className="section-pad museum-sources-section" id="museum-sources" aria-label="Secondary research sources used">
          <SectionIntro index="10" kicker="REFERENCES · SECONDARY RESEARCH" title="Secondary research sources used." />
          <p className="museum-section-lede">The project&rsquo;s research document lists the sources below. The statistics shown earlier are attributed to the AAM 2025 demographics survey and the Baker Richards / ALVA family-visitor study.</p>
          <MuseumSources />
          <div className="museum-sources-footer"><span>END OF CASE STUDY · SOURCE LIBRARY</span></div>
          <SectionPager index={10} />
        </section>
      </div>
    </PageFrame>
  )
}
