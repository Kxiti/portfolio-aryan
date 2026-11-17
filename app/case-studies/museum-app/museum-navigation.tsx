import Link from 'next/link'

type SectionLink = {
  id: string
  label: string
}

export function MuseumQuickNav({ sections }: { sections: SectionLink[] }) {
  return (
    <nav className="museum-quick-nav" aria-label="Jump to a case study section">
      <span>EXPLORE THE CASE</span>
      <div>
        {sections.map((section) => (
          <Link key={section.id} href={`#${section.id}`}>{section.label}<span aria-hidden="true">↘</span></Link>
        ))}
      </div>
    </nav>
  )
}

export function MuseumSectionPager({
  position,
  total,
  previous,
  next,
}: {
  position: string
  total: string
  previous?: SectionLink
  next?: SectionLink
}) {
  return (
    <nav className="museum-section-pager" aria-label="Previous and next case study sections">
      {previous ? (
        <Link className="museum-pager-link museum-pager-previous" href={`#${previous.id}`}>
          <span>PREVIOUS SECTION</span>
          <b>{previous.label}</b>
        </Link>
      ) : (
        <span className="museum-pager-start"><span>START HERE</span><b>Problem & overview</b></span>
      )}
      <span className="museum-pager-count">{position}<i>/</i>{total}</span>
      {next ? (
        <Link className="museum-pager-link museum-pager-next" href={`#${next.id}`}>
          <span>NEXT SECTION</span>
          <b>{next.label}<i aria-hidden="true">→</i></b>
        </Link>
      ) : (
        <Link className="museum-pager-link museum-pager-next" href="#museum-problem">
          <span>BACK TO TOP</span>
          <b>Restart the story<i aria-hidden="true">↑</i></b>
        </Link>
      )}
    </nav>
  )
}
