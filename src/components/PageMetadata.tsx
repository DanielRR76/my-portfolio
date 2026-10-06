import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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

export function PageMetadata() {
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
