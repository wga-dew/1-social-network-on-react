import React from 'react';

import { Header, Navbar, Profile } from './components';
import './components/style.css';


const App = () => {
  return (
    <div className="app-wrapper box">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
