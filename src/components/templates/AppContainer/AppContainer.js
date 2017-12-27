// Modules
import React from 'react';
import Radium from 'radium';
import Table from './Table';
import Header from './Header';

// Component styles
import styles from './styles';

// Apis
import drivers from '../../../api/drivers.api';
import rentals from '../../../api/rentals.api';
import vehicles from '../../../api/vehicles.api';


rentals().then((data) => {
    let total = data.length;
    document.getElementById('totalRentals').innerHTML = total + " " + "total";
})

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
    <Header />
    <Table />
    </div>
  </div>
);

export default Radium(AppContainer);
