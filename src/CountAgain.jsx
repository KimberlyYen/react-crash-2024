import { useState } from "react";

const CountAgain = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(true);
  const [reName, setReName] = useState('Amy');

  const handleClick = () => {
    setName((prev) => !prev);
  };

  return (
    <div>
      <div className="countNumber">
        <h1> {count} </h1>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}> + </button>
          <button onClick={() => setCount(0)}> Reset </button>
          <button onClick={() => setCount(count - 1)}> - </button>
        </div>
        <h1>{name ? "Apple" : "Bob"}</h1>
        <div>
          <button onClick={handleClick}>Toggle Name</button>
        </div>
        <h1>{reName}</h1>
        <button onClick={() => setReName("Bob")}>Reset Name</button>
      </div>
    </div>
  );
};

export default CountAgain;
