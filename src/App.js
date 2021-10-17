import React, { Component } from "react";

import { STAFFS } from "./shared/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <NavbarBrand href="/">Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
