import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// import rentals from '../../../api/rentals.api';
// import drivers from '../../../api/drivers.api';
// import vehicles from '../../../api/vehicles.api';

export default class TableExampleControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [0],
    }
  };

  // componentDidMount() {
  //   Promise.all([rentals(), drivers(), vehicles()])
  //   .then(result => {
  //     const [ rentalsData, driversData, vehiclesData ] = result;
  //     this.setState({ rentalsData,driversData, vehiclesData });  
  //   });
  // };
   
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
            <TableRowColumn>{this.props.status}</TableRowColumn>  
            <TableRowColumn>{this.props.driver}</TableRowColumn>         
          </TableRow>    
        </TableBody>
        </Table>
    );
  }
}