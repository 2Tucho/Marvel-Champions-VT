import React from "react";
import { useState } from "react";

function LifeCounter() {

  const [count, setCount] = useState(0)

  return <div id="lifeCounter">
      <p>HP:</p>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        +
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        -
      </button>
  </div>;

}

export default LifeCounter;
