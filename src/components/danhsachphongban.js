import React  from "react";
import { Breadcrumb, BreadcrumbItem ,Card,CardImg,CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';

const Danhsachphongban = (props) => {
    const RenderStaffItem = (staff ) => (
        <Card>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg width="100%" src="../assets/images/alberto.png" alt={staff.name} />
          </Link>
          <CardTitle className=" text-center">{staff.name}</CardTitle>
        </Card>
      );
    const danhsach = props.staffs.map((staff) => {
        return (
          <div className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>
            {RenderStaffItem(staff)}
          </div>
        );
    });
    if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.errMess) {
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
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/phongbans">Phòng Ban</Link>
          </BreadcrumbItem>
            
        </Breadcrumb>
      </div>
      <div className="row">
          {danhsach}
      </div>
    </div>
  );
};

export default Danhsachphongban;