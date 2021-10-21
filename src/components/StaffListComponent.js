import React, { Component } from "react";
 
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import dateFormat from 'dateformat'; 


    function RenderStaffItem ({staff, onClick}) {
        return (
            <Card>
                <Link to={`/nhanvien/${staff.id}`} >
                    <CardImg width="100%" src={staff.image} alt={staff.name} />  
                </Link>
                <CardTitle  className=" text-center">{staff.name}</CardTitle>
            </Card>
        );
    }
 
    const StaffList = (props) => {

        const menu = props.staffs.map((staff) => {
            return (
              <div  className="col-6 col-lg-2 col-sm-4 mt-1" key={staff.id}>        
                <RenderStaffItem staff={staff} onClick={props.onClick} />                  
                
              </div>
            );
        });
        
        

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 ">
                        <h3>Nhân viên</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
export default StaffList;