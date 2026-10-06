import { PageHeading } from '../components/PageHeading'
import { resumeSections } from '../data/resume'

export function ResumePage() {
  return (
    <>
      <PageHeading title="Resume" />
      <div className="grid gap-8">
        {resumeSections.map((section) => (
          <section
            key={section.title}
            aria-labelledby={`resume-${section.title.toLowerCase()}`}
          >
            <h2
              className="mb-5 mt-0 text-2xl font-bold tracking-[-0.03em] text-primary"
              id={`resume-${section.title.toLowerCase()}`}
            >
              {section.title}
            </h2>
            <ol className="ml-3 grid list-none gap-0 border-l-2 border-[#333] py-0 pl-7">
              {section.entries.map((entry) => (
                <li
                  className="relative pb-6 last:pb-0"
                  key={`${entry.title}-${entry.organization}`}
                >
                  <span
                    className="absolute -left-[2.188rem] top-1 size-[0.85rem] rounded-full border-4 border-[#332c1e] bg-accent shadow-[0_0_0.25rem_#171717]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="mb-1 mt-0 text-xl font-semibold text-[#efefef]">
                      {entry.title}
                    </h3>
                    <p className="m-0 text-base leading-[1.7] text-[#aaa]">
                      {entry.organization}
                    </p>
                    <p className="m-0 text-base leading-[1.7] text-accent">
                      {entry.date}
                    </p>
                    {entry.details && (
                      <ul className="mt-2 grid list-none gap-1 pl-4 text-base leading-[1.6] text-[#9f9f9f]">
                        {entry.details.map((detail) => (
                          <li
                            className="relative before:absolute before:left-[-0.9rem] before:top-[0.67em] before:size-[0.45rem] before:rounded-full before:bg-accent before:content-['']"
                            key={detail}
                          >
                            {detail}
                          </li>
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
