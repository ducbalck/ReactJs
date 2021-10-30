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
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";


class StaffForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "",
      annualLeave: 0,
      overTime: 0,
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.doB]: event.target.value });
    this.setState({ [event.target.salaryScale]: event.target.value });
    this.setState({ [event.target.startDate]: event.target.value });
    this.setState({ [event.target.annualLeave]: event.target.value });
    this.setState({ [event.target.overTime]: event.target.value });
  }
  validate(name, doB, startDate, isSubmit = false) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };

    if ((this.state.touched.name || isSubmit) && name === "")
      errors.name = "yêu cầu nhập";
    else if ((this.state.touched.name || isSubmit) && name.length < 3)
      errors.name = "Yêu cầu nhiều 3 kí tự";
    else if ((this.state.touched.name || isSubmit) && name.length > 15)
      errors.name = "Yêu cầu ít hơn 15 kí tự";

    if ((this.state.touched.doB || isSubmit) && doB === "")
      errors.doB = "yêu cầu nhập";
    if ((this.state.touched.startDate || isSubmit) && startDate === "")
      errors.startDate = "yêu cầu nhập";

    return errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate,
      true
    );
    if (errors.name || errors.doB || errors.startDate) {
      this.setState({
        touched: { name: true, doB: true, startDate: true },
      });
      return;
    }
    const department = DEPARTMENTS.filter(x => x.id === this.state.department)[0]
    const newStaff = {
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.addStaff(newStaff)
    
    this.toggleModal();
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody toggle={this.state.toggleModal}>
            <Form onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày Sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    name="doB"
                    value={this.state.doB}
                    onChange={this.handleChange}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.handleChange}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                  />
                </Col>
                <FormFeedback>{errors.startDate}</FormFeedback>
              </Row>
              <Row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleChange}
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Input>
                </Col>
              </Row>
              <Row className="form-group mt-4">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="salaryScale"
                    value={this.state.salaryScale}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="annualLeave"
                    value={this.state.annualLeave}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="overTime"
                    value={this.state.overTime}
                    onChange={this.handleChange}
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
            </Form>
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
      staffs: props.staffs
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
          <div className="col-10 col-md-2  ">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân viên </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-2 col-md-3 mt-1 ">
            <StaffForm addStaff={this.props.addStaff}/>
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
