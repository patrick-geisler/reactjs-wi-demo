import React, { useState } from "react";

const Hooks = () => {
  const [name, setName] = useState("Hooks Rule");

  const handleInput = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <input onChange={handleInput} value={name} />
    </div>
  );
};

export default Hooks;
