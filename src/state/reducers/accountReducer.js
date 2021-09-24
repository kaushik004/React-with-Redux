const reducer = (initState = 0, action) => {
  switch(action.type) {
    case 'deposit':
      return initState + action.payload;
    case 'withdraw':
      return initState - action.payload;
    default:
      return initState;
  }
}

export default reducer;