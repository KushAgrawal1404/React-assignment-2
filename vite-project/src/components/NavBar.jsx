import { Link } from 'react-router-dom'
import '../NavBar.css'

// Navigation bar component for the app
const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Browse Books</Link></li>
      <li><Link to="/add-book">Add Book</Link></li>
    </ul>
  </nav>
)

export default NavBar 