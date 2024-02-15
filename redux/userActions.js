// userActions.js
export const setUser = (userData) => {
    return {
      type: 'SET_USER',
      payload: userData,
    };
  };
  
  export const loginUser = (userData) => {
    return {
      type: 'LOGIN_USER',
      payload: userData,
    };
  };
  
  // userActions.js
export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
