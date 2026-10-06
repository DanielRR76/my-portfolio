import { PageHeading } from '../components/PageHeading'
import { stack } from '../data/stack'
import './AboutPage.css'

export function AboutPage() {
  return (
    <>
      <PageHeading title="About Me" />
      <section className="about-copy" aria-labelledby="about-intro">
        <h2 className="visually-hidden" id="about-intro">
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
      <section className="stack-section" aria-labelledby="stack-title">
        <div className="section-heading-row">
          <h2 id="stack-title">My Stack</h2>
          <span className="section-kicker">Technologies I work with</span>
        </div>
        <div className="stack-groups">
          {stack.map((group) => (
            <div className="stack-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="technology-list">
                {group.technologies.map((technology) => (
                  <li className="technology" key={technology.name}>
                    {technology.icon ? (
                      <img src={technology.icon} alt="" loading="lazy" />
                    ) : (
                      <span className="technology-fallback" aria-hidden="true">
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
