import React, { useState } from 'react'

const Hooks = () => {
  const [name, setName] = useState('Hooks Rule')

  function handleInput(e){
    setName(e.target.value)
  }

  return(
    <React.Fragment>
      <h1>
        {name}
      </h1>
      <input 
        onChange={handleInput} 
        value={name}
      />
    </React.Fragment>
  )
}

export default Hooks