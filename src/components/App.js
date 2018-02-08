import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
// import { Tabs, Tab } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap-tabs';

import {AppHeader}      from '../components/common/AppHeader';
//import {AppMainMenu}    from '../components/common/AppMainMenu';
//import {AppFooter}      from '../components/common/AppFooter';
import Home from './home/Home';
import ListDetailMain from './listAndDetail/listDetailMain';
import AppTimeTravel  from './timetravel/appTimeTravel';


const App = () => (
    <div>
        <AppHeader />
<Tabs onSecle={(index, label) => console.log(label + ' selected')}>
  <Tab eventKey={1} label='Tab 1'>
    <Home />
  </Tab>
  <Tab eventKey={2} label='Tab 2'>
    <ListDetailMain />
  </Tab>
  <Tab eventKey={3} label='Tab 3'>
    <AppTimeTravel /> 
  </Tab>
</Tabs>;
        {/* <AppMainMenu /> 
        <Tabs defaultActiveKey={2} id='uncontrolled-tab' bsStyle='pills' bsSize='xsmall'>
            <Tab eventKey={1} title='Home'>
                <Home />
            </Tab>

            <Tab eventKey={2} title='List-Detail'>
                <ListDetailMain />
            </Tab>

            <Tab eventKey={3} title='WB-Grid'>
                <AppTimeTravel /> 
            </Tab>

        </Tabs>
      */}
   </div> 
);

export default App;
