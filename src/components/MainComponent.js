import React, { Component } from "react";
import Book from "./BookComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Join from "./JoinComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addReview } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    books: state.books,
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  addReview: (bookId, rating, author, review) =>
    dispatch(addReview(bookId, rating, author, review))
});

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          book={this.props.books.filter(book => book.featured)}
          reviews={this.props.reviews}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/book"
            component={() => (
              <Book
                books={this.props.books}
                reviews={this.props.reviews}
                addReview={this.props.addReview}
              />
            )}
          />
          <Route exact path="/join" component={() => <Join />} />

          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
