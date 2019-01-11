import React, { Component } from 'react';
import './App.css';
import Memo from './Memo'
import Lazy from './Lazy'
import Context from './Context'

import { ContextProvider } from './ColorContext'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Memo />
        <Lazy />
        <ContextProvider value={'Orange'}>
          <Context />
        </ContextProvider>
      </div>
    );
  }
}

export default App;
