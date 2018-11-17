import React, { Component } from 'react';
import styleCSS from "./style.css"


const navDiv = {
    width: '100vw',
    height: '6vh',
    backgroundColor: '#333333',
    fontSize: '1.8vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: "fixed",
    top: '0',
    zIndex: '1'
  };


const h1Left = {
    color: '#fafaff',
    float: 'left',
    fontSize: '1.7vh',
    marginRight: 'auto',
    paddingLeft: '20px',
    
}

class NavBar extends Component {
    render() {
      return (
        <div style={navDiv}>
            <h3 style={h1Left}>RooMate</h3>
            <nav>
                <ul>
                    <li><a id="menuNavBar" href="#OrganizationLink" style={styleCSS.menuNavBar} class="active">Organization</a></li>
                    <li><a id="menuNavBar" href="#PaymentsLink" style={styleCSS.menuNavBar} class="active">Payments</a></li>
                    <li><a id="menuNavBar" href="#MessagingLink" style={styleCSS.menuNavBar} class="active">Messaging</a></li>
                </ul>
            </nav>
      </div>
      )
    }
}

export default NavBar;