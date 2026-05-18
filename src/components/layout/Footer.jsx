import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

const SOCIALS = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/services', label: 'Services' },
  { to: '/projets', label: 'Projets' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/blog', label: 'Blog' },
  { to: '/devis', label: 'Calculateur de devis' },
  { to: '/contact', label: 'Contact' },
]

const SERVICES = [
  { label: 'Formations' },
  { label: 'Installation Domestique' },
  { label: 'Robotique' },
  { label: 'Étude de Projets' },
  { label: 'Maintenance' },
  { label: 'Dépannage' },
]

const colHead = { color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', display: 'block' }
const linkStyle = { color: 'rgba(255,255,255,0.52)', fontSize: '13.5px', textDecoration: 'none', display: 'block', marginBottom: '12px', transition: 'color 0.15s' }

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: '#080808' }}>
      {/* Dark industrial photo */}
      <img
        src="/images/hero-solar-team.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.15) saturate(0.3)', zIndex: 0 }}
        loading="lazy"
      />

      {/* Gradient overlay — strong left, fades right */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(4,4,4,0.97) 0%, rgba(4,4,4,0.88) 50%, rgba(4,4,4,0.75) 100%)',
      }} />

      {/* Red bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', zIndex: 2,
        background: 'linear-gradient(90deg, #8B1A1A 0%, rgba(139,26,26,0.35) 60%, transparent 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3 }} className="container-custom py-14 lg:py-16">

        {/* Top: brand + 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '16px', textDecoration: 'none' }}>
              <img
                src="/images/uts-logo.png"
                alt="Ultra Tech Solutions"
                style={{ height: '88px', width: 'auto', filter: 'brightness(0) invert(1)', maxWidth: '280px' }}
              />
            </Link>

            <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '13.5px', lineHeight: 1.7, maxWidth: '260px', marginBottom: '20px' }}>
              L'excellence technologique au service du développement de Goma et de la RDC.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{
                    width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#8B1A1A'; e.currentTarget.style.borderColor = 'rgba(139,26,26,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span style={colHead}>Navigation</span>
            {NAV.map((l) => (
              <Link key={l.to} to={l.to} style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <span style={colHead}>Nos Services</span>
            {SERVICES.map(({ label }) => (
              <Link key={label} to="/services" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span style={colHead}>Contact</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <MapPin size={13} style={{ color: '#8B1A1A', marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.52)', fontSize: '13px', lineHeight: 1.55 }}>
                  {siteConfig.address},<br />{siteConfig.city}
                </span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <Phone size={13} style={{ color: '#8B1A1A', marginTop: 2, flexShrink: 0 }} />
                <div>
                  {siteConfig.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`}
                      style={{ ...linkStyle, marginBottom: 4 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
                    >{p}</a>
                  ))}
                </div>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <Mail size={13} style={{ color: '#8B1A1A', marginTop: 2, flexShrink: 0 }} />
                <a href={`mailto:${siteConfig.email}`}
                  style={{ ...linkStyle, marginBottom: 0, wordBreak: 'break-all' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
                >{siteConfig.email}</a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Clock size={13} style={{ color: '#8B1A1A', marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.52)', fontSize: '13px' }}>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', paddingBottom: '6px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '10px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em' }}>
            © {new Date().getFullYear()} ULTRA TECH SOLUTIONS · TOUS DROITS RÉSERVÉS
          </p>
          <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '9px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
            1.6592°S 29.2208°E · GOMA, RDC
          </p>
        </div>
      </div>
    </footer>
  )
}
