import React from 'react'
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
          <BookShelf title="Currently Reading"/>
          <BookShelf title="Want to Read"/>
          <BookShelf title="Read"/>
        </div>
      </div>
      <OpenSearch />
    </div>
    )
  }

}

export default ListBooks