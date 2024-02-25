import React, { Component } from 'react';
import Navbar from "./components/Navbar/navbar";
import './App.scss';
import TripList from "./components/TripList";




class App extends Component {
  render() {
    return( 
    <main>
      <Navbar />
      <TripList />

    </main>
    );
  }    
}

export default App;
