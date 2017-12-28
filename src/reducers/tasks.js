import * as types from '../constants/index';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
  return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + '-' + s4() + '-' + s4();
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var new_task = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status == 'true' ? true : false
      }
      state.push(new_task);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      return [...state];
    default:
      return state;
  }
}

export default myReducer;
