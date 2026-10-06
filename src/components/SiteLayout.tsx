import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { PageMetadata } from './PageMetadata'
import { ProfileSidebar } from './ProfileSidebar'
import './SiteLayout.css'

export function SiteLayout() {
  const { pathname } = useLocation()

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
        <div className="page-content" key={pathname}>
          <Outlet />
        </div>
      </main>
      <PageMetadata />
    </div>
  )
}
