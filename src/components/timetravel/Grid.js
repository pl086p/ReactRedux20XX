import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import Row  from '../components/Row';
//import Cell from '../components/Cell';
import Row  from './Row';
import Cell from './Cell';
import * as GridActions from '../../actions/travelGridActions';

const Grid = ({actions, gridState}) => {
  let rows = [];
  let height = gridState.height;
  let width  = gridState.width;

  /* Loop through all the cells. */
  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {
      /* Add a `Cell` component for every column in the row. */
      row.push(
        <Cell
          key={x}
          /* Dispatch a TOGGLE_CELL action when a cell is clicked. */
          onClick={() => actions.toggleCell({x, y})}

          /* Fill the cell if the value is 1. */
          filled={gridState.cells[y * width + x] === 1}
        />
      );
    }

    /**
     * Create a `Row` component for every
     * row in the grid.
     */
    rows.push(<Row key={y}>{row}</Row>);
  }

  return <div>{rows}</div>;
};

/* ////////////////////////////////////////////////////////////////////////////////////////////////
 * mapping state and action
 * ////////////////////////////////////////////////////////////////////////////////////////////////
 * */

const mapStateToProps = (state) => ({
  gridState: state.reducerGrid
});

const mapDispatchToProps = (dispatch) => ({
  actions: { gridActions: bindActionCreators(GridActions, dispatch) }
});

/* Connect the component to the Redux store. */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

