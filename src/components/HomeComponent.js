import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FadeTransform } from 'react-animation-components';

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
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
          <Card>
            <CardImg src={c.image} alt={c.name} />
            <CardBody>
              <CardSubtitle>{c.designation}</CardSubtitle>
              <RenderRe bid={c.id} review={review} />
            </CardBody>
          </Card>
          </FadeTransform>
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
