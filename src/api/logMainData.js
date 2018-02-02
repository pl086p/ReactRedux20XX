
export const CONSTANT_STATE = [
        {'ID': 0, 'state': 'ALL', 'Label': 'All States'},
        {'ID': 1, 'state': 'DC', 'Label': 'District of Columbia'},
        {'ID': 2, 'state': 'MD', 'Label': 'Maryland'},
        {'ID': 3, 'state': 'VA', 'Label': 'Virginia'}
];

export const CONSTANT_CUSTOMER_DATA = [
  {'id': 11, 'name': 'const-customer-01', 'gender': 'M', 'state': 'MD'},
  {'id': 12, 'name': 'const-customer-02', 'gender': 'F', 'state': 'VA'},
  {'id': 13, 'name': 'const-customer-03', 'gender': 'F', 'state': 'MD'},
  {'id': 14, 'name': 'const-customer-04', 'gender': 'M', 'state': 'VA'}
];

export const CONSTANT_LOG_TYPE = [ 
        {"ID": 0, "LogType": "ALL",          "Label": "All types of logs"},
        {"ID": 1, "LogType": "FlightLog",    "Label": "Log type 1"},
        {"ID": 2, "LogType": "HardstandLog", "Label": "Log type 2"},
        {"ID": 3, "LogType": "SatstarLog",   "Label": "Log type 3"}
];

export const CONSTANT_LOG_DATA = [
  {"logID": 11, "logName": "Log-11", "center": "Waldorf", "typeID": 2, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 1101, "from": 0, "to": 11}, {"id": 1102, "from": 11, "to": 15}] 
  },
  {"logID": 12, "logName": "Log-12", "center": "Omaha",   "typeID": 3, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 1201, "from": 0, "to": 12}, {"id": 1202, "from": 12, "to": 12}, {"id": 1203, "from": 12, "to": 23}] 
  },
  {"logID": 13, "logName": "Log-13", "center": "Waldorf", "typeID": 1, "logType": "HardstandLog", "active": true,
   "GEP": [] 
  },
  {"logID": 14, "logName": "Log-14", "center": "Waldorf", "typeID": 4, "logType": "SatstarLog", "active": true,
   "GEP": [{"id": 1401, "from": 0, "to": 14}, {"id": 1402, "from": 14, "to": 23}] 
  },
  {"logID": 15, "logName": "Log-15", "center": "Omaha",   "typeID": 5, "logType": "SatstarLog", "active": true,
   "GEP": [{"id": 1501, "from": 0, "to": 15}] 
  },
  {"logID": 16, "logName": "Log-16", "center": "Omaha",   "typeID": 2, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 17, "logName": "Log-17", "center": "Waldorf", "typeID": 3, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 18, "logName": "Log-18", "center": "Omaha",   "typeID": 1, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 19, "logName": "Log-19", "center": "Waldorf", "typeID": 4, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 20, "logName": "Log-20", "center": "Omaha",   "typeID": 5, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  }
];

const CONSTANT_LOG_DATA2 = [
  {"logID": 11, "logName": "Log-11", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 12, "logName": "Log-12", "center": "Omaha",   "typeID": 3, "type": "Nightwatch Hardstand"},
  {"logID": 13, "logName": "Log-13", "center": "Waldorf", "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 14, "logName": "Log-14", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 15, "logName": "Log-15", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 16, "logName": "Log-16", "center": "Omaha",   "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 17, "logName": "Log-17", "center": "Waldorf", "typeID": 3, "type": "Nightwatch Hardstand",},
  {"logID": 18, "logName": "Log-18", "center": "Omaha",   "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 19, "logName": "Log-19", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 20, "logName": "Log-20", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 21, "logName": "Log-21", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 22, "logName": "Log-22", "center": "Waldorf", "typeID": 3, "type": "Nightwatch Hardstand"},
  {"logID": 23, "logName": "Log-23", "center": "Waldorf", "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 24, "logName": "Log-24", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 25, "logName": "Log-25", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 26, "logName": "Log-26", "center": "Omaha",   "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 27, "logName": "Log-27", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 28, "logName": "Log-28", "center": "Omaha",   "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 29, "logName": "Log-29", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 30, "logName": "Log-30", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},  
  {"logID": 31, "logName": "Log-31", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"}
];