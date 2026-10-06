import { Code2, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import './ProfileSidebar.css'

export function ProfileSidebar() {
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
