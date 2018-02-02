import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';

import {AppHeader}      from '../components/common/AppHeader';
//import {AppMainMenu}    from '../components/common/AppMainMenu';
//import {AppFooter}      from '../components/common/AppFooter';
import Home           from '../components/home//Home';
import ListDetailMain from '../components/listAndDetail/listDetailMain';
import AppTimeTravel  from '../components/timetravel/appTimeTravel';


const App = () => (
    <div>
        <AppHeader />

        {/* <AppMainMenu /> */}
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

        {/*<AppFooter />*/}
   </div> 
);

export default App;
