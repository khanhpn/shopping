import { combineReducers } from 'redux';
import tasks from './tasks';

const myReducer = combineReducers({
  tasks  // tasks: tasks,
});

export default myReducer;
