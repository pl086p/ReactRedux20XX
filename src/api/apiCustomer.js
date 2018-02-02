export const REQUEST_CUST_URL = 'http://localhost:8020/jpaRest/getAllCust';

class ApiCustomer {

  // get employees url
  static getCustomersURL() {
    return REQUEST_CUST_URL;
  }

  // get employees
  static getCustomers(url, dispatch, myCallback) {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(myCallback(json)));
  }

  // get individual employee by logID
  static getCustById(ID, URL, dispatch, myCallback) {
    // return fetch(REQUEST_LOGS_URL + '/' + String(logID))
    return fetch(URL)
      .then(response => response.json())
      .then(json => dispatch(myCallback(ID, json)));
  }


}

export default ApiCustomer;
