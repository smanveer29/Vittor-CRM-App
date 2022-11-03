export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = data => {
  return {type: SET_USER, payload: data};
};
export const logout = () => {
  return {type: LOGOUT};
};
