import React from 'react';
import { menuData } from "../constants/MenuData";

export default function MegaMenu() {
    return (
        <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              {menuData.map((nav) => (
                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  {nav.name}
                </a>
                <ul className="dropdown-menu">
                  {nav.dropMenu.map((dropMenu) => (
                    <li className="has-megasubmenu">
                      <a className="dropdown-item" href="/">
                        {dropMenu.title}
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <div className="row">
                          {dropMenu.subMenu1 &&
                            <div className="col-6">
                              <h6 className="title">{dropMenu.subMenu1[0].name}</h6>
                              <ul className="list-unstyled">
                                {dropMenu.subMenu1.map((subMenu) => (
                                  <li>
                                    <a className="submenu-link" href={subMenu.url}>{subMenu.link}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          }
                          {dropMenu.subMenu2 &&
                          <div className="col-6">
                            <h6 className="title">{dropMenu.subMenu2[0].name}</h6>
                            <ul className="list-unstyled">
                              {dropMenu.subMenu2.map((subMenu) => (
                                <li>
                                  <a className="submenu-link" href={subMenu.url}>{subMenu.link}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          }
                          {dropMenu.subMenu3 ?
                            <div className="col-6">
                            <h6 className="title">{dropMenu.subMenu2[0].name}</h6>
                            <ul className="list-unstyled">
                              {dropMenu.subMenu2.map((subMenu) => (
                                <li>
                                  <a className="submenu-link" href={subMenu.url}>{subMenu.link}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                            :
                            ""
                          }
                          {dropMenu.subMenu4 &&
                            <div className="col-6">
                              <h6 className="title">{dropMenu.subMenu4[0].name}</h6>
                              <ul className="list-unstyled">
                                {dropMenu.subMenu4.map((subMenu) => (
                                  <li>
                                    <a className="submenu-link" href={subMenu.url}>{subMenu.link}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          }
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
              ))}
            </ul>
          </div>
    )
}
