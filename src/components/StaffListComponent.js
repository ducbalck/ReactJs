import React, { Component} from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Input,
  Button,
  Row,
  Modal, Col, Label,ModalHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class staffForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
          isModalOpen: false
      };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    handleSubmit(values) {
      this.toggleModal();
    }
  render(){ 
    return(<div>
    <Button outline onClick={this.toggleModal}><i class="fa fa-plus-square" aria-hidden="true"></i></Button>
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.state.toggleModal}>
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group">
          <Label htmlFor="ten" md={2}>First Name</Label>
          <Col md={10}>
            <Control.text model=".ten" id="ten" name="ten"
                          
              className="form-control"
              validators={{
              required, minLength: minLength(3), maxLength: maxLength(30)
              }}
              />
            <Errors
            className="text-danger"
            model=".ten"
            show="touched"
            messages={{
             required: 'yêu cầu nhập',
             minLength: 'Độ dài tối thiểu là 2',
             maxLength: 'Độ dài tối đa là 30'
            }}/>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="ngaysinh" md={2}>Ngày Sinh</Label>
          <Col md={10}>
            <Control.text model=".ngaysinh" id="ngaysinh" name="ngaysinh"
                          
              className="form-control"
              validators={{
              required
              }}
              />
            <Errors
            className="text-danger"
            model=".ngaysinh"
            show="touched"
            messages={{
             required: 'yêu cầu nhập'
             
            }}/>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="ngayvaotongty" md={2}>Ngày vào công ty</Label>
          <Col md={10}>
            <Control.text model=".ngayvaotongty" id="ngayvaotongty" name="ngayvaotongty"
                          
              className="form-control"
              validators={{
              required
              }}
              />
            <Errors
            className="text-danger"
            model=".ngayvaocongty"
            show="touched"
            messages={{
             required: 'yêu cầu nhập'
             
            }}/>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
          <Label htmlFor="phongban" md={2}>Phòng ban</Label>
            <Control.select model=".phongban" name="phongban"
              className="form-control">
              <option>Sale</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>IT</option>
              <option>Finance</option>
            </Control.select>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="hesoluong" md={2}>Hệ số lương</Label>
          <Col md={10}>
            <Control.text model=".hesoluong" id="hesoluong" name="hesoluong"
                          
              className="form-control"
              />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="ngaynghi" md={2}>Số ngày nghỉ còn lại</Label>
          <Col md={10}>
            <Control.text model=".ngaynghi" id="ngaynghi" name="ngaynghi"
                          
              className="form-control"
              />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="ngaylamthem" md={2}>Số ngày đã làm thêm</Label>
          <Col md={10}>
            <Control.text model=".ngaylamthem" id="ngaylamthem" name="ngaylamthem"
                          
              className="form-control"
              />
          </Col>
        </Row>
  
        <Row className="form-group">
          <Col md={{size:10, offset: 2}}>
            <Button type="submit" color="primary">
            Send Feedback
            </Button>
          </Col>
        </Row>
      
      </LocalForm>
      </ModalHeader>
      </Modal>
      </div>);
    
  }}

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: props.staffs
    };
    this.search = this.search.bind(this)
  }

  search(e) {
    e.preventDefault()
    const tim = this.props.staffs.filter((item) =>
      item.name.toLowerCase().match(this.timkiem.value.toLowerCase())
    );

    this.setState({staffs: this.timkiem.value ? tim : this.props.staffs});
  }

  render() {
    const renderStaffItem = (staff) => (
      <Card>
        <Link to={`/nhanvien/${staff.id}`}>
          <CardImg width="100%" src={staff.image} alt={staff.name} />
        </Link>
        <CardTitle className=" text-center">{staff.name}</CardTitle>
      </Card>
    );

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3  ">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân viên </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-md-3  " >
            <staffForm/>
          </div>
          <div className="col-md-3 mt-1 ">
            <Form onSubmit={this.search}>
              <Input
                type="text"
                id="timkiem"
                name="timkiem"
                innerRef={(input) => (this.timkiem = input)}
              />
              <Button type="submit" value="submit" color="primary">
                Tìm
              </Button>
            </Form>
          </div>
        </div>
        <div className="row">
          {this.state.staffs.map((staff) => (
            <div className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>
              {renderStaffItem(staff)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default StaffList;
