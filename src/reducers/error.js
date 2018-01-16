const error = (state = null, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error;
    case 'HIDE_ERROR':
      return null;
    default:
      return state;
  }
};

export default error;
