import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import { Panel, Form, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import JqxSplitter from '../../lib/jqwidgets-react/react_jqxsplitter.js';
// import JqxTree     from '../../lib/jqwidgets-react/react_jqxtree.js';
// import JqxExpander from '../../lib/jqwidgets-react/react_jqxexpander.js';
// import JqxListBox  from '../../lib/jqwidgets-react/react_jqxlistbox.js';
// import JqxPanel    from '../../lib/jqwidgets-react/react_jqxpanel.js';

import Grid    from './Grid';
import SetSize from './SetSize';
import * as GridActions from '../../actions/travelGridActions';

const AppTimeTravel = ({actions, gridState}) => {
  return (
     <JqxSplitter
          width={800} height={300} orientation={'vertical'}
          panels={[{ size: 200, min: 100, collapsible: true }, {min: 200, collapsible: false}]} >

          {/* Left Panel ============================================================ */}
          {/* tab bsStyle = tabs (default)/pills (blue button) */}
          <div>
                <Tabs defaultActiveKey={1} id='uncontrolled-tab' bsStyle='tabs' bsSize='xsmall'>
                    <Tab eventKey={1} title='Set Size'>
                          <SetSize />
                    </Tab>

                    <Tab eventKey={2} title='Set Cell'>
                        {/* <Grid />*/}
                    </Tab>
                </Tabs>

          </div>

          {/* Right Panel =========================================================== */}
          <div>
              {/* <Grid />*/}
          </div>
      </JqxSplitter>
);
};

/* ////////////////////////////////////////////////////////////////////////////////////////////////
 * mapping state and action
 * ////////////////////////////////////////////////////////////////////////////////////////////////
 * */

const mapStateToProps = (state) => ({
  gridState: state.reducerGrid
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(Actions, dispatch)
  actions: { gridActions: bindActionCreators(GridActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTimeTravel);
