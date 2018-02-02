import ApiCustomer from '../api/apiCustomer';
export const ACTION_REQUEST_CUSTOMERS = 'ACTION_REQUEST_CUSTOMERS';
export const ACTION_RECEIVE_CUSTOMERS = 'ACTION_RECEIVE_CUSTOMERS';

import ApiByRequest, {REQUEST_LOGS_URL} from '../api/ApiByRequest';
export const SET_LOGS_FILTER  = 'SET_LOGS_FILTER';
export const SET_SELECTED_LOG = 'SET_SELECTED_LOG';
export const REQUEST_LOGS = 'REQUEST_LOGS';
export const RECEIVE_LOGS = 'RECEIVE_LOGS';
export const REQUEST_LOG = 'REQUEST_LOG';
export const RECEIVE_LOG = 'RECEIVE_LOG';
export const NEW_LOG_MODAL = 'NEW_LOG_MODAL';

// ///////////////////////////////////////////////////////////////
// get all customers
export const requestCustomers = (url) => ({
  type: ACTION_REQUEST_CUSTOMERS,
  stateCustsURL: url
});

export const receiveCustomers = (json) => ({
  type: ACTION_RECEIVE_CUSTOMERS,
  stateCustsFromAPI: json,
  stateCustsToLoad: false,
  stateCustsTest: 5678
});

export const getCustomersFromAPI = () => (dispatch) => {
  // get URL
  const url = ApiCustomer.getCustomersURL();

  // set URL and dispatch action request
  dispatch(requestCustomers(url));

  // get data, and dispatch receiveEmployees with the return result
  return ApiCustomer.getCustomers(URL, dispatch, receiveCustomers);
};

/*  ================================================================================ */
export const setLogsFilter = ({WaldorfSelected, OmahaSelected, logType}) => ({
  type: SET_LOGS_FILTER,
  WaldorfSelected,
  OmahaSelected,
  logType,
  logTypeID: logType
});

export const setNewLogModal = (isOpen) => ({
  type: NEW_LOG_MODAL,
  newLogModalIsOpen: isOpen
});

// ///////////////////////////////////////////////////////////////
// get all logs
export const requestLogs = (requestLogsURL) => ({
  type: REQUEST_LOGS,
  requestLogsURL
});

export const receiveLogs = (json) => ({
  type: RECEIVE_LOGS,
  logsFromAPI: json.content,
  toLoadLogsFromAPI: false
});

const fetchLogs = () => (dispatch) => {
  const requestLogsURL = REQUEST_LOGS_URL;
  dispatch(requestLogs(requestLogsURL));

  return ApiByRequest.fetchLogsAPI(dispatch, receiveLogs);
};

export const getLogsFromAPI = () => (dispatch) => {
  return dispatch(fetchLogs());
};

// ///////////////////////////////////////////////////////////////
// get log detail by logID

export const requestLog = (requestLogURL) => ({
  type: REQUEST_LOG,
  requestLogURL
});

export const receiveLog = (logID, json) => ({
  type: RECEIVE_LOG,
  logID,
  logData: json
});

const fetchLog = (logID, logURL) => (dispatch) => {

  const requestLogURL = REQUEST_LOGS_URL + '/' + String(logID); // 'http://localhost:8080/logs/' + String(logID);
  dispatch(requestLog(requestLogURL));
  return ApiByRequest.fetchLogAPI(logID, logURL, dispatch, receiveLog);
  // or
  // return fetch(requestLogURL)
  //  .then(response => response.json())
  //  .then(json => dispatch(receiveLog(logID, json)));
};

export const getLogDataFromAPI = (logID, logURL) => (dispatch) => {
  return dispatch(fetchLog(logID, logURL));
};
