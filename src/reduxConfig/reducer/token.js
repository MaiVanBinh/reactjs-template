const initState = null;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
