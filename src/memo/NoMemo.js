import React, { Component } from 'react';

const AnotherComponent = () => {
  console.log('Nonmemoized Component rendered')
  return(
    <React.Fragment>
      This is a non-memoized AnotherComponent
    </React.Fragment>
  )
}

export default class NoMemo extends Component {

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


