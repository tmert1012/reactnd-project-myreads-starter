import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  state = {
    booksOnShelf: [],
  }

  getBooksOnShelf() {
    BooksAPI.getAll()
      .then((res) => this.setState(() => ({
        booksOnShelf: res,
      })));
  }

  render() {
    this.getBooksOnShelf()

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks booksOnShelf={this.state.booksOnShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks booksOnShelf={this.state.booksOnShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
