import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, withRouter } from 'react-router-dom';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { TiThMenu } from "react-icons/ti";

const links = [
  { url: '/',
    link: 'Home'
  },{ url: '/python-course',
    link: 'Python Course'
  },{ url: '/tutors',
    link: 'Tutors'
  },{ url: '/tech-network',
    link: 'Tech Network'
  },{ url: '/contact',
    link: 'Contact'
  }
]

class DesktopNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      altstyle: false
    }
  }

  toggleStyle = (e) => {
    console.log(e.currentTarget.innerText)
    if (e.currentTarget.innerText == "Contact") {
      this.setState({altstyle: true})
    } else {
      this.setState({altstyle: false})
    }
  }

  render() {
    const navbar_classes = (this.state.altstyle) ? "desktop-nav alt-nav-background" : "desktop-nav"
    let link_classes = "nav-link norm-colour borderLeftRight"
    let img_base = "assets/images/Codessey-Transparency.png"
    if (this.props.location.pathname == '/contact') {
      link_classes = "nav-link alt-colour borderLeftRight"
      img_base = "assets/images/Codessey-Transparency2.png"
    }

    return(

      <div className={navbar_classes}>
          <Link to="/">
            <div className="nav-logo">
              <img src={img_base} className="nav-logo" alt=""/>
            </div>
          </Link>
          <div className="nav-links">
            <ul className="list-inline">
              {
                links.map(({url, link}) => {
                  return (
                    <li className="" key={link}>
                      <NavLink exact={true} activeStyle={{color: "#ee3b7e"}} className={link_classes} to={url} >

                          {link}

                      </NavLink>
                    </li>
                  )
                })
              }

            </ul>
        </div>
      </div>


    )
  }
}

export default withRouter(DesktopNav);
