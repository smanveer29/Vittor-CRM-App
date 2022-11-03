import {combineReducers, createStore} from 'redux';
import UserReducer from './Reducers/UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer);
export default store;
