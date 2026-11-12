import Link from 'next/link'
import { ArrowLink, Eyebrow, PageFrame, SectionIntro } from './components/site'
import { Reveal } from './components/reveal'

const featured = [
  { number: '01', type: 'RESEARCH · IN PROGRESS', title: 'Digital nudging & user behaviour', desc: 'How interface elements shape cognitive effort and decision confidence.', href: '/research', color: 'card-blue', note: 'Results coming December 2026' },
  { number: '02', type: 'CONCEPT PROJECT', title: 'A museum visit, at a glance', desc: 'Designing the decision to visit around cost, time, suitability and access.', href: '/case-studies/museum-app', color: 'card-mint', note: 'Google UX Design capstone' },
  { number: '03', type: 'TEAM PROJECT · SDL LAB', title: 'Maintell predictive maintenance', desc: 'Bringing sensor readings, failure predictions and maintenance history into one place.', href: '/case-studies/predictive-maintenance', color: 'card-coral', note: 'LNMIIT · 4-person team' },
]

const interests = ['Human–Computer Interaction', 'Digital nudging & choice architecture', 'Behavioural research methods', 'Human-centered & explainable AI']

export default function HomePage() {
  return (
    <PageFrame className="home-page">
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-pixel hero-pixel-a" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-pixel hero-pixel-b" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-content">
          <Eyebrow light>FINAL-YEAR CS STUDENT · LNMIIT, JAIPUR</Eyebrow>
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1>Aryan<br /><span>Jadhav.</span></h1>
          <div className="hero-lower">
            <p className="hero-statement">I study how interface design shapes the way people <em>think and decide.</em></p>
            <p className="hero-intro">I bring together behavioural research, UX design and machine learning to build more thoughtful, human-centered systems.</p>
          </div>
          <div className="hero-actions"><Link className="button button-coral" href="/research">Explore my research <span aria-hidden="true">↘</span></Link><Link className="text-link text-link-light" href="/about">A little about me <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="hero-aside"><span className="hero-aside-line" /><span>RESEARCH<br />THAT STARTS<br />WITH PEOPLE</span><span className="hero-aside-index">01—26</span></div>
        <div className="hero-bottom-label"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="home-intro section-pad">
        <div className="home-intro-label"><Eyebrow>THE QUESTION</Eyebrow><span className="intro-stamp">HCI<br />×<br />HUMAN</span></div>
        <div className="home-intro-copy"><h2>What does an interface make us <em>feel, notice,</em> and choose?</h2><p>I&apos;m a final-year Computer Science student at LNMIIT, Jaipur. My work sits at the intersection of human-computer interaction, behavioural research and the systems we build around people.</p><ArrowLink href="/about">More about my approach</ArrowLink></div>
      </section>

      <section className="research-band">
        <div className="research-band-top"><Eyebrow light>ON MY DESK RIGHT NOW</Eyebrow><span className="status-pill"><i /> IN PROGRESS</span></div>
        <div className="research-band-body"><div><p className="research-label">UNDER THE SUPERVISION OF DR. RAJBALA SINGH</p><h2>Can a nudge change<br />the way we <em>decide?</em></h2></div><div className="research-band-note"><p>I&apos;m developing the Perceived Digital Nudging Scale and studying how nudge type, cognitive effort and impulsivity relate to decision confidence.</p><p className="research-result">306 survey responses collected <span>·</span> Results coming December 2026</p><ArrowLink href="/research" light>Follow the research</ArrowLink></div></div>
        <div className="research-band-mark" aria-hidden="true">?</div>
      </section>

      <section className="featured-work section-pad">
        <div className="work-heading"><SectionIntro index="01" kicker="SELECTED WORK" title="Questions, made tangible."><p>Research-led work across decision-making, public access and intelligent systems.</p></SectionIntro><ArrowLink href="/work">All case studies</ArrowLink></div>
        <div className="featured-grid">{featured.map((project, index) => <Reveal className="featured-card-reveal" delay={index * 0.09} key={project.number}><Link className={`featured-card ${project.color}`} href={project.href}><div className="featured-card-top"><span>{project.number}</span><span className="card-open" aria-hidden="true">↗</span></div><div className="featured-card-art" aria-hidden="true"><div className="art-lines" /><span className="art-mark">{project.number === '01' ? 'PDNS' : project.number === '02' ? 'VISIT / ACCESS' : 'SENSE → ACT'}</span><div className="art-dots"><i /><i /><i /><i /></div></div><p className="card-type">{project.type}</p><h3>{project.title}</h3><p className="card-description">{project.desc}</p><span className="card-note">{project.note}</span></Link></Reveal>)}</div>
      </section>

      <section className="interests-section section-pad"><div><Eyebrow>THE THREAD THROUGH IT ALL</Eyebrow><h2>Research interests</h2></div><div className="interest-list">{interests.map((interest, index) => <div className="interest-item" key={interest}><span>0{index + 1}</span><span>{interest}</span><span aria-hidden="true">↗</span></div>)}</div></section>

      <section className="home-credentials section-pad" id="certifications"><SectionIntro index="02" kicker="CERTIFICATIONS & RECOGNITION" title="Learning, alongside the work."><p>Formal credentials and community contributions. Certificate PDF links can be added as you share them.</p><ArrowLink href="/about#credentials">More about my background</ArrowLink></SectionIntro><div className="home-credentials-list"><article className="home-credential-row"><div className="home-credential-meta"><span className="home-credential-kind">CERTIFICATION</span><span className="home-credential-date">SEP 2026</span></div><div className="home-credential-copy"><h3>Google UX Design Professional Certificate</h3><p>Coursera · Eight-course program in user research, wireframing, prototyping and usability testing.</p><a className="home-credential-link" href="https://www.coursera.org/verify/professional-cert/K2O5TZH79NKF" target="_blank" rel="noreferrer">Verify online <span aria-hidden="true">↗</span></a></div></article><article className="home-credential-row"><div className="home-credential-meta"><span className="home-credential-kind">CERTIFICATION</span><span className="home-credential-date">APR 2025</span></div><div className="home-credential-copy"><h3>BlockBase 2025</h3><p>Finance &amp; Economics Club, IIT Guwahati · DeFi &amp; Blockchain.</p><span className="home-credential-pending">Certificate link to be added</span></div></article><article className="home-credential-row"><div className="home-credential-meta"><span className="home-credential-kind">RECOGNITION</span><span className="home-credential-date">2 EDITIONS</span></div><div className="home-credential-copy"><h3>TEDxLNMIIT</h3><p>Content Creator across two editions.</p><span className="home-credential-pending">Supporting link to be added</span></div></article></div></section>

      <section className="home-about section-pad"><div className="about-photo-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aryan-XXbSQUokWuiOReUXcxoAA91Vgc5YKv.jpeg" alt="A photo of handwritten UX research notes on a paper sheet." /><span className="photo-caption">RESEARCH NOTES / FIELDWORK</span><span className="photo-corner" aria-hidden="true">ON THE DESK</span></div><div className="home-about-copy"><Eyebrow>A BIT MORE ABOUT ME</Eyebrow><h2>Curious about the space between <em>people</em> and technology.</h2><p>I&apos;m applying to graduate programs in Human-Computer Interaction. My current research is supervised by Dr. Rajbala Singh, and I&apos;ve worked on UX research with Enteledge and product design through the Google UX certificate.</p><ArrowLink href="/about">My story, education & more</ArrowLink></div></section>

    </PageFrame>
  )
}
