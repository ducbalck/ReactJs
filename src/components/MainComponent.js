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
    // const Seach = ({match})=>{
    //   return <onSearch  staff={
    //     this.state.staffs.filter(
    //       (staff) => staff.name === parseInt(match.params.staffName, 10)
    //     )[0]

    //   }
    //   />
    // };

    // chạy đi em
    // state là gì, props là gì
    // react re-render component khi nào?
    // class component vs function component khác nhau như nào?
    // hook là gì? và các hook api của react useState(), useEffect()
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
            <Route
              exact
              path="/nhanvien/:staffName"
              component={() => <onSearch staffs={this.state.staffs} />}
            />

            <Redirect to="/nhanvien" />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default Main;
