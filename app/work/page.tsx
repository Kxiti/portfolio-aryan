import Link from 'next/link'
import { ArrowLink, Eyebrow, PageFrame, SectionIntro } from '../components/site'

const cases = [
  { num: '01', label: 'PENDING APPROVAL · UX RESEARCH', title: 'Async communication for BIM teams', text: 'India-based BIM teams often wait a full working day for clarification from overseas clients. I interviewed five modelers and prototyped a redesigned handoff aimed at getting a clear, complete answer in one cycle.', tags: ['Enteledge', '5 interviews', 'Figma prototype'], href: '#enteledge', color: 'work-pending' },
  { num: '02', label: 'CONCEPT PROJECT · GOOGLE UX DESIGN CERTIFICATE', title: 'The decision to visit, at a glance', text: 'A mobile museum app centered on the questions that decide a family visit: total cost, time, suitability and verified access.', tags: ['Solo project', '13 screens', 'Figma'], href: '/case-studies/museum-app', color: 'work-museum' },
  { num: '03', label: 'TEAM PROJECT · SDL LAB, LNMIIT', title: 'Maintell predictive maintenance', text: 'A shared system for machine sensor readings, failure predictions and maintenance history—designed for operators, maintenance staff and managers.', tags: ['4-person team', 'Next.js + XGBoost', 'Figma'], href: '/case-studies/predictive-maintenance', color: 'work-maintell' },
]

export default function WorkPage() {
  return <PageFrame className="work-page">
    <section className="page-intro section-pad"><Eyebrow>SELECTED CASE STUDIES</Eyebrow><h1>Research leads.<br /><em>Design follows.</em></h1><p>Three projects exploring how people make decisions, navigate public spaces and work with intelligent systems.</p></section>
    <section className="work-list section-pad"><SectionIntro index="01" kicker="CASE STUDIES" title="Questions, made tangible." />{cases.map((item) => <article id={item.num === '01' ? 'enteledge' : undefined} className={`work-row ${item.color}`} key={item.num}><div className="work-row-num">{item.num}</div><div className="work-row-content"><p className="card-type">{item.label}</p><h2>{item.title}</h2><p>{item.text}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.num === '01' ? <span className="pending-note">Detailed case study pending company approval. No screens are shown.</span> : <ArrowLink href={item.href}>{item.num === '02' ? 'Read the concept case study' : 'Read the team case study'}</ArrowLink>}</div><div className="work-row-art" aria-hidden="true"><span>{item.num === '01' ? 'ASK' : item.num === '02' ? 'VISIT' : 'MAINTAIN'}</span><i /><i /><i /></div></article>)}</section>
    <section className="work-note section-pad"><Eyebrow>HOW I WORK</Eyebrow><p>Start with the real decision. Make assumptions visible. Treat evidence—and its limits—with care.</p><Link className="text-link" href="/about">More about my approach <span aria-hidden="true">↗</span></Link></section>
  </PageFrame>
}
