import React, {  useEffect, useState } from "react";
import {
  Card,
  CardImg,
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
  
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    setStaffs(props.staffs);
  }, []);

  const search = () => {
    
    const tim = props.staffs.filter((item) => item.name.toLowerCase().match(textSearch.toLowerCase()));
    
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
        <div className="col-md-3  ">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân viên </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-md-6 mt-1 ">
          <Row className="form-group">
            <Col >
              <Input
                type="text"
                className="form-control"
                onChange={(e) => setTextSearch(e.target.value)}
              ></Input>
            </Col>
            <Col  >
              
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
