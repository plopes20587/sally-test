import React from 'react';


export default (props) => (
  <div className ="Header">
    <h1>Rentals</h1>
    <p>{props.totalRentals} total</p>
  </div>
);