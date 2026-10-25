import './WhoWeHelp.css'

const audiences = [
  {
    title: 'Startups',
    description:
      'Early-stage teams that need reliable support across HR, operations and growth — without building a large in-house team yet.',
  },
  {
    title: 'Small & Medium Businesses',
    description:
      'Established businesses looking to streamline operations, strengthen their brand and scale efficiently.',
  },
  {
    title: 'Growing Companies',
    description:
      'Fast-scaling organisations that need dependable specialist support to keep pace with growth.',
  },
]

function WhoWeHelp() {
  return (
    <section id="who-we-help" className="who-we-help">
      <h2 className="who-we-help-heading">Who We Help</h2>

      <div className="audience-row">
        {audiences.map((audience) => (
          <div className="audience-item" key={audience.title}>
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhoWeHelp