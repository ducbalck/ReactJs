import React, { Component, useCallback, useEffect, useState } from "react";
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


const StaffList = (props) => {
  const [textSearch, setTextSearch] = useState("");
  console.log("staffs", props.staffs);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    setStaffs(props.staffs);
  }, []);

  const search = () => {
    // viết trong này
    const tim = props.staffs.filter((item) => item.name.toLowerCase().match(textSearch.toLowerCase()));
    // cập nhật state
    setStaffs(textSearch ? tim : props.staffs);
  };

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
              <Input
                type="text"
                className="form-control"
                onChange={(e) => setTextSearch(e.target.value)}
              ></Input>
            </Col>
            <Col md={2}>
              {/* em đang gọi onSearch ở staff lists, vạy em đã truyền onSearch vào staff lít chưa? */}
              <Button color="primary" type="button" onClick={search}>
                Tìm
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="row">
        {staffs.map((staff) => (
          <div className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>
            {renderStaffItem(staff)}
          </div>
        ))}
      </div>
    </div>
  );
};
export default StaffList;
