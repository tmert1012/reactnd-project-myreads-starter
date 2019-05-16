import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  state = {
    booksOnShelf: [],
    shelfBookIds: {},
  }

  constructor(props) {
    super(props)
    this.getBooksOnShelf()
  }

  getBooksOnShelf() {
    BooksAPI.getAll()
      .then((res) => {

        // create shelf to book Id map
        const shelfBookIds = {}
        res.forEach(book => {
          if (!shelfBookIds[book.shelf])
            shelfBookIds[book.shelf] = []

          shelfBookIds[book.shelf].push(book.id)
        });

        this.setState(() => ({
          booksOnShelf: res,
          shelfBookIds: shelfBookIds,
        }))

      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks handleBookShelfChanged={() => this.getBooksOnShelf()} booksOnShelf={this.state.booksOnShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks handleBookShelfChanged={() => this.getBooksOnShelf()} shelfBookIds={this.state.shelfBookIds} />
        )} />
      </div>
    )
  }
}

export default BooksApp
