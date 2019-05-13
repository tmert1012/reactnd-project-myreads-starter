import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {

  render() {
    console.log(this.props.book)

    const { book } = this.props

    const divStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle}></div>
          <BookShelfChanger></BookShelfChanger>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    )
  }

}

export default Book