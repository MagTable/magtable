import React from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserList from "./components/user/UserList";
import AddUser from "./components/user/AddUser";
import AssignmentTable from "./components/magtable/AssignmentTable";
import {Provider} from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import NavBar from "./components/_dumbcomponents/NavBar"
import {UserDiv} from "./styled/client/User";
import ManageUsers from "./components/_dumbcomponents/ManageUsers";

function App() {
    return (
        <Provider store={store}>
            <NavBar/>
            <ManageUsers/>
            <Router>

                <Alert/>
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">/</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/user/all">/user/all</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/user/insert">/user/insert</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
                <Switch>
                    <Route exact path="/">
                        <AssignmentTable/>
                    </Route>
            {/*        <Route exact path="/user/all">*/}
            {/*            <UserList/>*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/user/insert">*/}
            {/*            <AddUser/>*/}
            {/*        </Route>*/}
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
