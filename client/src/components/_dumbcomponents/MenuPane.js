import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import {MenuTip, NavDiv, NavIcon, NavLink, NavPane} from "../../styled/common/Navigation";
/**
 * @date 2020-02-09
 * @author MJ Kochuk
 * @module Component
 */

/**
 * The menu used for navigating the site
 * @constructor
 * @param props
 * @returns {*} The MenuPane component
 */
function MenuPane() {

    return (
        <NavDiv>
            <NavLink onClick={() => openMenu()}>
                <MenuTip className="fas fa-angle-down"/>
                    Menu
            </NavLink>
            <NavPane>
                <Router>
                    <NavLink to={"/"}>
                        <NavIcon className="fas fa-home"/>
                            Home
                    </NavLink>
                    <NavLink to={"/"}>
                        <NavIcon className="fas fa-users"/>
                            Manage Users
                    </NavLink>
                    <NavLink to={"/"}>
                        <NavIcon className="fas fa-truck"/>
                            Mag Table
                    </NavLink>
                </Router>
            </NavPane>
        </NavDiv>
    )
}

function openMenu(){
}

export default MenuPane;