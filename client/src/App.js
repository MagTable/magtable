import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import UserList from './components/user/UserList';
import AddUser from './components/user/AddUser';
import AssignmentTable from './components/magtable/AssignmentTable';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/common/Alert';
import NavBar from './components/_dumbcomponents/NavBar';
import PasswordReset from './components/user/PasswordReset';
import MenuPane from './components/_dumbcomponents/MenuPane';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import { loadUser } from './actions/auth';

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

				<Route exact path="/login" component={Login} />

				<PrivateRoute
					exact
					path="/"
					adminRoute
					component={UserList}
				/>
			</Router>
		</Provider>
	);
}

export default App;
