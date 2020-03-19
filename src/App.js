import React from 'react';
import Main from '../src/components/MainComponent';
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
    return <div>
      <Main />
    </div>
  }
};

export default App;
