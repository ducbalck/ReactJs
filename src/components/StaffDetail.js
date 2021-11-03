
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import React, { StaffediForm } from "react";


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
