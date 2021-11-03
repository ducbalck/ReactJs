import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetail";
import Phongban from "./phongban";
import Bangluong from "./bangluong";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  postStaff,deleteStaff,editStaff,
  fetchDepartments,
  fetchStaffs,
} from "../redux/ActionCreators";
import Danhsachphongban from "./danhsachphongban";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};
const mapDispatchToProps = (dispatch) => ({
  editStaff: (staff) => dispatch(editStaff(staff)),
  postStaff: (staff) => dispatch(postStaff(staff)),
  deleteStaff: (staff) => dispatch(deleteStaff(staff)),
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
  }



  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
          departments={this.props.departments.departments}
          editStaff={this.props.editStaff}

        />
      );
    };
    const DepartmentsStaff = ({ match }) => {
      return (
        <Danhsachphongban
          staffs={this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === match.params.departmentsId
          )}
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
          departments={this.props.departments.departments}
          isLoading={this.props.departments.isLoading}
          errMess={this.props.departments.errMess}
          
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
                <StaffList
                  staffs={this.props.staffs.staffs}
                  isLoading={this.props.staffs.isLoading}
                  errMess={this.props.staffs.errMess}
                  postStaff={this.props.postStaff}
                  deleteStaff={this.props.deleteStaff}
                  
                  
                />
              )}
            />
            <Route exact path="/nhanvien/:staffId" component={StaffWithId} />
            <Route
              path="/phongban"
              component={() => (
                <Phongban
                  departments={this.props.departments.departments}
                  isLoading={this.props.departments.isLoading}
                  errMess={this.props.departments.errMess}
                />
              )}
            />
            <Route
              exact
              path="/phongbans/:departmentsId"
              component={DepartmentsStaff}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
