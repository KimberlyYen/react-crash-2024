import { useState } from "react";

const Count = () => {
  const [state, setState] = useState(0);
  const [name, setName] = useState('Paul')
  const [isEmployed, setIsEmployed] = useState(false)

  const handleClick = () => {
    setName((prev) => (prev === "Paul" ? "BRO" : "Paul"));
  };

  const updateName = (e) => {
    // e.target.textContent = 'Bob'
    setName('Bob')
  }

  const toggleEmployed = () => {
    setIsEmployed((prev) => !prev);
  };
  

  return (
    <div>
      <div className="countNumber">
        <h1>{state}</h1>
        <h1>{name}</h1>
        <h1>Employed: { isEmployed ? 'Yes' : 'No' } </h1>

        <div className="buttons">
          <button onClick={ () => setState(state + 1) } > + </button>
          <button onClick={ () => setState(0) }> reset </button>
          <button onClick={ () => setState(state - 1) } > - </button>
          <button onClick={ handleClick } > Re Name </button>
          <button onClick={ updateName }> updateName </button>
          <button onClick={ toggleEmployed }> still work </button>
        </div>
      </div>
    </div>
  );
};

// 點擊updateNmae
// 位置上的參數
// 改變成我給予的參數

export default Count;
