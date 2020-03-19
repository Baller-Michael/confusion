import React from 'react';
import Main from '../src/components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
