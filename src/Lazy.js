import React, { Component, lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'))

class Lazy extends Component {

  state = { 
    imageShowing: false
  }

  showImage = event => {
    event.preventDefault()
    this.setState({ imageShowing: true })
  }

  hideImage = event => {
    event.preventDefault()
    this.setState({ imageShowing: false })
  }

  render() {
    return (
      <Suspense fallback={<div />}>
        <button onClick={
          this.state.imageShowing ? this.hideImage : this.showImage} 
          className='lazy'>
          Toggle Component
        </ button>
        {this.state.imageShowing && <LazyComponent />}
      </Suspense>
    );
  }
}

export default Lazy
