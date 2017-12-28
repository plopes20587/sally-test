// Modules
//import React from 'react';
import React, {Component} from 'react';
import Radium from 'radium';
import Table from './Table';
import Header from './Header';
import Filter from './Filter';

// Component styles
import styles from './styles';

// Apis
import rentals from '../../../api/rentals.api';


// rentals()
//   .then((data) => {
//     let total = data.length;
//     let totalRentals = document.getElementById('totalRentals');
//     totalRentals.innerHTML = total + " " + "total";

//     data.find(e => { 
//       return e;
//     });

//     // rentalStatus.forEach(rental => {
//     //   console.log(rental);
//     // });
// })

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  componentDidMount() {
    rentals()
    .then((data) => {
      this.setState({data});
    })
  }

  render() {
    const data = this.state.data;

    return (
      <div style={styles.container}>
      <div style={styles.content}>
      <Header totalRentals={data.length}/>
      <Filter />
      <Table />
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
