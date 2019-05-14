import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends React.Component {
  state = {
    searchBooks: [],
  }

  handleOnChange = (query) => {
    // no query, just clear out searchBooks
    if (!query) {
      this.setState(() => ({
        searchBooks: [],
      }))
      return;
    }

    // search API for books matching query string
    BooksAPI.search(query)
      .then((searchBooks) => {
        // api error?
        if (searchBooks.error)
          console.log(`BooksAPI.search() returned an error: ${searchBooks.error}, unable to load books.`)

        // set returned books
        this.setState(() => ({
          searchBooks: searchBooks.error ? [] : searchBooks,
        }))
      })
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handleOnChange(event.target.value)}
            />
          </div>
        </div>
        <SearchBooksResults searchBooks={this.state.searchBooks}/>
      </div>
    )
  }

}

export default SearchBooks