import { combineReducers } from 'redux';

import reducerLog   from './reducerLog';
import reducerEmp   from './reducerEmp';
import reducerGrid  from './reducerGrid';

const rootReducer = combineReducers({
  reducerLog: reducerLog,
  reducerEmp: reducerEmp,
  reducerGrid: reducerGrid
});

export default rootReducer;
