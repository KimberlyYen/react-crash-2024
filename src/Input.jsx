import { useState } from 'react'

const Input = () => {

  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState(1)
  const [ comment, setComment ] = useState('')
  const [ select, setSelect ] = useState('')
  const [ shopping, setShopping ] = useState('')
  


  const handleText = (e) => {
    setName(e.target.value)
  }

  const handleNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }

  const handleShipping = (e) => {
    setShopping(e.target.value)
  }

  return (
    <div>

        <input type="text" onChange={handleText}/>
        <p>Name: {name}</p>
        <hr />
        <input type="number" onChange={handleNumber}/>
        <p>Number: {number}</p>
        <hr />
        <textarea name="" id="" onChange={handleComment}
        placeholder='Enter'
        ></textarea>
        <p>{comment}</p>
        <select name="" id="" onChange={handleSelect}>
            <option value="VISA">VISA</option>
            <option value="Master Card">Master Card</option>
            <option value="LINE PAY">LINE PAY</option>
        </select>
        <p>{select}</p>

        <label htmlFor="" onChange={handleShipping}>
            <input type="radio" value={'Pick Up'}
            checked={shopping === 'Pick Up'}
            /> Pick Up
        </label>
        <label htmlFor="" onChange={handleShipping}>
        <input type="radio" value={'Delivery'}
            checked={shopping === 'Delivery'}
        /> Delivery
        </label>

        <p>
            {shopping}
        </p>
    </div>
  )
}

export default Input
