import { useState, useEffect, useRef } from "react";

const UseRefExample = () => {

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)


  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow"
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""

  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = "yellow"
    inputRef3.current.style.backgroundColor = ""

  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = "yellow"

  }

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  return (
    <div>
        <button onClick={handleClick1}>
          Click ME 1!
        </button>
        <input ref={inputRef1} />

        <button onClick={handleClick2}>
          Click ME 2!
        </button>
        <input ref={inputRef2} />

        <button onClick={handleClick3}>
          Click ME 3!
        </button>
        <input ref={inputRef3} />
    </div>
  )
};

export default UseRefExample;
