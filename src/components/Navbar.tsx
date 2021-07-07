import React from "react";
import "../styles/Navbar.css";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";
import { MenuIcon, SettingsIcon } from '@fluentui/react-icons-northstar';
import { Button } from '@fluentui/react-northstar'


function Navbar(props:any) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <Button icon={<MenuIcon />} text iconOnly title="Home" />
          </Link>
          <MegaMenu />
          <Link to="/settings">
            <Button icon={<SettingsIcon />} text iconOnly title="Settings" style={{ marginRight: "20px" }} />
          </Link>
        </div>
      </nav>
      <main>{props.children}</main>
    </>
  );
}

export default Navbar;
