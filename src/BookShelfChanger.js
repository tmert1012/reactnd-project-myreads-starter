import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {

  selected() {
    return (this.props.shelf) ? this.props.shelf : 'none'
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.selected()} onChange={(event) => this.props.handleBookShelfChanged(event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

BookShelfChanger.propTypes = {
  handleBookShelfChanged: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
}

export default BookShelfChanger