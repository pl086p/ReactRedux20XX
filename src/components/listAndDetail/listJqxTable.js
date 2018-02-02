import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EmpActions from '../../actions/actionOnEmployee';
// import * as ListActions from '../../actions/logListActions';


import JqxGrid from '../../lib/jqwidgets-react//react_jqxgrid.js';

const ListJqxTable = ({actions, empState}) => {

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // events
  ////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Data and Default
  ////////////////////////////////////////////////////////////////////////////////////////////////

    if (empState.stateEmpsToLoad) {
      actions.empActions.getEmpsFromAPI();
    };

    let data = empState.stateEmpsFromAPI;

    let source =
    {
        datatype: "json",
        localdata: data,
        datafields: [
            { name: 'id', type: 'int'},
            { name: 'name', type: 'string' }
        ]
    };
 
    let dataAdapter = new $.jqx.dataAdapter(source);
 
    let columns =
    [
      { text: 'Emp ID',   datafield: 'id', width: 50 },
      { text: 'Emp Name', datafield: 'name', width: 100 }
    ];
 
   
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // render components
  ////////////////////////////////////////////////////////////////////////////////////////////////

  return (
      <div>
        <ul>
            {data.map(function(e){
              return <li> {e.name}</li>
            })}
        </ul>
        {/*}
        <JqxGrid width={200} source={dataAdapter} pageable={true}
             sortable={true} altrows={true} enabletooltips={true}
             autoheight={true} editable={true} columns={columns}
        />
        */}
      </div>
  );
};

/* ////////////////////////////////////////////////////////////////////////////////////////////////
 * mapping state and action
 * ////////////////////////////////////////////////////////////////////////////////////////////////
 * */

const mapStateToProps = (state) => ({
  empState: state.reducerEmp
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(Actions, dispatch)
  actions: { empActions: bindActionCreators(EmpActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListJqxTable);
