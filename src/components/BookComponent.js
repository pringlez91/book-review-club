import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
  CardBody,
  Button,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

function RenderRe({ bid, review }) {
  const itm = review.map(c => {
    if (c.bookId === bid) {
      return (
        <div>
          <CardText className="text-center">"{c.comment}"</CardText>
          <CardText></CardText>
        </div>
      );
    }
  });

  return <div>{itm}</div>;
}

function RenderBookItem({ boo, onClick, onButton, flip, current, reviews }) {
  const bo = boo.map(book => {
    return (
      <ReactCardFlip
        isFlipped={flip && current === book.id}
        flipDirection="horizontal"
      >
        <Card style={{ width: "25rem", minHeight: "50rem" }}>
          <CardImg
            style={{ width: "25rem", height: "30rem" }}
            src={book.image}
            alt={book.name}
          />
          <CardBody>
            <CardText>
              <b>Title</b>: {book.name}
            </CardText>
            <CardText>
              <b>Author</b>: {book.author}
            </CardText>
            <CardText>
              <b>Genre</b>: {book.category}
            </CardText>
            <CardText>
              <b>Synopsis</b>: {book.description}
            </CardText>
            <div className="text-center">
              <Button onClick={onButton(book.id)}>
                <span className="fa fa-undo fa-lg"></span>Click for Reviews
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card style={{ width: "25rem", minHeight: "40rem" }}>
          <CardImg
            style={{ width: "25rem", height: "30rem" }}
            src={book.image}
            alt={book.name}
          />
          <CardBody>
            <CardSubtitle>{book.designation}</CardSubtitle>
            <RenderRe bid={book.id} review={reviews} />
            <div className="text-center">
              <Button onClick={onButton(book.id)}>
                <span className="fa fa-undo fa-lg"></span>Click for Reviews
              </Button>
            </div>
          </CardBody>
        </Card>
      </ReactCardFlip>
    );
  });

  return <div className="row">{bo}</div>;
}

class Book extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      current: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    return event => {
      event.preventDefault();
      this.setState(prevState => ({
        isFlipped: !prevState.isFlipped,
        current: text
      }));
      event.preventDefault();
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Book</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Books</h3>
          </div>
        </div>
        <RenderBookItem
          reviews={this.props.reviews}
          current={this.state.current}
          flip={this.state.isFlipped}
          boo={this.props.books}
          onClick={this.props.onClick}
          onButton={this.handleClick}
        />
      </div>
    );
  }
}

export default Book;
