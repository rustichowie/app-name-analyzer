export function setError(message) {
    return {
      type: 'SET_ERROR',
      error: {message: message}
    }
}

export function hideError(){
  return {
    type: 'HIDE_ERROR'
  };
};
