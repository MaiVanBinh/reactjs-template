const initState = null;

const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    case "SIGN_OUT": 
        return initState;
    default:
      return state;
  }
};

export default reducer;
