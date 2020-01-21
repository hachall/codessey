import React, { Component } from 'react';
import { TiThMenu } from "react-icons/ti";
import { BrowserRouter, Link, NavLink, withRouter } from 'react-router-dom';

import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


class NavMobile extends Component {


  render() {

    return (
      <div className="navbar-mobile">
        <Link to='/'>
          <img className="navbar-mobile-img" src="https://codessey.s3.eu-west-2.amazonaws.com/logos/Codessey-Transparency.png" alt=""/>
        </Link>
        <UncontrolledButtonDropdown>
          <DropdownToggle>
            <TiThMenu />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link className="dropdown-link-mob" to='/'>Home</Link></DropdownItem>
            <DropdownItem><Link className="dropdown-link-mob" to='/python-course'>Python Course</Link></DropdownItem>
            <DropdownItem><Link className="dropdown-link-mob" to='/tutors'>Tutors</Link></DropdownItem>
            <DropdownItem><Link className="dropdown-link-mob" to='/tech-network'>Tech Network</Link></DropdownItem>
            <DropdownItem><Link className="dropdown-link-mob" to='/contact'>Contact</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>

      </div>
    )
  }
}
export default NavMobile;
