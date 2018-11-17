import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Item from './Item.js'

const mainDiv = {
  backgroundColor: '#fafaff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};


let appData = {
  "Messageing": {
    "title": 'Powerful grocery organizer',
    "description": 'Know exactly what you need for the house! Mark important items, get reminders when nearby stores, and recive payment when you pick up your roomates items. Groceries made simple.',
    "image": 'grocries.png' 
  },
  "Payments": {
    "title": 'Smart chores',
    "description": 'RooMate offers three types of chores: Automated, Standard and Self. With them you can be smart, but most importantly, fair about how you split and assign chores!',
    "image": 'Chores.gif'
    
  },
  "Reminders": {
    "title": 'Efficient Reminders.',
    "description":'Send, set and receive reminders for the house as well as reminders for yourself. Be efficient with all the reminders that pile up within your household.',
    "image": 'reminders.png'
  }
}

const carouselStyle  = {
  backgroundColor: '#fafaff',
  width: '100%',
  height:'50vh',
  margin: 'auto',
  textAlign: 'center',

  carouselControl: {
    color: '#bada55'
  }

};

class CaroItem extends Component {
    render() {
      return (
        <div style={mainDiv}>
          <Carousel style={carouselStyle} indicators={true}>

            <Carousel.Item>
              <Item data={appData.Reminders} left={true} bgColor="#c0c0c4"/>
            </Carousel.Item>
            
            <Carousel.Item style={carouselStyle}>
              <Item data={appData.Payments} bgColor="#c0c0c4"/>
            </Carousel.Item>

            <Carousel.Item>
              <Item data={appData.Messageing} left={true} bgColor="#c0c0c4"/>
            </Carousel.Item>

          </Carousel>
        </div>
      )
    }
}

export default CaroItem;