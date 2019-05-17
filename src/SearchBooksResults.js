import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooksResults extends React.Component {

  getShelf(book) {
    let returnShelf = 'none'

    Object.keys(this.props.shelfBookIds).forEach(shelf => {
      if (this.props.shelfBookIds[shelf].includes(book.id))
        returnShelf = shelf
    });

    return returnShelf
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchBooks && this.props.searchBooks.map((book) => (
            <li key={book.id}>
              <Book
                shelf={this.getShelf(book)}
                book={book}
                handleBookShelfChanged={this.props.handleBookShelfChanged}
              />
            </li>
          ))}
        </ol>
      </div>
    )
  }

}

SearchBooksResults.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  shelfBookIds: PropTypes.object.isRequired,
  handleBookShelfChanged: PropTypes.func.isRequired,
}

export default SearchBooksResults