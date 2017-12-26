// Modules
import React from 'react';
import Radium from 'radium';

// Component styles
import styles from './styles';

const AppContainer = () => (
  <div style={styles.container}>
    <div style={styles.content}>
    <h1>Rentals</h1>
    <div id="totalDrivers"></div>
    <table>
      <tbody>
        <tr>
          <th>Status</th>
          <th>Vehicle</th>
          <th>Driver</th>
          <th>Email</th>
          <th>Start</th>
          <th>Return</th>
          <th>Rate</th>
        </tr>
        <tr>
          <td id="">The XMLator</td>
          <td>Standards compliance</td>
          <td>Sloppy Code Boy</td>
          <td>Standards compliance</td>
          <td>Sloppy Code Boy</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
);

export default Radium(AppContainer);
