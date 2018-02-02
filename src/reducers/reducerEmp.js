import { ACTION_REQUEST_EMPLOYEES,
         ACTION_RECEIVE_EMPLOYEES
       } from '../actions/actionOnEmployee';

const reducerEmp = (state = null, action) => {
  switch (action.type) {

    case ACTION_REQUEST_EMPLOYEES:
      console.log(ACTION_RECEIVE_EMPLOYEES);
      return {
        ...state,
        stateEmpsURL: action.stateEmpsURL
      };

    case ACTION_RECEIVE_EMPLOYEES:
      console.log(ACTION_RECEIVE_EMPLOYEES);
      return {
        ...state,
        stateEmpsToLoad:  action.stateEmpsToLoad,
        stateEmpsFromAPI: action.stateEmpsFromAPI,
        stateEmpsTest: action.stateEmpsTest
      };

    default:
      return state;
  }
};

export default reducerEmp;
