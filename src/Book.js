import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

  handleBookShelfChanged = (shelf) => {

    BooksAPI.update(this.props.book, shelf)
      .then((res) => {
        console.log('BooksAPI.update() called')
        this.props.handleBookShelfChanged()
      })
  }

  render() {

    const { book, shelf } = this.props

    console.log(`book ${book.title}, shelf ${shelf}`)

    const divStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle}></div>
          <BookShelfChanger shelf={shelf} handleBookShelfChanged={this.handleBookShelfChanged} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{(book.authors && book.authors.length > 0) ? book.authors[0] : ''}</div>
      </div>
    )
  }

}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  handleBookShelfChanged: PropTypes.func.isRequired,
}

export default Book