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
  state = {
    selected: [1],
    showCheckboxes: false,
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
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(4)}>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(5)}>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}