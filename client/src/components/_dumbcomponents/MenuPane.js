import React from "react";
import triangle from "../../res/Images/details-triangle-shape-setting-polygon-31860.png";
import home from "../../res/Images/home-house-building-page-casa-30503.png";
import admin from "../../res/Images/developer-mode-coding-html-css-device-develope-31864.png";

import {NavDiv, NavIcon, NavPane} from "../../styled/common/Navigation";
/**
 * @date 2020-02-09
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The MenuPane component
 */
function MenuPane(props) {
    return (
        <NavDiv>
            <a onClick={() => {}}>
                {/*<i className="far fa-triangle"></i>*/}
                {/*<i className="fas fa-angle-down"></i>*/}
                <NavIcon className="fas fa-angle-down" id="menuTip"/>
                    Menu
            </a>
            <NavPane>
                <div>
                    <a href="index.html">
                        <NavIcon src={home}/>
                            Home
                    </a>
                    <a href="projects.html">
                        {/*<i className="fas fa-users"></i>*/}
                        <NavIcon className="fas fa-users"/>
                            Manage Users
                    </a>
                    <a href="about.html">
                        {/*<i className="fas fa-truck"></i>*/}
                        <NavIcon className="fas fa-truck"/>
                            Mag Table
                    </a>
                </div>

            </NavPane>
        </NavDiv>
    )
}

export default MenuPane;