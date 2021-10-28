import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import StaffDetail from "./StaffDetail";
import Phongban from "./phongban";
import Bangluong from "./bangluong";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
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
                <StaffList staffs={this.state.staffs} />
              )}
            />
            <Route exact path="/nhanvien/:staffId" component={StaffWithId} />
            <Route
              path="/phongban"
              component={() => (
                <Phongban departments={this.state.departments} />
              )}
            />

            <Route
              path="/bangluong"
              component={() => <Bangluong staffs={this.state.staffs} />}
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
