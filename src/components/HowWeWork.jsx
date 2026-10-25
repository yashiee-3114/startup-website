import './HowWeWork.css'

const steps = [
  {
    number: '01',
    title: 'Understand Needs',
    description:
      'We start by learning your business, challenges and goals in detail before proposing anything.',
  },
  {
    number: '02',
    title: 'Plan the Solution',
    description:
      'We design a tailored plan across the relevant service divisions, matched to your priorities and budget.',
  },
  {
    number: '03',
    title: 'Deliver the Work',
    description:
      'Our vetted specialists execute the plan, keeping you informed at every stage.',
  },
  {
    number: '04',
    title: 'Report & Improve',
    description:
      'We track outcomes, report transparently, and refine the approach as your business grows.',
  },
]

function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work">
      <h2 className="how-we-work-heading">How We Work</h2>

      <div className="steps-row">
        {steps.map((step, index) => (
          <div className="step-item" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowWeWork