import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List'
import Info from './components/Info'
import Selections from './components/Selections'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      selectedType: '',
      results: [],
      selectedRepresentative: {
        name: '',
        district: '',
        phone: '',
        office: ''
      }
    }
  }

  changeSelectedRep = (selectedRepresentative) => {
    this.setState({
      selectedRepresentative
    })
  }

  updateState = (newState) => {
    this.setState(newState)
  }

  render() {
    return (
      <div style={{padding: 50}}>
        <h1 style={{color: '#1a73e8'}}>Who's My Representative</h1>
        <Selections updateAppState={this.updateState} />
        <div style={{display: 'flex', width: '100%'}}>
          <List { ...this.state }  handleRepClick={this.changeSelectedRep} style={{flex: 1}}/>
          <Info representative={this.state.selectedRepresentative} style={{flex: 1}}/>
        </div>
      </div>
    );
  }
}

export default App;
