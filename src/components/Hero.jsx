
import './Hero.css'

const services = [
  {
    icon: 'users',
    title: 'HR & People',
    description: 'Build stronger teams',
  },
  {
    icon: 'megaphone',
    title: 'Marketing',
    description: 'Drive consistent growth',
  },
//   {
//     icon: 'calendar',
//     title: 'Events',
//     description: 'Create meaningful experiences',
//   },
  {
    icon: 'briefcase-business',
    title: 'Operations',
    description: 'Keep business running smoothly',
  },
  {
    icon: 'monitor',
    title: 'Technology',
    description: 'Enable scalable solutions',
  },
]

function ServiceIcon({ name }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 11 18-5v12L3 13z" />
        <path d="M11 15.2 13 21H8l-2-6.5M3 11v2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    'briefcase-business': (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M12 12v9" />
      </>
    ),
    monitor: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  }

  return <svg {...common}>{paths[name]}</svg>
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>ONE PARTNER. FIVE CAPABILITIES.</span>
        </div>

        <h1 className="hero-title">
          One Partner.
          <br />
          Multiple Business
          <br />
          Solutions.
        </h1>

        <p className="hero-subtitle">
          We help startups, small and medium businesses, and growing
          companies manage people, marketing, events, operations and
          technology through one accountable partner.
        </p>

        <a href="#contact" className="hero-cta">
          Discuss Your Needs
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="hero-services" aria-label="Our five capabilities">
        {services.map((service) => (
          <div className="hero-service" key={service.title}>
            <div className="hero-service-icon">
              <ServiceIcon name={service.icon} />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
