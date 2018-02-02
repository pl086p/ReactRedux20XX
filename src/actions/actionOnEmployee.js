import ApiEmployee from '../api/apiEmployee';

export const ACTION_REQUEST_EMPLOYEES = 'ACTION_REQUEST_EMPLOYEES';
export const ACTION_RECEIVE_EMPLOYEES = 'ACTION_RECEIVE_EMPLOYEES';

// ///////////////////////////////////////////////////////////////
// get all employees
export const requestEmployees = (url) => ({
  type: ACTION_REQUEST_EMPLOYEES,
  stateEmpsURL: url
});

export const receiveEmployees = (json) => ({
  type: ACTION_RECEIVE_EMPLOYEES,
  stateEmpsFromAPI: json,
  stateEmpsToLoad: false,
  stateEmpsTest: 1234
});

export const getEmpsFromAPI = () => (dispatch) => {
  // get URL
  const URL = ApiEmployee.getEmployeesURL();

  // set URL and dispatch action request
  dispatch(requestEmployees(URL));

  // get data, and dispatch receiveEmployees with the return result
  return ApiEmployee.getEmployees(URL, dispatch, receiveEmployees);
};

// ///////////////////////////////////////////////////////////////
// get log detail by logID

