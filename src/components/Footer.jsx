import './Footer.css'

// TODO: Replace all placeholder values once details are finalized
const COMPANY_NAME = 'YourCompany'
const CONTACT_EMAIL = 'hello@yourcompany.com'
const CONTACT_PHONE = '+91 00000 00000'
const CONTACT_ADDRESS = 'Patna, Bihar, India'

const serviceLinks = [
  'HR & People Solutions',
  'Digital Marketing & Growth',
//   'Events & Experiential Marketing',
  'Business Operations & Outsourcing',
  'IT & Technology Solutions',
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3 className="footer-logo">{COMPANY_NAME}</h3>
          <p className="footer-tagline">
            One Partner. Multiple Business Solutions.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>{CONTACT_EMAIL}</li>
            <li>{CONTACT_PHONE}</li>
            <li>{CONTACT_ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {COMPANY_NAME}. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer