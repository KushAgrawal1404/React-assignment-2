import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../HomePage.css'

// List of book categories to display
const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi']

// Main component for the home page
const HomePage = () => {
  // Get the list of books from Redux store
  const books = useSelector(state => state.books.books)
  // Filter books to get only the popular ones
  const popularBooks = books.filter(book => book.popular)

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">Welcome to the Online Library</h1>
        <div className="homepage-section">
          <h2>Categories</h2>
          <div className="categories-list">
            {categories.map(cat => (
              // Link to browse books by category
              <Link className="category-link" to={`/books/${cat}`} key={cat}>{cat}</Link>
            ))}
          </div>
        </div>
        <div className="homepage-section">
          <h2>Popular Books</h2>
          <ul className="popular-books-list">
            {popularBooks.map(book => (
              <li key={book.id}>
                {/* Link to book details */}
                <Link className="book-link" to={`/book/${book.id}`}>{book.title}</Link>
                <span className="book-author"> by {book.author}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage 