import { useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'
import {
  projectCategories,
  projects,
  type ProjectFilter,
} from '../data/projects'

export function PortfolioPage() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <>
      <PageHeading title="Portfolio" />
      <div className="mb-6 mt-0.5 flex flex-wrap items-center justify-between gap-4 max-md:items-start max-md:flex-col">
        <p className="m-0 text-sm text-muted">
          A selection of things I’ve worked on
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              className={`min-h-8 rounded-lg border-2 px-3 text-[0.8rem] transition-colors hover:border-[#343434] hover:text-white motion-reduce:transition-none ${filter === category ? 'border-[#393226] bg-[#1a1711] text-accent' : 'border-transparent bg-transparent text-[#aaa]'}`}
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
      <ul
        className="grid list-none grid-cols-1 gap-4 p-0 [perspective:75rem] md:grid-cols-2 md:gap-6"
        aria-live="polite"
      >
        {filteredProjects.map((project) => (
          <li
            className="group min-w-0 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.012] active:scale-[0.992] motion-reduce:transition-none"
            key={project.id}
          >
            <article className="h-full overflow-hidden rounded-2xl border-2 border-[#282828] bg-card transition-[border-color,box-shadow] duration-200 group-active:border-[#55482d] group-hover:border-[#55482d] group-hover:shadow-[0_0.5rem_1rem_var(--color-accent)] group-focus-within:border-[#55482d] group-focus-within:shadow-[0_0.5rem_1rem_var(--color-accent)] motion-reduce:transition-none">
              <div className="aspect-[1.78] overflow-hidden bg-[#191919]">
                <img
                  className="block size-full object-cover transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transition-none"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-[#eee]">
                    {project.title}
                  </h2>
                  <span className="shrink-0 text-xs text-accent">
                    {project.category}
                  </span>
                </div>
                <p className="mb-3 mt-2 text-xs leading-[1.6] text-[#999]">
                  {project.description}
                </p>
                <ul
                  className="m-0 flex list-none flex-wrap gap-2 p-0"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      className="rounded-lg border-2 border-[#303030] px-2 py-1 text-xs font-bold text-[#aaa]"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-3 flex justify-between px-2 py-1">
                    {project.liveUrl && (
                      <a
                        className="inline-flex items-center gap-1 text-xs text-[#d6c28f] no-underline hover:text-accent"
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
                        className="inline-flex items-center gap-1 text-xs text-[#d6c28f] no-underline hover:text-accent"
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
