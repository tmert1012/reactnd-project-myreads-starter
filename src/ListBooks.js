import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

class ListBooks extends React.Component {

  render() {

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelf='currentlyReading'
            books={this.props.booksOnShelf.filter((book) => book.shelf === 'currentlyReading')}
            title="Currently Reading"
            handleBookShelfChanged={this.props.handleBookShelfChanged}
          />
          <BookShelf
            shelf='wantToRead'
            books={this.props.booksOnShelf.filter((book) => book.shelf === 'wantToRead')}
            title="Want to Read"
            handleBookShelfChanged={this.props.handleBookShelfChanged}
          />
          <BookShelf
            shelf='read'
            books={this.props.booksOnShelf.filter((book) => book.shelf === 'read')}
            title="Read"
            handleBookShelfChanged={this.props.handleBookShelfChanged}
          />
        </div>
      </div>
      <OpenSearch />
    </div>
    )
  }

}

ListBooks.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  handleBookShelfChanged: PropTypes.func.isRequired,
}

export default ListBooks