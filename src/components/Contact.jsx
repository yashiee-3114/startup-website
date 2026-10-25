import { useState } from 'react'
import './Contact.css'

const serviceOptions = [
  'HR & People Solutions',
  'Digital Marketing & Growth',
  'Events & Experiential Marketing',
  'Business Operations & Outsourcing',
  'IT & Technology Solutions',
]

function Contact() {
  // One state object holding all form fields, instead of 5 separate
  // useState calls — simpler to reset and to send later as one payload.
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // Runs on every keystroke/selection in any field.
  // e.target.name tells us WHICH field changed; e.target.value is its new value.
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

 const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe8NoVjdjEFl_sC-eyfj-Ar3jR768WTrRWzg7j357DTLrUHMw/formResponse'

const GOOGLE_FORM_ENTRIES = {
  name: 'entry.479047914',
  company: 'entry.1447081864',
  email: 'entry.545488477',
  service: 'entry.550625242',
  message: 'entry.553856776',
}

async function handleSubmit(e) {
  e.preventDefault()

  // Build the payload Google Forms expects: a key-value pair per field,
  // using ITS entry IDs instead of our own field names.
  const payload = new URLSearchParams()
  Object.entries(formData).forEach(([field, value]) => {
    payload.append(GOOGLE_FORM_ENTRIES[field], value)
  })

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors', // Google blocks us from reading the response; we just fire-and-forget
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload,
    })
  } catch (err) {
    console.error('Submission error:', err)
    // no-cors means we usually won't even reach here on failure, but log just in case
  }

  setSubmitted(true)
}

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact-success">
          <h2>Thank you!</h2>
          <p>We've received your enquiry and will be in touch shortly.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtext">
        Tell us about your business and what you need — we'll take it from there.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Send Enquiry
        </button>
      </form>
    </section>
  )
}

export default Contact