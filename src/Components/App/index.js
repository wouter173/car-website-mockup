import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import { Performance, Quality, Charging, AutoPilot } from '../Section';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Performance />
      <Quality/>
      <Charging />
      <AutoPilot />
      <Footer />
    </div>
  );
}

export default App;
