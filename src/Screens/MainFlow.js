import React from 'react';
import {useSelector} from 'react-redux';
import UserFlow from './User/UserFlow';
import AdminFlow from './Admin/AdminFlow';
import {getUser} from '../Redux/Reducers/UserReducer';

const MainFlow = () => {
  const user = useSelector(getUser);

  return user ? user.role === 'user' ? <UserFlow /> : <AdminFlow /> : null;
};

export default MainFlow;
