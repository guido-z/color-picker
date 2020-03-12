import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ColorArea from './components/color-area/ColorArea';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedColor: 'black'
    };

    this.handleColorSelection = this.handleColorSelection.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Sidebar colorSelection={this.handleColorSelection} />
        <ColorArea background={this.state.selectedColor}/>
      </div>
    );
  }

  handleColorSelection(color) {
    this.setState({
      selectedColor: color
    });
  }

}

export default App;
