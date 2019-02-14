import React, { Component } from 'react';
import './App.css';
import Memo from './memo/Memo'
import NoMemo from './memo/NoMemo'
import Lazy from './Lazy'
import Context from './Context'
import Hooks from './Hooks'

import { ContextProvider } from './ColorContext'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NoMemo />
        <Memo/>
        <Lazy />
        <ContextProvider value={'Orange'}>
          <Context />
        </ContextProvider>
        <Hooks />
      </div>
    );
  }
}

export default App;
