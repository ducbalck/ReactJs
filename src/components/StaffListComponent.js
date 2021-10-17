import React, { Component } from "react";
 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

import dateFormat from 'dateformat'; 


class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
           
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff});
    }

    renderStaff(staff) {
        if (staff != null)
            return(
                <Card>
                    
                    <CardBody>
                      <CardTitle>Họ và tên :{staff.name}</CardTitle>
                      <CardText>Ngày sinh : {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>         
                      <CardText>Ngày vào công ty : {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>                 
                      <CardText>Phòng ban : {staff.department.name}</CardText> 
                      <CardText>Ngày nghỉ còn lại : {staff.annualLeave}</CardText>
                      <CardText>Số ngày đã làm thêm : {staff.overTime}</CardText>               
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    render() {
        const menu = this.props.staffs.map((staff) => {
            return (
              <div  className="col-12 col-sm-6 col-md-4 mt-1">
                <Card key={staff.id}
                  onClick={() => this.onStaffSelect(staff)}>         
                    <CardTitle>{staff.name}</CardTitle>                  
                </Card>
              </div>
            );
        });
        
        

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-sm-6 col-md-4 mt-1 ">
                    {this.renderStaff(this.state.selectedStaff)}                   
                  </div>
                </div>
                
            </div>
        );
    }
}
export default StaffList;