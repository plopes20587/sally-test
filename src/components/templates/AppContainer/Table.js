import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableExampleControlled extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
    }
  };
   
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {     
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Vehicle</TableHeaderColumn>
            <TableHeaderColumn>Driver</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Start</TableHeaderColumn>
            <TableHeaderColumn>Return</TableHeaderColumn>
            <TableHeaderColumn>Rate</TableHeaderColumn>            
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        { this.props.data.map(rental => {
          return (
            <TableRow key={rental.id} selected={this.isSelected()}>
              <TableRowColumn>{rental.status}</TableRowColumn>
              <TableRowColumn>{rental.vehicle}</TableRowColumn>
              <TableRowColumn>{rental.driver}</TableRowColumn>
              <TableRowColumn>{rental.email}</TableRowColumn>
              <TableRowColumn>{rental.start_date}</TableRowColumn>
              <TableRowColumn>{rental.end_date}</TableRowColumn>
              <TableRowColumn>{rental.rate}</TableRowColumn>
            </TableRow>
          )
        }) }
      </TableBody>
        </Table>
    );
  }
}