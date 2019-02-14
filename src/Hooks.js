import React, { useState } from 'react'

const Hooks = () => {
  const [name, setName] = useState('Hooks Rule')

  function handleNameChange(e){
    setName(e.target.value)
  }

  return(
    <React.Fragment>
      <h1>
        {name}
      </h1>
      <input 
        onChange={handleNameChange} 
        value={name}
      />
    </React.Fragment>
  )
}

export default Hooks