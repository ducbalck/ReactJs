
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import React, { Component } from "react";
import {
  
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
  
  Button,
  Row,
  Modal,
  Col,
  Label,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class StaffediForm extends Component {
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
 
    this.props.editStaff(newStaff);
    this.toggleModal();
  }
  render() {
    const staff = Object.assign({}, this.props.staff, {doB: dateFormat(this.props.staff.doB, "yyyy-mm-dd"), startDate:  dateFormat(this.props.staff.startDate, "yyyy-mm-dd")})
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          Sửa
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Sửa nhân viên</ModalHeader>
          <ModalBody toggle={this.toggleModal}>
            <LocalForm
              onSubmit={(values) => this.handleSubmit(values)}
              initialState={staff}
            >
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
                    model=".departmentId"
                    name="departmentId"
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
                    Sửa
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

const StaffDetail = (props) => {
  console.log("props.departments", props.staff);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-4">
            <CardImg
              width="100%"
              src="../assets/images/alberto.png"
              alt={props.staff.name}
            />
          </div>
          <div className="col-12 col-lg-9  col-sm-8 ">
            <CardTitle>Họ và tên :{props.staff.name}</CardTitle>
            <CardText>
              Ngày sinh : {dateFormat(props.staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty : {dateFormat(props.staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Phòng ban :
              {
                (props.departments?.filter(
                  (department) => department.id === props.staff.departmentId
                ))[0]?.name
              }
            </CardText>
            <CardText>Ngày nghỉ còn lại : {props.staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm : {props.staff.overTime}</CardText>
            <StaffediForm editStaff={props.editStaff} staff={props.staff} />
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};
export default StaffDetail;
