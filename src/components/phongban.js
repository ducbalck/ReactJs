import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem ,Card,CardText,CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";

const Phongban = (props) => {
  
  const departments = props.departments?.map((department, index) => (
    <div key={index.toString()} className="col-lg-4 col-sm-6 col-12 mt-2" >
      <Card >
        <CardTitle><div>{department.name}</div></CardTitle>
        <CardText className="ml-3"><div>Số lượng nhân viên : {department.numberOfStaff}</div></CardText>
      </Card>

    </div>
  ));
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/phongban">Phòng Ban</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{departments}</div>
    </div>
  );
};
export default Phongban;
