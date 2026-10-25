import './WhyChooseUs.css'

const points = [
  {
    title: 'One Accountable Partner',
    description:
      'A single point of contact across every service division — no juggling multiple vendors or chasing different teams for updates.',
  },
  {
    title: 'Vetted Specialists',
    description:
      'Every solution is delivered by carefully selected specialist partners, matched to your specific need rather than a generic one-size-fits-all team.',
  },
  {
    title: 'Clear Reporting',
    description:
      'Transparent, regular reporting on progress and outcomes — so you always know exactly where things stand.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We focus on sustained collaboration and growth, not one-off transactions — built to scale with you as your business evolves.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <h2 className="why-us-heading">Why Choose Us</h2>

      <div className="why-us-grid">
        {points.map((point) => (
          <div className="why-us-item" key={point.title}>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs