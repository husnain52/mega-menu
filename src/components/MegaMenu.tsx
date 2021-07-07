import React from 'react';
import { items } from "../constants/data";

export default function MegaMenu () {
    const storageData = JSON.parse(localStorage.getItem('updatedItems') || '{}');
    const [data, setdata] = React.useState(items);
    React.useEffect(() => {
      if (storageData.length > 0){
        setdata(storageData)
      } else if (!storageData) {
         setdata(items)
      }
      else {
        setdata(items)
      }
    },[storageData])
    return (
        <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              {data.map((nav:any) => (
                <li key={nav.title} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  {nav.title}
                </a>
                <ul className="dropdown-menu">
                  {nav.items && nav.items.map((dropMenu:any) => (
                    <li key={dropMenu.title} className="has-megasubmenu">
                      <a className="dropdown-item" href="/">
                        {dropMenu.title}
                      </a>
                      <div className="megasubmenu dropdown-menu">
                        <div className="row">
                          {dropMenu.items && dropMenu.items.map((subMenu:any)=>(
                            <div key={subMenu.title} className="col-6">
                              <h6 className="title">{subMenu.title}</h6>
                              <ul className="list-unstyled">
                                {subMenu.items && subMenu.items.map((subMenu:any) => (
                                  <li key={subMenu.title}>
                                    <a className="submenu-link" href={subMenu.url}>{subMenu.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
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