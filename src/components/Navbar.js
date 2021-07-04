import { IconButton, initializeIcons } from "@fluentui/react";
import React from "react";
import "./Navbar.css";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";

const MenuIcon = { iconName: "GlobalNavButton" };
const settingsIcon = { iconName: "Settings" };

function Navbar(props) {
  initializeIcons();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <IconButton iconProps={MenuIcon} style={{ marginLeft: "20px" }} />
          </Link>
          <MegaMenu />
          <Link to="/settings">
            <IconButton
              iconProps={settingsIcon}
              title="Emoji"
              ariaLabel="Emoji"
              style={{ marginRight: "20px" }}
            />
          </Link>
        </div>
      </nav>
      <main>{props.children}</main>
    </>
  );
}

export default Navbar;
