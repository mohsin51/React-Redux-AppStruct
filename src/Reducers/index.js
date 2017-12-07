import {combineReducers} from 'redux';
import userReducer from './reducer-users';
import activeUserReducer from './reducer-user-active';

// reducers are used to store event generated data in gloal redux store
// in simple piece of data which we want to store in global store
// Add all reducers here 
const allreducers = combineReducers({
    users:userReducer,
    activeuser : activeUserReducer
});

export default allreducers;