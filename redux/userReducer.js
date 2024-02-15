const initialState = {
  userList: [], // Ensure that userList is initialized as an empty array
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        userList: [], // Clear the userList upon logout
      };
    // ... other cases
    default:
      return state;
  }
};

export default userReducer;
