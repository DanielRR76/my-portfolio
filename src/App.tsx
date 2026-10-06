import { useEffect, useState } from 'react'
import { ArrowUpRight, Code2, Mail, MapPin } from 'lucide-react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { profile } from './data/profile'
import {
  projectCategories,
  projects,
  type ProjectFilter,
} from './data/projects'
import { resumeSections } from './data/resume'
import { stack } from './data/stack'
import './App.css'

const pageMeta = {
  '/': {
    title: 'About | Daniel Rodrigues — Software Developer',
    description:
      'Meet Daniel Rodrigues, a software developer based in Rio de Janeiro, Brazil, and explore his technology stack.',
  },
  '/resume': {
    title: 'Resume | Daniel Rodrigues — Software Developer',
    description:
      'Explore the experience, education, and certificates of Daniel Rodrigues.',
  },
  '/portfolio': {
    title: 'Portfolio | Daniel Rodrigues — Software Developer',
    description:
      'Browse selected web development, application, and UI/UX projects by Daniel Rodrigues.',
  },
}

function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pageMeta[pathname as keyof typeof pageMeta] ?? pageMeta['/']
    document.title = meta.title
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    description?.setAttribute('content', meta.description)
    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    )
    ogTitle?.setAttribute('content', meta.title)
    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    ogDescription?.setAttribute('content', meta.description)
  }, [pathname])
  return null
}

function ProfileSidebar() {
  const emailLink = `mailto:${profile.email}`
  return (
    <aside className="profile-panel" aria-label="Profile">
      <Link
        className="profile-identity"
        to="/"
        aria-label={`${profile.name}, About page`}
      >
        <img
          className="profile-photo"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
        />
        <span className="profile-name">{profile.name}</span>
        <span className="profile-role">{profile.role}</span>
      </Link>

      <div className="profile-divider" />
      <div className="profile-details">
        <a className="profile-detail" href={emailLink}>
          <span className="detail-icon">
            <Mail size={17} aria-hidden="true" />
          </span>
          <span className="detail-copy">
            <span className="detail-label">Email</span>
            <span className="detail-value">{profile.email}</span>
          </span>
        </a>
        <div className="profile-detail">
          <span className="detail-icon">
            <MapPin size={17} aria-hidden="true" />
          </span>
          <span className="detail-copy">
            <span className="detail-label">Location</span>
            <span className="detail-value">{profile.location}</span>
          </span>
        </div>
      </div>

      <div className="social-links" aria-label="Social links">
        <a
          href={profile.social.linkedIn}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <span className="linkedin-mark" aria-hidden="true">
            in
          </span>
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <Code2 size={18} aria-hidden="true" />
        </a>
        <a href={emailLink} aria-label="Send Daniel an email">
          <Mail size={18} aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}

function SiteLayout() {
  return (
    <div className="site-shell">
      <ProfileSidebar />
      <main className="main-panel">
        <header className="topbar">
          <Link className="mobile-brand" to="/">
            DR<span>.</span>
          </Link>
          <nav className="primary-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              About
            </NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </nav>
        </header>
        <div className="page-content" key={useLocation().pathname}>
          <Outlet />
        </div>
      </main>
      <PageMetadata />
    </div>
  )
}

function PageHeading({ title }: { title: string }) {
  return (
    <div className="page-heading">
      <h1>{title}</h1>
      <span className="heading-mark" />
    </div>
  )
}

function AboutPage() {
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

function ResumePage() {
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

function PortfolioPage() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <>
      <PageHeading title="Portfolio" />
      <div className="portfolio-toolbar">
        <p className="section-kicker">A selection of things I’ve worked on</p>
        <div className="filter-list" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              className={
                filter === category
                  ? 'filter-button is-active'
                  : 'filter-button'
              }
              type="button"
              aria-pressed={filter === category}
              key={category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <ul className="project-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <li className="project-card" key={project.id}>
            <article>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="project-copy">
                <div className="project-heading">
                  <h2>{project.title}</h2>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <ul
                  className="project-technologies"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live project{' '}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code <Code2 size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
