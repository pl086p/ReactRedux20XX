import React from 'react';

// import { Panel, Form, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button } from 'react-bootstrap';
import { Well, Tabs, Tab } from 'react-bootstrap';

import JqxTree     from '../../lib/jqwidgets-react/react_jqxtree.js';
import JqxSplitter from '../../lib/jqwidgets-react/react_jqxsplitter.js';
import JqxExpander from '../../lib/jqwidgets-react/react_jqxexpander.js';
import JqxListBox  from '../../lib/jqwidgets-react/react_jqxlistbox.js';
import JqxPanel    from '../../lib/jqwidgets-react/react_jqxpanel.js';

import AboutTabListDetail from './aboutTabListDetail';
import ListFilter   from './listFilter';
import ListRbsGrid  from './listRbsGrid';
import ListRbsTable0 from './listRbsTable0';
import ListRbsTable from './listRbsTable';
import ListJqxTable from './listJqxTable';
import LogEdit      from './logEdit';
import Grid    from '../timetravel/Grid'; // import LogSearch from './logSearch';

const ListDetailMain = () => (
     <JqxSplitter
          width={1200} height={500} orientation={'vertical'}
          panels={[{ size: 400, min: 100, collapsible: true }, {min: 200, collapsible: false}]} >
          
          {/* Left Panel ============================================================ */}
          {/* tab bsStyle = tabs (default)/pills (blue button) */}
          <div>

                <Tabs defaultActiveKey={1} id='uncontrolled-tab' bsStyle='tabs' bsSize='xsmall'>

                    <Tab eventKey={1} title='About'>
                        <AboutTabListDetail />
                    </Tab>

                    <Tab eventKey={2} title='Rbs-Grid'>
                        {/* <ListFilter /> */}
                        <ListRbsGrid />
                    </Tab>

                    <Tab eventKey={9} title='Rbs-Table0'>
                        <ListFilter />
                        <ListRbsTable0 />
                    </Tab>

                    <Tab eventKey={3} title='Rbs-Table'>
                        <ListRbsTable />
                    </Tab>

                    <Tab eventKey={4} title='JqxTable'>
                        {/* <ListFilter /> */}
                        <ListJqxTable />
                    </Tab>

                    <Tab eventKey={5} title='10*10'>
                        <Grid /> {/* <LogSearch /> */}
                    </Tab>
                </Tabs>

          </div>

          {/* Right Panel =========================================================== */}
          <div>

             {/* <LogEdit /> */}

          </div>
      </JqxSplitter>
);

export default ListDetailMain;

