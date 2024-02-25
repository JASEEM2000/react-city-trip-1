import React, { Component } from 'react';
import './TripList.scss';
import Trip from '../Trip/trip';
import { tripData } from '../tripData';



export default class TripList extends Component {
  state = {
    trips: tripData
  };
  removeTrip = id => {
    const {trips} = this.state;
    const sortedTrips = trips.filter(trip=> trip.id !==id);
    this.setState({
      trips:sortedTrips
    });
  }
  render() {
    // console.log(this.state.tours);
    const {trips} = this.state;


    return (
      <section className='triplist'>
        {trips.map(trip =>{
          return(
            <Trip key={trip.id} trip={trip} removeTrips={this.removeTrip} /> 
          );
        })}
      
      </section>
    )
  }
}
