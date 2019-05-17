import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBooksResults from './SearchBooksResults'
import { Debounce } from 'react-throttle';

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
         // set returned books
        this.setState(() => ({
          searchBooks: searchBooks.error ? [] : searchBooks.filter(book => book.imageLinks && book.imageLinks.smallThumbnail),
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
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.handleOnChange(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <SearchBooksResults
          handleBookShelfChanged={this.props.handleBookShelfChanged}
          shelfBookIds={this.props.shelfBookIds}
          searchBooks={this.state.searchBooks}
        />
      </div>
    )
  }

}

SearchBooks.propTypes = {
  shelfBookIds: PropTypes.object.isRequired,
  handleBookShelfChanged: PropTypes.func.isRequired,
}

export default SearchBooks