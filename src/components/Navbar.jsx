import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">YourCompany</div> {/* TODO: Replace once branding is finalized */}

      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#services">Our Services</a>
        <a href="#how-we-work">How We Work</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="navbar-cta">
        Discuss Your Needs
      </a>
    </header>
  )
}

export default Navbar