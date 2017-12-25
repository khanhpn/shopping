import * as types from '../constants/index';

var initialState = [
  {
    id: 1,
    name: 'Learn angular',
    status: false
  }
];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
}

export default myReducer;
