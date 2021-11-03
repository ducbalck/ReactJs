import React, { Component } from "react";
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
  Modal,
  Col,
  Label,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { DEPARTMENTS } from "../shared/staffs";
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class StaffForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {

    const newStaff = {
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      departmentId: values.department,
      annualLeave: values.annualLeave,
      overTime: values.overTime,

      image: "/assets/images/alberto.png",
    };
    this.props.postStaff(newStaff);
    this.toggleModal();
  }
  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody toggle={this.toggleModal}>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                      minLength: "Độ dài tối thiểu là 2",
                      maxLength: "Độ dài tối đa là 15",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày Sinh
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".doB"
                    id="doB"
                    name="doB"
                    type="date"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group ">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    name="department"
                    className="form-control"
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group ">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: props.staffs,
    };
    this.search = this.search.bind(this);
  }
  
  search(e) {
    e.preventDefault();
    const tim = this.props.staffs.filter((item) =>
      item.name.toLowerCase().match(this.timkiem.value.toLowerCase())
    );

    this.setState({ staffs: this.timkiem.value ? tim : this.props.staffs });
  }
  xoa=(staffId)=>{
    this.props.deleteStaff(staffId);
  }
  render() {
    const renderStaffItem = (staff ) => (
      <Card >
        <Link to={`/nhanvien/${staff.id}`}>
          <CardImg width="100%" src="./assets/images/alberto.png" alt={staff.name} />
        </Link>
        <CardTitle className=" text-center">{staff.name}</CardTitle>
        
      </Card>
    );
    const menu =this.state.staffs.map((staff) => {
    
      
      return (
        <div className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>
          {renderStaffItem(staff)}
          <Button onClick={() => this.xoa(staff.id)}>xoá</Button>
        </div>
        
      );
    });
    if (this.props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (this.props.errMess) {
      return(
          <div className="container">
              <div className="row">            
                  <h4>{this.props.errMess}</h4>
              </div> 
          </div>
      );
  }else
    return (
      
      <div className="container">
        <div className="row mt-3">
          <div className="col-10 col-md-2  ">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân viên </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-2 col-md-3 mt-1 ">
            <StaffForm postStaff={this.props.postStaff} />
          </div>
          <div className=" col-md-7 mt-1">
            <Form onSubmit={this.search}>
              <div className="row">
                <div className=" col-10 col-md-10 mt-1  ">
                  <Input
                    type="text"
                    id="timkiem"
                    name="timkiem"
                    innerRef={(input) => (this.timkiem = input)}
                  />
                </div>
                <div className=" col-2 col-md-2 mt-1 ">
                  <Button type="submit" value="submit" color="primary">
                    Tìm
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="row">
         
          {menu}
        </div>
      </div>
    );
  }
}
export default StaffList;
