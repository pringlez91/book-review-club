import React, { Component } from 'react';
import Book from './BookComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Join from './JoinComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews ,
  }
}

class Main extends Component {

  render() {

    const HomePage = () => {
      return(
        <Home
            book={this.props.books.filter((book) => book.featured)}
            reviews={this.props.reviews}
        />
      );
    }

  return (
    <div >
    <Header />
    <Switch>
           <Route path='/home' component={HomePage} />
            <Route exact path='/book' component={() => <Book books={this.props.books} reviews={this.props.reviews} />} />
            <Route exact path='/join' component={() => <Join books={this.props.books} reviews={this.props.reviews}/>} />

           <Redirect to="/home" />
       </Switch>

      <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(Main));
