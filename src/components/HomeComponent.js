import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

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

function RenderCard({ review, book }) {
  if (book != null) {
    const ite = book.map(c => {
      return (
        <div key={c.id} className="col-12 col-md m-1">
          <Card>
            <CardImg src={c.image} alt={c.name} />
            <CardBody>
              <CardSubtitle>{c.designation}</CardSubtitle>
              <RenderRe bid={c.id} review={review} />
            </CardBody>
          </Card>
        </div>
      );
    });
    return <div className="row align-items-start">{ite}</div>;
  }
}

function Home(props) {
  return (
    <div className="container">
      <RenderCard book={props.book} review={props.reviews} />
    </div>
  );
}

export default Home;
