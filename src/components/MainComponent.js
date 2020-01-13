import React, { Component } from 'react';
import Book from './BookComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews ,
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    const HomePage = () => {
      return(
        <Home
            book={this.props.books.filter((book) => book.featured)}
        />
      );
    }

  return (
    <div >
    <Header />
    <Switch>
           <Route path='/home' component={HomePage} />
            <Route exact path='/book' component={() => <Book books={this.props.books} />} />
           <Redirect to="/home" />
       </Switch>

      <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
