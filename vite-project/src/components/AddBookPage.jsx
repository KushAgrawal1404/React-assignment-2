import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'
import '../AddBookPage.css'

// List of book categories to choose from
const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi']

// Main component for adding a new book
const AddBookPage = () => {
  // State for the form fields
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    category: categories[0],
    rating: '',
  })
  // State for form validation errors
  const [errors, setErrors] = useState({})
  // Redux dispatch function
  const dispatch = useDispatch()
  // Navigation function from react-router
  const navigate = useNavigate()

  // Validate the form fields and return an object of errors (if any)
  const validate = () => {
    const errs = {}
    if (!form.title) errs.title = 'Title is required'
    if (!form.author) errs.author = 'Author is required'
    if (!form.description) errs.description = 'Description is required'
    if (!form.category) errs.category = 'Category is required'
    if (!form.rating || isNaN(form.rating) || form.rating < 0 || form.rating > 5) errs.rating = 'Rating must be 0-5'
    return errs
  }

  // Handle changes to form fields
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Dispatch the addBook action to Redux store
    dispatch(addBook({ ...form, rating: Number(form.rating), popular: false }))
    // Navigate to the browse books page after adding
    navigate('/books')
  }

  return (
    <div className="addbook-container">
      <div className="addbook-card">
        {/* Page title */}
        <h1 className="addbook-title">Add a New Book</h1>
        {/* Book form */}
        <form className="addbook-form" onSubmit={handleSubmit}>
          <div>
            {/* Title input */}
            <label>Title: <input name="title" value={form.title} onChange={handleChange} /></label>
            {errors.title && <span className="addbook-error"> {errors.title}</span>}
          </div>
          <div>
            {/* Author input */}
            <label>Author: <input name="author" value={form.author} onChange={handleChange} /></label>
            {errors.author && <span className="addbook-error"> {errors.author}</span>}
          </div>
          <div>
            {/* Description input */}
            <label>Description: <textarea name="description" value={form.description} onChange={handleChange} /></label>
            {errors.description && <span className="addbook-error"> {errors.description}</span>}
          </div>
          <div>
            {/* Category dropdown */}
            <label>Category: <select name="category" value={form.category} onChange={handleChange}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select></label>
            {errors.category && <span className="addbook-error"> {errors.category}</span>}
          </div>
          <div>
            {/* Rating input */}
            <label>Rating (0-5): <input name="rating" value={form.rating} onChange={handleChange} type="number" min="0" max="5" step="0.1" /></label>
            {errors.rating && <span className="addbook-error"> {errors.rating}</span>}
          </div>
          {/* Submit button */}
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBookPage 