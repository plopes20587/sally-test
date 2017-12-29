import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import rentals from '../../../api/rentals.api';
import drivers from '../../../api/drivers.api';
import vehicles from '../../../api/vehicles.api';


export default class TableExampleControlled extends Component {
  state = {
    selected: [0],
    data: [],
  };

  componentDidMount() {
     Promise.all([rentals(), drivers(), vehicles()])
     .then(({rentalsData, driversData, vehiclesData }) => { 
      this.setState({ rentalsData, driversData, vehiclesData });
      console.log(rentalsData);
     });
    }
    
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {    
    const entries = this.state.data;
    const tableRow = entries.map((data) =>
      <TableRow selected={this.isSelected(0)}>
        <TableRowColumn key={data.status}>{data.status}</TableRowColumn>
        <TableRowColumn key={data.vehicle}>{data.vehicle}</TableRowColumn>
        <TableRowColumn key={data.driver}>{data.driver}</TableRowColumn>
        <TableRowColumn key={data.email}>{data.email}</TableRowColumn>
        <TableRowColumn key={data.start_date}>{data.start_date}</TableRowColumn>
        <TableRowColumn key={data.end_date}>{data.end_date}</TableRowColumn>
        <TableRowColumn key={data.rate}>{data.rate}</TableRowColumn>
      </TableRow >
    );
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
          {tableRow}
        </TableBody>
      </Table>
    );
  }
}