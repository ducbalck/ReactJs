import React, { Component } from "react" ;
import { Breadcrumb, BreadcrumbItem,Card,CardFooter,CardImgOverlay,CardText,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


const Bangluong= (props)=>{
    const luong = props.staffs.map((staff)=>{
        return(
           
            <div className="col-lg-4 col-sm-6 col-12 mt-2 ">
                <Card>
                <CardTitle>{staff.name}</CardTitle>
                <CardText className="ml-3">Mã nhân viên : {(staff.id)} </CardText>
                <CardText className="ml-3">Hệ số lương :{(staff.salaryScale).toFixed(0)}</CardText>
                <CardText className="ml-3">Số giờ làm thêm :{staff.overTime}</CardText>
                
                <CardFooter className="ml-3 mr-3 ">Lương :{(parseFloat(staff.salaryScale).toFixed(0)*3000000)+(parseFloat(staff.overTime)*200000)}</CardFooter>
                
                
                </Card>
            </div>
        );
    })
    return(
         
        
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/bangluong">Bảng lương</Link></BreadcrumbItem>
                    </Breadcrumb>
                                 
                </div>
                <div className="row">
                    {luong}
                </div>
            </div>
        );
    
}
export default Bangluong ;