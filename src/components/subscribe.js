import React, { Component } from 'react';
//import styleCSS from "./style.css"


const innerDiv = {
    width: '50%',
    marginLeft:'2%',
    marginRight: '2%',
    display: "inline",
    paddingTop: '30px',
    color: '#333',
    textAlign: 'center',
    textDecoration: 'none'
  
};

const mainDiv = {
  backgroundColor: '#333',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
  padding: "40px",
  paddingTop: "40px",

  

};


const spanStyle = {
  color: '#fafaff',
}




class Subscribe extends Component {

    render() {
        return(
        <div style={mainDiv}>
        
        <div style={innerDiv}>
            <h1 style={spanStyle}>Subscribe to our Startup!</h1>
            <br/>
            <p style={spanStyle}>Get development updates, access to beta testing, new features early and more when you sign up! </p>

        
        <br/>
        <br/>
        <a href="http://eepurl.com/dNNU-2">
            <button class="w3-button w3-xlarge w3-circle w3-red w3-card-4">+</button>
        </a>

        </div>
        </div>
        )
    }

}

export default Subscribe;