import { Users, Megaphone, PartyPopper, Briefcase, Monitor } from 'lucide-react'
import './Services.css'

// Data-driven: one object per service instead of 5 hand-written blocks.
// To add/edit/remove a service, you only touch this array — the JSX below
// stays the same and re-renders automatically.
const services = [
  {
    icon: Users,
    title: 'HR & People Solutions',
    description:
      'Recruitment, onboarding, employee documentation, HR outsourcing, policies and performance management.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Growth',
    description:
      'Branding, social media, content, SEO, paid campaigns, lead generation and reporting.',
  },
//   {
//     icon: PartyPopper,
//     title: 'Events & Experiential Marketing',
//     description:
//       'Corporate events, exhibitions, brand activations, event staffing and vendor coordination.',
//   },
  {
    icon: Briefcase,
    title: 'Business Operations & Outsourcing',
    description:
      'Back-office support, vendor management, SOPs, administrative work, customer support and reporting.',
  },
  {
    icon: Monitor,
    title: 'IT & Technology Solutions',
    description:
      'Website development, CRM implementation, dashboards, software support and managed IT.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div className="service-card" key={service.title}>
              <Icon className="service-icon" size={32} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more →
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services