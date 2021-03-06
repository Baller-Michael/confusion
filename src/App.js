import React from 'react';
import Main from '../src/components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';

import { Provider } from 'react-redux'
import './App.css'

const store = ConfigureStore();
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
