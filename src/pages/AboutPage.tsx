import { PageHeading } from '../components/PageHeading'
import { stack } from '../data/stack'

export function AboutPage() {
  return (
    <>
      <PageHeading title="About Me" />
      <section
        className="grid max-w-[53rem] gap-4 text-base leading-[1.8] text-secondary"
        aria-labelledby="about-intro"
      >
        <h2 className="sr-only" id="about-intro">
          Introduction
        </h2>
        <p>
          I’m a Software Developer with a Bachelor’s degree in Information
          Systems from Fluminense Federal University (UFF), passionate about
          technology, problem-solving, and building software that is both
          functional and well-structured.
        </p>
        <p>
          I currently work at Globo, where I develop interactive TV applications
          and work with technologies such as React and TypeScript. Working with
          real-world products has strengthened my ability to write maintainable
          code, think critically about technical decisions, and build
          experiences that need to work reliably across different devices and
          environments.
        </p>
        <p>
          Throughout my academic and personal projects, I’ve worked with web
          development, databases, APIs, and software architecture. One of my
          main personal projects is Get a Pet, a full-stack pet adoption
          platform that I’ve been continuously improving by applying reusable
          components, design patterns, clean architecture principles, and other
          development best practices.
        </p>
        <p>
          Beyond technology, I’m passionate about music and play the trombone in
          my church orchestra. Being part of an orchestra has taught me a lot
          about teamwork, discipline, diversity, and the importance of every
          individual contribution in creating something greater together.
        </p>
        <p>
          I’m always looking for opportunities to learn, take on new challenges,
          and become a better software engineer.
        </p>
      </section>
      <section className="mt-12 md:mt-10" aria-labelledby="stack-title">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2
            className="m-0 text-2xl font-semibold tracking-[-0.04em] text-primary"
            id="stack-title"
          >
            My Stack
          </h2>
          <span className="m-0 text-sm text-muted">
            Technologies I work with
          </span>
        </div>
        <div className="border-t-2 border-accent">
          {stack.map((group) => (
            <div
              className="grid grid-cols-1 gap-3 border-b-2 border-accent py-4 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-4 lg:grid-cols-[minmax(1.75rem,0.72fr)_minmax(0,2.3fr)] lg:py-8"
              key={group.category}
            >
              <h3 className="my-0 flex items-center text-base font-bold tracking-[0.14em] text-[#656565] uppercase 2xl:text-2xl md:text-xs lg:text-sm">
                {group.category}
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-3 p-0 md:gap-3">
                {group.technologies.map((technology) => (
                  <li
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-[#d4d4d4] md:text-base"
                    key={technology.name}
                  >
                    {technology.icon ? (
                      <img
                        className="size-8 object-contain"
                        src={technology.icon}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <span
                        className="grid size-8 place-items-center rounded-lg border-2 border-[#51452b] bg-[#211d15] text-base font-bold text-accent"
                        aria-hidden="true"
                      >
                        {technology.name.slice(0, 1)}
                      </span>
                    )}
                    <span>{technology.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
