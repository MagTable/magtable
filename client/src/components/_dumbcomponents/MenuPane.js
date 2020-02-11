import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {MenuTip, MenuTipIcon, NavDiv, NavIcon, NavLink, NavPane} from "../../styled/common/Navigation";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

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
function MenuPane({menuOpen, setMenuOpen}) {

    function openMenu() {
        if (menuOpen) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }

    //Todo make these links go to their respective pages.
    return (
        <div>
            <BrowserView>
                Hello
            </BrowserView>
            <MobileView>
                <NavDiv>
                    <MenuTip onClick={() => openMenu()}>
                        <MenuTipIcon open={menuOpen} className="fas fa-angle-down"/>
                        Menu
                    </MenuTip>
                    <NavPane open={menuOpen}>
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
                    </NavPane>
                </NavDiv>
            </MobileView>
        </div>
    )
}


export default MenuPane;