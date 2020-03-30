import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import { loadUser } from "./actions/auth";

import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import PasswordReset from "./components/auth/PasswordReset";
import "./App.css";
import UserList from "./components/user/UserList";
import AssignmentTable from "./components/magtable/AssignmentTable";
import Alert from "./components/common/Alert";
import NavBar from "./components/common/NavBar";
import TVView from "./components/tv/TVView";
import TruckManagement from "./components/trucks/TruckManagement";

function App() {
	useEffect(() => {
		async function fetch() {
			await store.dispatch(loadUser());
		}
		fetch();
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<NavBar />
				<Alert />
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/password/reset" component={PasswordReset} />
					<PrivateRoute exact path="/truck/all" component={TruckManagement} />
					<PrivateRoute exact path="/truck/tv" component={TVView} />
					<PrivateRoute
						exact
						path="/"
						component={AssignmentTable}
						personnelManagerRoute
					/>
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
