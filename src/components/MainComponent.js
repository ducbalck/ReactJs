import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetail";
import Phongban from "./phongban";
import Bangluong from "./bangluong";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { STAFFS } from "../shared/staffs";


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    
    
    // this.addstaff = this.addstaff.bind(this)
    
 
  }
  // addstaff(staff) {
  //   this.setState({staffs : STAFFS.concat([{...staff, ...{id: this.state.staffs.length}}])})
  // }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <>
        <Header />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/nhanvien"
              component={() => (
                <StaffList staffs={this.props.staffs} addStaff={this.props.addStaff} />
              )}
            />
            <Route exact path="/nhanvien/:staffId" component={StaffWithId} />
            <Route
              path="/phongban"
              component={() => (
                <Phongban departments={this.props.departments} />
              )}
            />

            <Route
              path="/bangluong"
              component={() => <Bangluong staffs={this.props.staffs} />}
            />
            

            <Redirect to="/nhanvien" />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));