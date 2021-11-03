import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                       
                        <NavbarBrand className="mr-auto" href="/"><img src='../assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/nhanvien'><i className="fa fa-users" aria-hidden="true"></i> Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/phongban'><i className="fa fa-id-card-o" aria-hidden="true"></i> Phòng Ban </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/bangluong'><i className="fa fa-money" aria-hidden="true"></i> Bảng lương</NavLink>
                            </NavItem>
                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
        );
    }
}



export default Header;