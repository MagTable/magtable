import { combineReducers } from 'redux';
import user from './user';
import alert from './alert';
import auth from './auth';

export default combineReducers({ user, alert, auth });
