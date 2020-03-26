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
import TruckManagementLayout from "./components/trucks/TruckManagementLayout";

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
					<Route
						exact
						path={process.env.PUBLIC_URL + "/login"}
						component={Login}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + "/password/reset"}
						component={PasswordReset}
					/>
					<PrivateRoute
						exact
						path={process.env.PUBLIC_URL + "/truck/all"}
						component={TruckManagementLayout}
					/>
					<PrivateRoute
						exact
						path={process.env.PUBLIC_URL + "/"}
						component={AssignmentTable}
						personnelManagerRoute
					/>
					<PrivateRoute
						exact
						path={process.env.PUBLIC_URL + "/user/all"}
						component={UserList}
						adminRoute
					/>
					<PrivateRoute
						exact
						path={process.env.PUBLIC_URL + "/logout"}
						component={Logout}
					/>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
