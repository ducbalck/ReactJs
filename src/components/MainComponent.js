import React, { Component, useState } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import StaffDetail from "./StaffDetail";
import Phongban from "./phongban";
import Bangluong from "./bangluong";

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
    const seach = ({match})=>{
      return <StaffDetail staff={this.staff.filter(
        (staff) => staff.name === (match.useState()))
        
      
      }
      />
    };

    return (
      <>
        <Header />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/nhanvien"
              component={() => <StaffList staffs={this.state.staffs} />}
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
            <Route exact path="/nhanvien/:staffName" component={seach} />
            
            <Redirect to="/nhanvien" />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default Main;
