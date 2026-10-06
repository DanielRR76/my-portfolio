import { useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import {
  projectCategories,
  projects,
  type ProjectFilter,
} from '../data/projects'
import './PortfolioPage.css'

export function PortfolioPage() {
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
