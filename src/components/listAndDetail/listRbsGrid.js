import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {Grid, Row, Col} from 'react-bootstrap';

import * as SizeActions from '../../actions/travelGridActions';
import * as ListActions from '../../actions/logListActions';
import {CONSTANT_CUSTOMER_DATA} from '../../api/constData';

const style = {
  margin: '10px 0'
};

// const ListRbsGrid = ({actions, maleSelected, femaleSelected, logType}) => {
const ListRbsGrid = ({actions, listState}) => {
  let originData = CONSTANT_CUSTOMER_DATA;

  // let filterMale = maleSelected ? 'M' : 'No';
  // let filterFemale = femaleSelected ? 'F' : 'No';
  // let filteredData = originData.filter(function(e) { return (e.gender === filterMale || e.gender === filterFemale); });
  // filteredData = filteredData.filter(function(e) { return (e.logType === logType || logType === 'ALL'); });
  let filteredData = originData;

  return (
    <div style={style}>

        <h4>Using data: CONSTANT_CUSTOMER_DATA </h4>
        <Scrollbars style={{height: 200} } >
          <Grid>
            <Row className='show-grid' >
                <Col md={1}>ID</Col>
                <Col md={2}>Customer-Name</Col>
                <Col md={1}>Gender</Col>
                <Col md={1}>State</Col>
              </Row>

              {filteredData.map(e =>
              <Row className='show-grid' onClick = { () => onLogListTableRowSelect(e.id) }>
                <Col md={1}>{e.id}</Col>
                <Col md={2}>{e.name}</Col>
                <Col md={1}>{e.gender}</Col>
                <Col md={1}>{e.state}</Col>
              </Row>
              )}
          </Grid>
        </Scrollbars>
    </div>
  );
};

/** ////////////////////////////////////////////////////////////////////////////////////////////
 * Map the states and actions to props.
 */
const mapStateToProps = (state) => ({
  listState: state.reducerLog
});

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
)(ListRbsGrid);
