import React, { memo } from 'react'

const AnotherComponent = () => {
  console.log('Memoized Component Rendered')
  return(
    <React.Fragment>
      This is AnotherComponent
    </React.Fragment>
  )
}

// const areEqual = (prevProps, nextProps) => {
//   // return true if component should not rerender
//   return true
// }

// export default memo(AnotherComponent, areEqual)


export default memo(AnotherComponent)