// Modules
import React, {Component} from 'react';
import Table from './Table';
import Header from './Header';
import Filter from './Filter';

// Component styles
import styles from './styles';

// Apis
import rentals from '../../../api/rentals.api';
import drivers from '../../../api/drivers.api';
import vehicles from '../../../api/vehicles.api';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  componentDidMount() {
    this.setData();
  }

  setData() {
    const dataArr = []; //create array to hold the data
    Promise.all([rentals(), drivers(), vehicles()])
      .then(result => {
        const [ rentalsData, driversData, vehiclesData ] = result;

        // iterate through rentalsData, clone each object and reassign property values as needed
        rentalsData.forEach(rentalEntryObj => {
          let rentalEntryObjCopy = Object.create(rentalEntryObj); //clone object to avoid mutation

          // match up rentalEntryObjCopy.driver to driversData.id, if a match, copy properties to appropriate rentalEntryObjCopy props
          driversData.forEach(driverItem => {
            if(rentalEntryObjCopy.driver === driverItem.id ) {
              rentalEntryObjCopy.driver = (driverItem.first_name || driverItem.last_name) ? `${driverItem.first_name} ${driverItem.last_name}`.trim() : 'NA';
              rentalEntryObjCopy.email = driverItem.email ? driverItem.email : 'NA';
            }
          });

          // match up rentalEntryObjCopy.vehicle to vehicleItem.id, if a match, copy properties to appropriate rentalEntryObjCopy props
          vehiclesData.forEach(vehicleItem => {
            if(rentalEntryObjCopy.vehicle === vehicleItem.id ) {
              rentalEntryObjCopy.vehicle = vehicleItem.brand ? vehicleItem.brand : 'NA';
            }
          });

          dataArr.push(rentalEntryObjCopy);
        });
        this.setState({data: dataArr});
        console.log(this.state.data)
    });
  }

  render() {
    if (!this.state.data) return null; //don't render if promise hasn't resolved
    return (
      <div style={styles.container}>
      <div style={styles.content}>
        <Header totalRentals={this.state.data.length}/>
        <Filter />
        <Table data={this.state.data}/>;
      </div>
    </div>
    );
  }
}

//export default Radium(AppContainer);



