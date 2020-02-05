import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserList from "./components/user/UserList";
import AddUser from "./components/user/AddUser";
import AssignmentTable from "./components/magtable/AssignmentTable";
import NavButton from "./styled/NavButton";
import NavBar from "./components/common/NavBar";

/**
 *
 * @returns {*}
 * @constructor
 */
function App() {
    return (
        <Router>
            <NavBar/>
            <ul>
                <li><Link to="/">/</Link></li>
                <li><Link to="/user/all">/user/all</Link></li>
                <li><Link to="/user/insert">/user/insert</Link></li>
            </ul>
            <Switch>
                <Route exact path="/"><AssignmentTable/></Route>
                <Route exact path="/user/all"><UserList/></Route>
                <Route exact path="/user/insert"><AddUser/></Route>
            </Switch>
        </Router>

    );
}

export default App;
