import { Link } from 'react-router-dom'

// Component to display a 404 Not Found page
const NotFoundPage = () => (
  <div style={{ padding: '2rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go to Home</Link>
  </div>
)

export default NotFoundPage 