import { Code2, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function ProfileSidebar() {
  const emailLink = `mailto:${profile.email}`

  return (
    <aside
      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 rounded-2xl border-2 border-border bg-panel p-4 text-left md:sticky md:top-5 md:block md:rounded-[1.25rem] md:px-4 md:pb-6 md:pt-8 md:text-center lg:top-8 lg:px-6"
      aria-label="Profile"
    >
      <Link
        className="grid grid-cols-[3.5rem_minmax(0,1fr)] grid-rows-2 items-center justify-items-start gap-x-3 text-inherit no-underline md:flex md:flex-col md:items-center"
        to="/"
        aria-label={`${profile.name}, About page`}
      >
        <img
          className="row-span-2 size-14 rounded-full border-2 border-accent bg-[#111] object-cover object-[center_30%] md:mb-5 md:border-4 md:size-[11.5rem] lg:size-[12.5rem] max-[380px]:size-12"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
        />
        <span className="self-end text-base font-semibold tracking-[-0.045em] text-primary md:mt-0 md:self-auto md:text-2xl max-[380px]:text-sm">
          {profile.name}
        </span>
        <span className="mt-1 self-start text-[0.7rem] text-[#999] md:mt-2 md:self-auto md:rounded-full md:border-2 md:border-[#252525] md:bg-[#1a1a1a] md:px-4 md:py-1 md:text-base md:text-[#d0d0d0]">
          {profile.role}
        </span>
      </Link>

      <div className="my-5 hidden h-0.5 bg-accent md:block" />
      <div className="hidden gap-4 text-left md:grid">
        <a
          className="flex min-w-0 items-center gap-4 text-inherit no-underline hover:[&_.detail-value]:text-accent"
          href={emailLink}
        >
          <span className="grid size-10 flex-none place-items-center rounded-xl border-2 border-[#252525] bg-[#121212] text-accent">
            <Mail size={17} aria-hidden="true" />
          </span>
          <span className="grid min-w-0 gap-1">
            <span className="text-xs font-bold tracking-[0.09em] text-[#777] uppercase">
              Email
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#d9d9d9]">
              {profile.email}
            </span>
          </span>
        </a>
        <div className="flex min-w-0 items-center gap-4">
          <span className="grid size-10 flex-none place-items-center rounded-xl border-2 border-[#252525] bg-[#121212] text-accent">
            <MapPin size={17} aria-hidden="true" />
          </span>
          <span className="grid min-w-0 gap-1">
            <span className="text-xs font-bold tracking-[0.09em] text-[#777] uppercase">
              Location
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#d9d9d9]">
              {profile.location}
            </span>
          </span>
        </div>
      </div>

      <div
        className="col-start-2 row-start-1 flex justify-center gap-0.5 md:col-auto md:row-auto md:mt-5 md:gap-2"
        aria-label="Social links"
      >
        <a
          className="grid size-8 place-items-center rounded-xl border-2 border-transparent text-[#969696] transition-colors hover:border-[#34302a] hover:bg-[#171511] hover:text-accent motion-reduce:transition-none md:size-10"
          href={profile.social.linkedIn}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <span
            className="text-base font-extrabold tracking-[-0.08em]"
            aria-hidden="true"
          >
            in
          </span>
        </a>
        <a
          className="grid size-8 place-items-center rounded-xl border-2 border-transparent text-[#969696] transition-colors hover:border-[#34302a] hover:bg-[#171511] hover:text-accent motion-reduce:transition-none md:size-10"
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <Code2 size={18} aria-hidden="true" />
        </a>
        <a
          className="grid size-8 place-items-center rounded-xl border-2 border-transparent text-[#969696] transition-colors hover:border-[#34302a] hover:bg-[#171511] hover:text-accent motion-reduce:transition-none md:size-10"
          href={emailLink}
          aria-label="Send Daniel an email"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
