import React, { Component } from 'react';
import WorldMap from './WorldMap.js';
import menu from './menu.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        EMSPIRE
        <a href="profile">login</a>
      </div>
    )
  }
}

class App extends Component {
  state = {
    sidebarIsOpen: true
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <aside className={this.state.sidebarIsOpen ? "open" : "closed"}>
            <img src={menu} className="menu-button" onClick={() => { 
              this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen 
            })}}/>
            <div className="menu-bar"></div>
            <div className="Sidebar-header">
            </div>
          </aside>
          <WorldMap />
        </div>
      </div>
    );
  }
}

export default App;
