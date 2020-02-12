import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { loadUser } from "./actions/auth";

import PrivateRoute from "./components/auth/PrivateRoute";
import Alert from "./components/common/Alert";
import NavBar from "./components/_dumbcomponents/NavBar";
import Login from "./components/auth/Login";
import UserList from "./components/user/UserList";
import Logout from "./components/auth/Logout";
import AssignmentTable from "./components/magtable/AssignmentTable";
import PasswordReset from "./components/auth/PasswordReset";
import { setAlert } from "./actions/alert";
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import UserList from './components/user/UserList';
import AddUser from './components/user/AddUser';
import AssignmentTable from './components/magtable/AssignmentTable';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/common/Alert';
import NavBar from './components/_dumbcomponents/NavBar';

function App() {
	useEffect(() => {
		async function fetch() {
			await store.dispatch(loadUser());
			store.dispatch(setAlert("Test Warning", "warning"));
			store.dispatch(setAlert("Test Success", "success"));
			store.dispatch(setAlert("Test Danger", "danger"));
			store.dispatch(setAlert("Test Info", "info"));
		}
		fetch();
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<NavBar/>
				<Alert/>
				{/*<ul>*/}
				{/*    <li>*/}
				{/*        <Link to="/">/</Link>*/}
				{/*    </li>*/}
				{/*    <li>*/}
				{/*        <Link to="/user/all">/user/all</Link>*/}
				{/*    </li>*/}
				{/*    <li>*/}
				{/*        <Link to="/user/insert">/user/insert</Link>*/}
				{/*    </li>*/}
				{/*</ul>*/}
				{/*<Switch>*/}
				{/*    <Route exact path="/">*/}
				{/*        <AssignmentTable/>*/}
				{/*    </Route>*/}
				{/*    <Route exact path="/user/all">*/}
				<UserList />
				{/*    </Route>*/}
				{/*    <Route exact path="/user/insert">*/}
				{/*        <AddUser/>*/}
				{/*    </Route>*/}
				{/*</Switch>*/}
				<NavBar />
				<Alert />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/password/reset"
						component={PasswordReset}
					/>

					<PrivateRoute exact path="/" component={AssignmentTable} />
					<PrivateRoute
						exact
						path="/user/all"
						component={UserList}
						adminRoute
					/>
					<PrivateRoute exact path="/logout" component={Logout} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
