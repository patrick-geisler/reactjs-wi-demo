import React, { Component } from 'react'
import { MyContext } from './ColorContext'

// import { ContextConsumer } from './ColorContext'

// const Color = () => {
//   return(
//     <ContextConsumer>
//       {shoot => <p>{shoot}</p>}
//     </ContextConsumer>
//   )
// }

class Color extends Component {
  static contextType = MyContext
  componentDidMount(){
    let value = this.context
    console.log(value)
  }
  render(){
    let value = this.context
    return(
      <p className='context'> { value } </p>
    )
  }
}

// class Color extends Component {
//   render(){
//     return(
//       <p> {(context) => context.value } </p>
//     )
//   }
// }

export default Color