import React, { Component,useState } from "react";
import {
  Card,
  CardImg,

  CardText,
  CardBody,
  CardTitle,Modal, ModalBody,ModalHeader
} from "reactstrap";
import { Breadcrumb, BreadcrumbItem,
  Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const  DishDetail = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit= (values) => {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
  };
    if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
               <Button outline onClick={toggle}>Submit Comments</Button>
            </div>
          </div>
          <div className="row">
          <Modal isOpen={modal} toggle={toggle}>
                <ModalBody >Submit </ModalBody>
                <ModalHeader>
                <LocalForm onSubmit={(values) =>handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="raiting" md={12}>Raiting</Label>
                                <Col md={12}>
                                    <Control.select model=".raiting" name="raiting"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3.</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                    </Control.select>
                                </Col>
                            </Row>
                    <Row className="form-group">
                      
                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                             minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="contact" md={12}>Contact</Label>
                                <Col md={12}>
                                    <Control.textarea model=".contact" id="contact" name="contact"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                </ModalHeader>

              </Modal>
          </div>
        </div>
        
        
      );
    } else return <div></div>;
  
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12  m-1">
          
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

function RenderComments({ comments }) {
    if (comments != null) {
      return (
        <div className="col-12  m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
                
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            );
          })}
          </ul>
        </div>
      );
    } else return null;
  }
  export default DishDetail;
  