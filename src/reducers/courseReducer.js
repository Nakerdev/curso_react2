import * as type from '../actions/actionsTypes';
import InitialState from './initialState';

export default function courseReducer(state = InitialState.courses, action) {
  switch (action.type){
    case type.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
