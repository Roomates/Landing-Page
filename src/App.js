import React, { Component } from 'react';
import './App.css';
import './components/header.js'
import Header from './components/header.js';
import NavBar from './components/navbar';
import CaroItem from './components/CarouselBootstrap';
import Item from './components/Item';
import Subscribe from './components/subscribe';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-129345864-1');
ReactGA.pageview(window.location.pathname + window.location.search);
// Data for app {Title, Description, local image url}
let appData = {
    "Messageing": {
      "title": 'Messages with no distractions.',
      "description": 'Our app allows you to get straight to the point with your rommates without any extra distractions. No status updates, no stories, just messages.',
      "image": 'messaging.png' 
    },
    "Payments": {
      "title": 'Payments just for home.',
      "description": 'Make quick and easy payments to each other with only few taps of a button. You can request and send money to each other and the payments are all private to the household.',
      "image": 'finance.gif'
      
    },
    "Reminders": {
      "title": 'Efficient Reminders.',
      "description":'Set self reminders as well as house reminders. Be efficient with all the reminders that pile up within your household.',
      "image": 'reminders.png'
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar/>

        <div id="topHeader"/>
        <Header/>
        
        <div id="OrganizationLink"/> 
        <CaroItem/>

        <div id="PaymentsLink"/>
        <Item data={appData.Payments} left={true} bgColor="#d5e3ea"  />
        
        <div id="MessagingLink"/>
        <Item data={appData.Messageing} left={false} bgColor="#fafaff" />


        <Subscribe/>
      </div>
    );
  }
}

export default App;
