var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
};

var myReducer = (state = initialState, action) => {
  console.log("call function" + state.status);
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
  }
  if (action.type === 'SORT') {
    var {by, value} = action.sort;
    var {status} = state;
    state = {
      status: status,
      sort: {
        by: by,
        value: value
      }
    }
  }
  return state;
}

export default myReducer;
