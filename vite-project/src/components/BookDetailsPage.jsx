import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import '../BookDetailsPage.css'

// Main component for displaying details of a single book
const BookDetailsPage = () => {
  // Get the book ID from the URL
  const { id } = useParams()
  // Find the book in the Redux store by its ID
  const book = useSelector(state => state.books.books.find(b => b.id === id))

  // If the book is not found, show a message and a link back
  if (!book) return (
    <div className="book-details-container">
      <div className="book-details-card">
        <h2>Book not found</h2>
        <Link to="/books">Back to Browse</Link>
      </div>
    </div>
  )

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img
          src={book.coverImage}
          alt={book.title + ' cover'}
          className="book-cover"
        />
        <div className="book-title">{book.title}</div>
        <div className="book-author">by {book.author}</div>
        <div className="book-description">{book.description}</div>
        <div className="book-category">{book.category}</div>
        <div className="book-rating">Rating: {book.rating}</div>
        <Link className="back-link" to="/books">Back to Browse</Link>
      </div>
    </div>
  )
}

export default BookDetailsPage