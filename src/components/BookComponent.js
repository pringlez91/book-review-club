import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { Control, LocalForm, Errors } from "react-redux-form";

function RenderRe({ bid, review }) {
  const itm = review.map(c => {
    if (c.bookId === bid) {
      return (
        <div>
          <CardText className="text-center">"{c.review}"</CardText>
          <CardText></CardText>
        </div>
      );
    }
  });

  return <div>{itm}</div>;
}

function RenderBookItem({
  boo,
  onClick,
  onButton,
  flip,
  current,
  reviews,
  onModale
}) {
  const bo = boo.map(book => {
    return (
      <ReactCardFlip
        isFlipped={flip && current === book.id}
        flipDirection="horizontal"
      >
        <div key={book.id} className="col-12 col-md m-1">
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
        </div>
        <div key={book.id} className="col-12 col-md m-1">
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
                  <span className="fa fa-undo fa-lg"></span>Click for book
                  details
                </Button>
                <Button onClick={e => onModale(e, book.id)}>
                  <i className="fa fa-pen fa-lg"></i> Add Review
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </ReactCardFlip>
    );
  });

  return <div className="row">{bo}</div>;
}

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class Book extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      current: false,
      isModalOpen: false,
      modalID: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e, id) {
    console.log(id);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      modalID: id
    });
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
  handleSubmit(values) {
    this.toggleModal();
    this.props.addReview(
      this.state.modalID,
      values.rating,
      values.author,
      values.review
    );
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
          onModale={this.toggleModal}
        />
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submitt Review</ModalHeader>
          <ModalBody>
            <div className="col-12 col-md-12">
              <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author">Name</Label>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="review">Review</Label>
                  <Control.textarea
                    model=".review"
                    id="review"
                    name="review"
                    rows="12"
                    className="form-control"
                  />
                </Row>
                <Row className="form-group">
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Book;
