import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';

import {Panel, Grid, Row, Col, Button, Checkbox} from 'react-bootstrap';

import {CONSTANT_LOG_TYPE, CONSTANT_STATE} from '../../api/logMainData';

const ListFilter = ({actions, WaldorfSelected, OmahaSelected, maleSelected, femaleSelected, logType, logTypeID, logID}) => {
  
  const handleCenterCheckbox = (e) => {
    let target = e.target;
    let targetName   = target.name;

    if (targetName == 'WALDORF' ) { 
        actions.listActions.setLogsFilter({
            WaldorfSelected: target.checked,
            OmahaSelected,
            logType,
            logTypeID 
        });
    };

    if (targetName == 'OMAHA' ) { 
        actions.listActions.setLogsFilter({
            WaldorfSelected,
            OmahaSelected: target.checked,
            logType,
            logTypeID 
        });
    };

  };

  const handleLogTypeChange = (e) => {
    actions.listActions.setLogsFilter({
      WaldorfSelected,
      OmahaSelected,
      logType: e.target.value //logTypeID: parseInt(e.target.value)
    });

  };

  const handleGenderCheckbox = (e) => {
    let target = e.target;
    let targetName = target.name;

    if (targetName === 'MALE' ) { 
        actions.listActions.setLogsFilter({
            malefSelected: target.checked,
            femaleSelected,
            logType,
            logTypeID 
        });
    };

    if (targetName === 'FEMALE') {
        actions.listActions.setLogsFilter({
            maleSelected,
            femaleSelected: target.checked,
            logType,
            logTypeID 
        });
    };

  };
  const logTypes = CONSTANT_LOG_TYPE;
  const states = CONSTANT_STATE;

  return (
        
      <Panel >
        <Grid>
          <Row className="show-grid">
            <Col md={2}>
              Center:
            </Col> 
            <Col md={1}>
                <label>WA: 
                  <input type="checkbox" name="WALDORF" checked={WaldorfSelected} onChange = {handleCenterCheckbox} />
                </label>
            </Col>
            <Col md={1}>
                <label>OH: 
                  <input type="checkbox" name="OMAHA"   checked={OmahaSelected}   onChange = {handleCenterCheckbox} />
                </label>                
              </Col>
              <Col md={8}></Col>
          </Row>

          <Row className="show-grid">
            <Col md={2}>
              Type: 
            </Col>
            <Col md={2}>
              <select value={logType} onChange={handleLogTypeChange}>
                {logTypes.map( t => <option value={t.LogType} >{t.ID} - {t.Label}</option> )} 
              </select>
            </Col>
            <Col md={8}></Col>
          </Row>

          <Row className="show-grid">
            <Col md={2}>
              Gender:
            </Col> 
            <Col md={1}>
                <label>Male: 
                  <input type="checkbox" name="genderM"  checked={maleSelected}   onChange = {handleGenderCheckbox} />
                </label>
            </Col>
            <Col md={1}>
                <label>Female:
                  <input type="checkbox" name="genderF"  checked={femaleSelected} onChange = {handleGenderCheckbox} />
                </label>       
              </Col>
              <Col md={8}></Col>
          </Row>


          <Row className='show-grid'>
            <Col md={2}>
              US State:
            </Col>
            <Col md={2}>
              <select value={states} onChange={handleLogTypeChange}>
                {states.map(s => <option value={s.state} >{s.ID} - {s.Label}</option>)}
              </select>
            </Col>
            <Col md={8}></Col>
          </Row>
        </Grid>
      </Panel>
  );
};

const mapStateToProps = (state) => ({
  listState: state.reducerLog
});

const mapDispatchToProps = (dispatch) => ({
  actions: { editActions: bindActionCreators(EditActions, dispatch), 
             listActions: bindActionCreators(ListActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilter);



