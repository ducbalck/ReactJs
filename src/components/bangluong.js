import React from "react" ;
import { Breadcrumb, BreadcrumbItem,Card,CardFooter,CardText,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const Bangluong= (props)=>{
  
    const luong = props.staffs.staffs.map((staff)=>{
        return(
            
           
            <div className="col-lg-4 col-sm-6 col-12 mt-2 ">
                <Card key={staff.id}>
                <CardTitle>{staff.name}</CardTitle>
                <CardText className="ml-3">Mã nhân viên : {(staff.id)} </CardText>
                <CardText className="ml-3">Hệ số lương :{(staff.salaryScale).toFixed(0)}</CardText>
                <CardText className="ml-3">Số giờ làm thêm :{staff.overTime}</CardText>
                
                <CardFooter className="ml-3 mr-3 ">Lương :{(parseFloat(staff.salaryScale).toFixed(0)*3000000)+(parseFloat(staff.overTime)*200000)}</CardFooter>
                
                
                </Card>
            </div>
        );
    })
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