import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  handleBookShelfChanged={this.props.handleBookShelfChanged}
                  shelf={this.props.shelf}
                  book={book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  handleBookShelfChanged: PropTypes.func.isRequired,
}

export default BookShelf