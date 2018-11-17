import React, { Component } from 'react';
//import styleCSS from "./style.css"


const innerDiv = {
  width: '50%',
  marginLeft:'2%',
	marginRight: '2%',
  display: "inline",
  padding: '20px',
  color: '#333',
  textAlign: 'left'
 
};

const overview = {
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
  paddingTop: '12px'
};

const imageStyle = {
  
  maxWidth: '20vh',
  maxHeight: '20vh'
}

const spanStyle = {
  color: '#b93c49'
}

const h1Style = {
  fontSize: '4.0vh'

}


class Header extends Component {
    render() {
      return (
        <div style={overview}>
          <img style={imageStyle} src={require('./Images/Home.png')} alt=""/>
          <div style={innerDiv}>
            <h2><strong>Introducing</strong><h1 style={h1Style}><span style={spanStyle}>RooMates</span></h1></h2>
            <p>
                A cohesive app for roommates that allows its users to have automated and user defined chores/reminders, Grocries organizer, real time payments, and a simplified messaging thread between you and your roommates.
            </p>
            
          </div>
          
      </div>
      )
    }
}

export default Header;