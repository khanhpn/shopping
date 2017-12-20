import { createStore } from 'redux';

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
  return state;
}


const store = createStore(myReducer);
console.log(store.getState());

// implement to change status
var action = {
  type: 'TOGGLE_STATUS'
};
store.dispatch(action);


console.log(store.getState());
