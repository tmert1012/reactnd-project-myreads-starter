import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchBooks: [],
  }

  handleOnChange = (query) => {
    //this.setState(() => ({
    //  query: query,
    //}))

    BooksAPI.search(query)
      .then((searchBooks) => {
        this.setState(() => ({
          searchBooks: searchBooks,
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
              //value={this.state.query}
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