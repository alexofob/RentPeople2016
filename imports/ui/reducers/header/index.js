import { combineReducers } from 'redux';
import * as headerReducers from './header';
import * as authenticatedNavReducers from './authenticated-nav';

const Reducer = combineReducers({ ...headerReducers, ...authenticatedNavReducers });

export default Reducer;
