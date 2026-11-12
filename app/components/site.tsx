'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Aryan Jadhav, home">
        <span className="brand-mark">AJ<span>26</span></span>
        <span className="brand-caption">HCI / RESEARCH / DESIGN</span>
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className="nav-contact" href="/#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-heading"><p className="eyebrow">OPEN TO GRADUATE STUDY</p><h2>Let&apos;s make better<br /><em>decisions</em> together.</h2></div>
        <nav className="footer-contact-list" aria-label="Contact and social links">
          <a className="footer-contact-link" href="mailto:aryanjadhav090304@gmail.com"><span className="footer-contact-kind">EMAIL</span><span className="footer-contact-value">aryanjadhav090304@gmail.com</span><span className="footer-contact-arrow" aria-hidden="true">↗</span></a>
          <a className="footer-contact-link" href="tel:+919271119999"><span className="footer-contact-kind">PHONE</span><span className="footer-contact-value">+91 9271119999</span><span className="footer-contact-arrow" aria-hidden="true">↗</span></a>
          <a className="footer-contact-link" href="/aryan-jadhav-resume.pdf" download aria-label="Download Aryan Jadhav’s résumé as a PDF"><span className="footer-contact-kind">RÉSUMÉ</span><span className="footer-contact-value">Download PDF</span><span className="footer-contact-arrow" aria-hidden="true">↓</span></a>
          <a className="footer-contact-link" href="https://github.com/ToulousseD" target="_blank" rel="noreferrer"><span className="footer-contact-kind">GITHUB</span><span className="footer-contact-value">@ToulousseD</span><span className="footer-contact-arrow" aria-hidden="true">↗</span></a>
          <a className="footer-contact-link" href="https://linkedin.com/in/aryanmjadhav/" target="_blank" rel="noreferrer"><span className="footer-contact-kind">LINKEDIN</span><span className="footer-contact-value">in/aryanmjadhav</span><span className="footer-contact-arrow" aria-hidden="true">↗</span></a>
          <a className="footer-contact-link" href="https://instagram.com/_toulousse_/" target="_blank" rel="noreferrer"><span className="footer-contact-kind">INSTAGRAM</span><span className="footer-contact-value">@_toulousse_</span><span className="footer-contact-arrow" aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <div className="footer-bottom"><span>© 2026 Aryan Jadhav</span><span className="footer-note">Built around people, not just interfaces.</span></div>
    </footer>
  )
}

export function PageFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <><SiteHeader /><main className={`page-frame ${className}`}>{children}</main><SiteFooter /></>
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-square" />{children}</p>
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`arrow-link ${light ? 'arrow-link-light' : ''}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>
}

export function SectionIntro({ index, kicker, title, children }: { index: string; kicker: string; title: string; children?: React.ReactNode }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className="section-intro" initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}><div className="section-number">{index}</div><div><Eyebrow>{kicker}</Eyebrow><h2>{title}</h2>{children && <div className="section-copy">{children}</div>}</div></motion.div>
}
