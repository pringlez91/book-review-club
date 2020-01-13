import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem, CardText, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderBookItem ({book, onClick}) {
     return (
         <Card style={{ width: '25rem'}}>
             <Link to={`/book/${book.id}`} >
                 <CardImg style={{ width: '25rem',height:'30rem'}} src={book.image} alt={book.name} />
                 </Link>
                 <CardBody>
                     <CardText><b>Title</b>: {book.name}</CardText>
                     <CardText><b>Author</b>: {book.author}</CardText>
                     <CardText><b>Genre</b>: {book.category}</CardText>
                     <CardText><b>Synopsis</b>: {book.description}</CardText>
                 </CardBody>

         </Card>
     );
 }

const Book = (props) => {


    const bo = props.books.map((book) => {
            return (
              <div key={book.id} className="col-12 col-md-5 mt-1">
                <RenderBookItem book={book} onClick={props.onClick} />
              </div>
            );
        });
        return (
             <div className="container">
                 <div className="row">
                     <Breadcrumb>
                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                         <BreadcrumbItem active>Book</BreadcrumbItem>
                     </Breadcrumb>
                     <div className="col-12">
                         <h3>Books</h3>
                         <hr />
                     </div>
                 </div>
                 <div className="row">
                     {bo}
                 </div>
             </div>
         );

  }




export default Book;
