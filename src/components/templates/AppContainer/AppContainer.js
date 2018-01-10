// Modules
// import React from 'react';
// import Radium from 'radium';
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
      rentalsData: [],
      driversData: [],
      vehiclesData: [],
    };
  }
  
  componentDidMount() {
    rentals()
    .then((data) => {
      this.setState({ data });
    });

    Promise.all([rentals(), drivers(), vehicles()])
    .then(result => {
      const [ rentalsData, driversData, vehiclesData ] = result;
      this.setState({ rentalsData, driversData, vehiclesData });  
    });
  }

  render() {
    const data = this.state.data;
    const rentalsData = this.state.rentalsData.map((data) => {
      return data.status;
    });

    return (
      <div style={styles.container}>
      <div style={styles.content}>
        <Header totalRentals={data.length}/>
        <Filter />       
        <Table status={ rentalsData }
        />
      </div>
    </div>
    );
  }

}
// const AppContainer = () => (

//   <div style={styles.container}>
//     <div style={styles.content}>
//     <Header />
//     <Filter />
//     <Table/>
//     </div>
//   </div>
// );

//export default Radium(AppContainer);
