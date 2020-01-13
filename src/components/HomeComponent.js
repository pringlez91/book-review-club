import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
  if(item != null){
    const ite = item.map((c) => {
    return(
      <div key={c.id}  className="col-12 col-md m-1">
        <Card>
            <CardImg src={c.image} alt={c.name} />
            <CardBody>
            <CardTitle>{c.name}</CardTitle>
            {c.designation ? <CardSubtitle>{c.designation}</CardSubtitle> : null }
            <CardText>{c.description}</CardText>
            </CardBody>
        </Card>
        </div>
    )});
    return (
    <div className="row align-items-start">
      {ite}
      </div>

    )


}}

function Home(props) {
    return(
        <div className="container">


                    <RenderCard item={props.book} />



        </div>
    );
}

export default Home;
