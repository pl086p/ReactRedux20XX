export const REQUEST_EMPS_URL = 'http://localhost:8020/jpaRest/getAllEmp';

// fetch("/login", {
//   method: "POST",
//   body: form
// })

class ApiEmployee {

  // get employees url
  static getEmployeesURL() {
    return REQUEST_EMPS_URL;
  }

  // get employees
  static getEmployees(url, dispatch, myCallback) {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(myCallback(json)));
  }

  // get individual employee by logID
  static getEmpById(logID, logURL, dispatch, myCallback) {
    // return fetch(REQUEST_LOGS_URL + '/' + String(logID))
    return fetch(logURL)
      .then(response => response.json())
      .then(json => dispatch(myCallback(logID, json)));
  }


}

export default ApiEmployee;
