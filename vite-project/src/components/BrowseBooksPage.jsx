import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../BrowseBooksPage.css'

// Main component for browsing books
const BrowseBooksPage = () => {
  // Get the current category from the URL (if any)
  const { category } = useParams()
  // State for the search input
  const [search, setSearch] = useState('')
  // Get the list of books from Redux store
  const books = useSelector(state => state.books.books)

  // Filter books based on selected category and search input
  const filteredBooks = books.filter(book => {
    // If a category is selected and the book doesn't match, skip it
    if (category && book.category !== category) return false;

    // If there's a search term, check if it matches title or author (case-insensitive)
    if (search) {
      const searchLower = search.toLowerCase();
      const titleMatch = book.title.toLowerCase().includes(searchLower);
      const authorMatch = book.author.toLowerCase().includes(searchLower);
      return titleMatch || authorMatch;
    }

    // If no search, include the book (category already checked)
    return true;
  });

  return (
    <div className="browse-container">
      {/* Header with page title and search bar */}
      <div className="centered-header">
        <h1>Browse Books {category && `- ${category}`}</h1>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>
      {/* Book cards grid, centered on the page */}
      <div className="books-grid-wrapper">
        <div className="books-grid">
          {filteredBooks.map(book => (
            <div className="book-card" key={book.id}>
              <img
                src={book.coverImage}
                alt={book.title + ' cover'}
                className="book-card-cover"
              />
              <div className="book-card-title">{book.title}</div>
              <div className="book-card-author">by {book.author}</div>
              <div className="book-card-description" style={{ fontSize: '0.95em', color: '#444', marginBottom: '0.4em' }}>{book.description}</div>
              {/* <div className="book-card-category">{book.category}</div>
            
              <div className="book-card-footer">
                <div className="book-card-rating">Rating: {book.rating}</div>
                <Link className="details-link" to={`/book/${book.id}`}>View Details</Link>
              </div> */}
              <div className="book-card-footer">
  <div className="book-card-category">{book.category}</div>
  <div className="book-card-rating">Rating: {book.rating}</div>
  <Link className="details-link" to={`/book/${book.id}`}>View Details</Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseBooksPage