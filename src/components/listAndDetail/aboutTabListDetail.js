import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SizeActions from '../../actions/travelGridActions';
import * as ListActions from '../../actions/logListActions';


const style = {
  margin: '10px 0'
};

const AboutTabListDetail = () => {

  return (
    <div style={style}>
        <h5>About List-Detail Tab</h5>
        - Spliter: with  JqxSplitter<br />
        - Tabs: with react-bootstrap<br />
        - Rbs-Grid: with react-bootstrap Grid<br />
        - Rbs-Table: with react-bootstrap-table<br />
        - JqxTable: with react_jqxgrid.js<br />
    </div>
  );
};

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(Actions, dispatch)
  actions: { sizeActions: bindActionCreators(SizeActions, dispatch), listActions: bindActionCreators(ListActions, dispatch) }
});

/**
 * Connect the component to
 * the Redux Store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutTabListDetail);
