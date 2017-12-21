var initialState = {
  by: 'name',
  value: 1
};

var myReducer = (state = initialState, action) => {
  if (action.type === 'SORT') {
    var { by, value } = action.sort;
    return { by, value };
  }
  return state;
}

export default myReducer;
