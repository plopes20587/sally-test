// Modules
import React from 'react';
import Radium from 'radium';
import Table from './Table';

// Component styles
import styles from './styles';

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
    <h1>Rentals</h1>
    <Table />
    </div>
  </div>
);

export default Radium(AppContainer);
