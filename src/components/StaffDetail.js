import React from "react";
import { Card, CardImg,CardText,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat'; 
import { Link } from 'react-router-dom';

    const  StaffDetail = (props) => {
        
        if (props.staff != null) {
            
            
        
          return (
          <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
              </Breadcrumb>
                            
          </div>
          <div className="row">
                    <div className="col-12 col-lg-3 col-sm-4" > 
                       <CardImg width="100%" src={props.staff.image} alt={props.staff.name} /> 
                    </div>
                    <div className="col-12 col-lg-9  col-sm-8 " >
                        

                          <CardTitle>Họ và tên :{props.staff.name}</CardTitle>
                          <CardText>Ngày sinh : {dateFormat(props.staff.startDate,"dd/mm/yyyy")}</CardText>         
                          <CardText>Ngày vào công ty : {dateFormat(props.staff.doB,"dd/mm/yyyy")}</CardText>                 
                          <CardText>Phòng ban : {props.staff.department.name}</CardText> 
                          <CardText>Ngày nghỉ còn lại : {props.staff.annualLeave}</CardText>
                          <CardText>Số ngày đã làm thêm : {props.staff.overTime}</CardText>               
                        
                        
                    </div>
                    
            </div>
          
        </div> );
  
          }else return(
                    <div></div>
                );
        }   
    export default StaffDetail ;