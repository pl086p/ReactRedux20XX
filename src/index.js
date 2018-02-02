import React from 'react';
import {render} from 'react-dom';  // render equivalent ReactDOM.render
import {AppContainer} from 'react-hot-loader';
import App from './components/App';

/* The Provider component provides the React store to all its child components
 * so we don't need to pass it explicitly to all the components.
 * */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import initialLogState from './reducers/initialLogState';
import initialEmpState from './reducers/initialEmpState';
import initialGridState from './reducers/initialGridState';

import createLogger from 'redux-logger';

/* middleware (applied at middleware)
 * ReduxThunk: deal with asyncronous process
 * logger: for writing some debug information (prev state, action, next state) to console
 */
const logger = createLogger();

/* enhancer (middleware + devTools + ...)
 * add the Redux DevTools so we can easily debug the state.
 * window.devToolsExtension: green icon auto appears if it's a redux application. 
 */

/* for Production. should not have the devTools (no matter whether devTool extension is installed/enabled) */
const withoutDevTools = compose(
	applyMiddleware(ReduxThunk)
);

/* devTools1: no package installation needed (???) */
//const devTools1 = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // works for enable
//const devTools1 = compose; // works for both enable (without icon appearing) and disable
const devTools1 = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

/* devTools2: need installing package: redux-devtools-extension */
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
//const devTools2 = composeWithDevTools(); // works when enabled, not woks when disabled
const devTools2 = devToolsEnhancer(); // works for both enabled and disabled

/* devTools3: need both installing tools/DevTools and coding <DevTools /> */
import DevTools from './tools/DevTools';
const devTools3 = DevTools.instrument();

const withDevTools = compose(
	applyMiddleware(ReduxThunk),
	devTools2
);

/* This creates the store so we can listen to changes and dispatch actions. */
const myReducer = rootReducer;
const myEnhancer = withDevTools;
const myStore = createStore(
  myReducer, {reducerLog: initialLogState,
              reducerEmp: initialEmpState,
              reducerGrid: initialGridState},
  myEnhancer
);

const rootRender = component => {
  render(
    <AppContainer>
      <Provider store={myStore}>
        <div><App /></div>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

rootRender(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    rootRender(App);
  });
};


