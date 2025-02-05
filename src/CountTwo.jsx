import { useState } from 'react'

const CountTwo = () => {
  
  const [name, setName] = useState(false)  

  const handleClick = () => {
    setName((prev) => !prev)
  }

  return (
    <div>
      <h1> { name ? 'Amy' : 'Bob' } </h1>
      <div>
        <button onClick={handleClick}> ReName </button>
      </div>
    </div>
  )
}

export default CountTwo
