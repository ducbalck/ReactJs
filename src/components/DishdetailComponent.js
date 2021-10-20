import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const  DishDetail = (props) => {
  
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments dish={props.dish} />
        </div>
      </div>
    );
  } else return <div></div>;


}
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
          
        <Card> 
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return null;
}

function RenderComments({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
        {dish.comments.map((comment) => {
          return (
              
            <div>
              <p>{comment.comment}</p>
              <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
export default DishDetail;
