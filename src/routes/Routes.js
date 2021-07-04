// react import
import React from 'react';
// Switch, Route import
import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../views/Home';
import Navbar from '../components/Navbar';
import Settings from '../views/Settings';



export default function Routes() {
    return (
            <Switch>
                {/* navbar encloses all routes as children that's why navbar renders, everytime component loads */}
                <Navbar>
                    {/* home route */}
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/settings" exact>
                        <Settings />
                    </Route>
                </Navbar>
            </Switch>
    )
}
