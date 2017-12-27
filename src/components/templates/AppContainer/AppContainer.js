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
    let totalRentals = document.getElementById('totalRentals');
    totalRentals.innerHTML = total + " " + "total";

    let rentalStatus = data.find(e => { 
      return e.rate;    
    });

    // rentalStatus.forEach(rental => {
    //   console.log(rental);
    // });
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
