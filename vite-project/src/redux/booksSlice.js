import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [
    {
      id: 'id_1',
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'A science fiction novel about politics, religion, and ecology on the desert planet Arrakis.',
      category: 'Sci-Fi',
      rating: 4.8,
      popular: true,
      coverImage: "https://m.media-amazon.com/images/I/71oO1E-XPuL.jpg",
    },
    {
      id: 'id_2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racial injustice in the Deep South.',
      category: 'Fiction',
      rating: 4.9,
      popular: true,
      coverImage: "https://m.media-amazon.com/images/I/71smIoGNeiL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 'id_3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind.',
      category: 'Non-Fiction',
      rating: 4.7,
      popular: true,
      coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    },
    {
      id: 'id_4',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'A fantasy novel about the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.',
      category: 'Fiction',
      rating: 4.8,
      popular: false,
      coverImage: "https://m.media-amazon.com/images/I/71jD4jMityL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 'id_5',
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
      category: 'Fiction',
      rating: 4.6,
      popular: false,
      coverImage: "https://m.media-amazon.com/images/I/71wANojhEKL.jpg",
    },
    {
      id: 'id_6',
      title: 'Foundation',
      author: 'Isaac Asimov',
      description: 'A science fiction series about the fall and rise of galactic empires.',
      category: 'Sci-Fi',
      rating: 4.5,
      popular: false,
      coverImage: "https://m.media-amazon.com/images/I/81LT+V9G4IL._UF1000,1000_QL80_.jpg",
    },
  ],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Generate a new id in the format id_N
      const newId = `id_${state.books.length + 1}`
      state.books.push({ id: newId, ...action.payload })
    },
  },
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer 