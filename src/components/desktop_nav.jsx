import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

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

  render() {

    return(

      <div className="desktop-nav">
          <div className="nav-logo">
            <img src="assets/images/Codessey-Transparency.png" className="nav-logo" alt=""/>
          </div>
          <div className="nav-links">
            <ul className="list-inline">
              {
                links.map(({url, link}) => {
                  return (
                    <li className="" key={link}>
                      <NavLink exact={true} activeStyle={{color: "#ee3b7e"}} className="nav-link borderLeftRight" to={url}>
                        {/*<div className="nav-link">
                        </div>*/}
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

export default DesktopNav;
