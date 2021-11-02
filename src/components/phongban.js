import React  from "react";
import { Breadcrumb, BreadcrumbItem ,Card,CardText,CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';

const Phongban = (props) => {
  const departments = props.departments && props.departments.length>0 && props.departments.map((department, index) => (
    <div key={index.toString()} className="col-lg-4 col-sm-6 col-12 mt-2" >
      
      <Card  >
        <Link to={`/phongbans/${department.id}`}>
          <CardTitle><div>{department.name}</div></CardTitle>
        </Link>
        <CardText className="ml-3"><div>Số lượng nhân viên : {department.numberOfStaff}</div></CardText>
      
      </Card>
      
    </div>

  ));
  
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
                <h4>{props.errMess}</h4>
            </div> 
        </div>
    );
}else
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