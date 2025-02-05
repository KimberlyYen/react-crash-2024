import { useState } from "react";

const Array = () => {

    const [ food , setFood ] = useState(['apple','orange','pineapple','banana'])
    // const food = ['apple','orange','pineapple','banana']

    const [newItem, setNewItem] = useState('');

    const handlePlus = () => {
        if ( newItem !== '') {
            setFood( prev => [ ...prev, newItem ])
            setNewItem('')
        }
    }

  return (
    <div>
      <ul>
        {food.map(item => (<li key={item}> {item} </li>))}
      </ul>
      <input 
        type="text" 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        /> 
              {newItem}
      <button onClick={handlePlus}>Plus</button>
    </div>
  )
}

export default Array
