import React from 'react';

// import { Panel, Form, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button } from 'react-bootstrap';
// import { Well, Tabs, Tab } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap-tabs';

import JqxTree     from '../../lib/jqwidgets-react/react_jqxtree.js';
import JqxSplitter from '../../lib/jqwidgets-react/react_jqxsplitter.js';
import JqxExpander from '../../lib/jqwidgets-react/react_jqxexpander.js';
import JqxListBox  from '../../lib/jqwidgets-react/react_jqxlistbox.js';
import JqxPanel    from '../../lib/jqwidgets-react/react_jqxpanel.js';

// this may replace JqxSplitter
// import SplitPane from '../../lib/SplitPane';

import AboutTabListDetail from './aboutTabListDetail';
import ListFilter   from './listFilter';
import ListRbsGrid  from './listRbsGrid';
// import ListRbsTable0 from './listRbsTable0';
import ListRbsTable from './listRbsTable';
import ListJqxTable from './listJqxTable';
// import LogEdit      from './logEdit';
import Grid    from '../timetravel/Grid'; // import LogSearch from './logSearch';

const ListDetailMain = () => (
     <JqxSplitter
          width={1200} height={500} orientation={'vertical'}
          panels={[{ size: 400, min: 100, collapsible: true }, {min: 200, collapsible: false}]} >
          
          {/* Left Panel ============================================================ */}
          {/* tab bsStyle = tabs (default)/pills (blue button) */}
          <div>

                <Tabs>

                    <Tab label='About'>
                        <AboutTabListDetail />
                    </Tab>

                    <Tab label='Rbs-Grid'>
                        {/* <ListFilter /> */}
                        <ListRbsGrid />
                    </Tab>

                    <Tab label='Rbs-Table0'>
                        ListRbsTable0
                        {/*<ListFilter />
                        <ListRbsTable0 />*/}
                    </Tab>

                    <Tab label='Rbs-Table'>
                        <ListRbsTable /> 
                    </Tab>

                    <Tab label='JqxTable'>
                        {/* <ListFilter /> */}
                        <ListJqxTable />
                    </Tab>

                    <Tab label='10*10'>
                        10*10
                        {/*<Grid />*/} {/* <LogSearch /> */}
                    </Tab>
                </Tabs>

          </div>

          {/* Right Panel =========================================================== */}
          <div>

             {/* <LogEdit /> */}
<Tabs>
  <Tab label='Tab 1'>
    Tab 1 content
  </Tab>
  <Tab label='Tab 2'>
    Tab 2 content
  </Tab>
  <Tab label='Tab 3' disabled>
    Tab 3 content
  </Tab>
</Tabs>;
          </div>
      </JqxSplitter>
);

export default ListDetailMain;

