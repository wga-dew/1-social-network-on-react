import React from 'react';
import { Route } from "react-router-dom";

import { Header, Navbar, Profile, Dialogs } from './components';
import './components/style.css';


const App = ({appState: {profilePage, dialogsPage}}) => {
  return (
    <div className="app-wrapper box">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Route path='/profile' render={() => <Profile state={profilePage}/>} exact/>
        <Route path='/dialogs' render={() => <Dialogs state={dialogsPage}/>} />
      </div>
    </div>
  );
};

export default App;
