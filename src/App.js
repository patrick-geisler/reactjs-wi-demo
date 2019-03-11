import React, { Component } from 'react';
import './App.css';
import Memo from './memo/Memo'
import NoMemo from './memo/NoMemo'
import Lazy from './Lazy'
import Context from './Context'
import UseState from './UseState'
import UseEffect from './UseEffect'

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
        <UseState />
        <UseEffect className={'UseEffect'}/>
      </div>
    );
  }
}

export default App;
