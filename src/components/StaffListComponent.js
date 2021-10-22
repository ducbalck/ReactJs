import React, { Component, useState } from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

import dateFormat from "dateformat";

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
      </Link>
      <CardTitle className=" text-center">{staff.name}</CardTitle>
    </Card>
  );
}

const StaffList = (props) => {
  const [textSearch, setTextSearch] = useState("");
  const menu = props.staffs.map((staff) => {
    return (
      <div className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>
        <RenderStaffItem staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân viên </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-md-6 offset-3">
          <Row className="form-group">
            <Col md={10}>
              <Input type="text" className="form-control" onChange={e => setTextSearch(e.target.value)}></Input>
            </Col>
            <Col md={2}>
              <Button color="primary" type="button" onClick={() => props.onSearch(textSearch)}>
                Tìm
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};
export default StaffList;
