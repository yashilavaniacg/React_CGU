import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Tanisha Sharma</span>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
