import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT, SET_USER} from '../Actions/UserActions';

const defualtState = {
  user: null,
};

const UserReducer = (state = defualtState, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log(action.payload, 'payload redux');
      return {...state, user: action.payload};
    }

    case LOGOUT: {
      AsyncStorage.clear();
      return {...state, user: null};
    }
    default:
      return state;
  }
};
export default UserReducer;

export const getUser = state => state.user.user;
