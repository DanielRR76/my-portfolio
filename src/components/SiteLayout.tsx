import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { PageMetadata } from './PageMetadata'
import { ProfileSidebar } from './ProfileSidebar'

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="mx-auto flex min-h-screen w-[min(38.75rem,calc(100%-1.5rem))] flex-col gap-3 py-3 md:grid md:w-[min(56.25rem,calc(100%-2rem))] md:grid-cols-[14.5rem_minmax(0,1fr)] md:items-start md:gap-4 md:py-5 lg:w-[min(82.5rem,calc(100%-3rem))] lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-6 lg:py-8 max-[380px]:w-[calc(100%-1rem)]">
      <ProfileSidebar />
      <main className="min-w-0 w-full overflow-hidden rounded-[1.25rem] border-2 border-border bg-main-panel max-md:rounded-2xl">
        <header className="flex min-h-[4.5rem] items-stretch justify-end border-b-2 border-border bg-[#101010] px-0 max-md:min-h-14 max-md:items-center max-md:justify-between max-md:pl-4">
          <Link
            className="hidden font-bold tracking-[-0.07em] text-[#f3f3f3] no-underline max-md:inline-block"
            to="/"
          >
            DR<span className="text-accent">.</span>
          </Link>
          <nav
            className="flex items-stretch gap-1 px-6 max-md:h-14 max-md:gap-0 max-md:overflow-x-auto max-md:px-1 max-md:py-0"
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `grid min-w-[5.75rem] place-items-center px-4 text-base font-bold text-[#a9a9a9] no-underline transition-colors hover:text-white motion-reduce:transition-none md:min-w-[4.75rem] md:px-2 lg:min-w-[5.75rem] lg:px-4 max-md:min-w-0 max-md:px-3 max-md:text-[0.77rem] max-md:whitespace-nowrap ${isActive ? 'text-accent shadow-[inset_0_-0.125rem_var(--color-accent)]' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `grid min-w-[5.75rem] place-items-center px-4 text-base font-bold text-[#a9a9a9] no-underline transition-colors hover:text-white motion-reduce:transition-none md:min-w-[4.75rem] md:px-2 lg:min-w-[5.75rem] lg:px-4 max-md:min-w-0 max-md:px-3 max-md:text-[0.77rem] max-md:whitespace-nowrap ${isActive ? 'text-accent shadow-[inset_0_-0.125rem_var(--color-accent)]' : ''}`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `grid min-w-[5.75rem] place-items-center px-4 text-base font-bold text-[#a9a9a9] no-underline transition-colors hover:text-white motion-reduce:transition-none md:min-w-[4.75rem] md:px-2 lg:min-w-[5.75rem] lg:px-4 max-md:min-w-0 max-md:px-3 max-md:text-[0.77rem] max-md:whitespace-nowrap ${isActive ? 'text-accent shadow-[inset_0_-0.125rem_var(--color-accent)]' : ''}`
              }
            >
              Portfolio
            </NavLink>
          </nav>
        </header>
        <div
          className="animate-page-enter px-5 py-7 md:px-7 md:py-8 lg:px-[clamp(1.5rem,4vw,3rem)] lg:pb-12 max-[380px]:px-4 motion-reduce:animate-none"
          key={pathname}
        >
          <Outlet />
        </div>
      </main>
      <PageMetadata />
    </div>
  )
}
