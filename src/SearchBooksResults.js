import React from 'react'
import Book from './Book'

const SearchBooksResults = ({ searchBooks }) =>
  <div className="search-books-results">
    <ol className="books-grid">
      {searchBooks && searchBooks.map((book) => (
        <li><Book book={book}></Book></li>
      ))}
    </ol>
  </div>
;

export default SearchBooksResults