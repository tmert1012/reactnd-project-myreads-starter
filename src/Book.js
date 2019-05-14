import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

  handleBookShelfChanged = (shelf) => {

    BooksAPI.update(this.props.book, shelf)
      .then((res) => {
        console.log(res)
      })
  }

  render() {

    const { book } = this.props

    const divStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle}></div>
          <BookShelfChanger handleBookShelfChanged={this.handleBookShelfChanged} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{(book.authors && book.authors.length > 0) ? book.authors[0] : ''}</div>
      </div>
    )
  }

}

Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book