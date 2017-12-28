// Modules
import React from 'react';
import Radium from 'radium';
import Table from './Table';
import Header from './Header';
import Filter from './Filter';

// Component styles
import styles from './styles';

// Apis
import rentals from '../../../api/rentals.api';


rentals()
  .then((data) => {
    let total = data.length;
    let totalRentals = document.getElementById('totalRentals');
    totalRentals.innerHTML = total + " " + "total";

    data.find(e => { 
      console.log(e.status);
    });

    // rentalStatus.forEach(rental => {
    //   console.log(rental);
    // });
})

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
    <Header />
    <Filter />
    <Table />
    </div>
  </div>
);

export default Radium(AppContainer);
