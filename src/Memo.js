import React, { Component } from 'react';
import AnotherComponent from './AnotherComponent'

class Memo extends Component {

  state = { 
    count: 0
  }

  handleClick = event => {
    event.preventDefault()
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className='memo'>
          {this.state.count}
          <button onClick={this.handleClick}>
            Increase Count
          </ button>
          <AnotherComponent text={'Another Component'}/>
      </div>
    );
  }
}

export default Memo;
