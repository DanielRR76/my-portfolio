import { PageHeading } from '../components/PageHeading'
import { resumeSections } from '../data/resume'
import './ResumePage.css'

export function ResumePage() {
  return (
    <>
      <PageHeading title="Resume" />
      <div className="resume-sections">
        {resumeSections.map((section) => (
          <section
            className="resume-section"
            key={section.title}
            aria-labelledby={`resume-${section.title.toLowerCase()}`}
          >
            <h2 id={`resume-${section.title.toLowerCase()}`}>
              {section.title}
            </h2>
            <ol className="timeline">
              {section.entries.map((entry) => (
                <li
                  className="timeline-entry"
                  key={`${entry.title}-${entry.organization}`}
                >
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-copy">
                    <h3>{entry.title}</h3>
                    <p className="timeline-organization">
                      {entry.organization}
                    </p>
                    <p className="timeline-date">{entry.date}</p>
                    {entry.details && (
                      <ul className="timeline-details">
                        {entry.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  )
}
