import { SET_LOGS_FILTER, SET_SELECTED_LOG, ACTION_RECEIVE_EMPLOYEES  } from '../actions/logListActions';

const logListReducer = (state, action) => {
//export const logListReducer = (state, action) => {
  switch (action.type) {

    case ACTION_RECEIVE_EMPLOYEES:
      return {
        ...state,
        stateEmpsToLoad: true
      };

    case SET_LOGS_FILTER:
      return {
        ...state,
        centerID: action.centerID,
        logTypeID: action.logTypeID
      };

    case SET_LOGS_FILTER:
      return {
        ...state,
        centerID: action.centerID,
        logTypeID: action.logTypeID
      };

    case SET_SELECTED_LOG:
      return {
        ...state,
        logID: action.logID
      };

    default:
      return state;
  }
};

export default logListReducer;
