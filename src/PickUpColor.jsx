import { useState } from 'react'

const PickUpColor = () => {

  const [ color , setColor] =  useState('#FFFFFF')

  const handleColor = (e) => {
    setColor(e.target.value)
  }
    
  return (
    <div>
      <div className="color-box" id="colorBox"></div>
      <input type="color" id="colorPicker" value={ color } onChange={handleColor}/>
      <p>選擇的顏色: <span id="colorValue">{ color }</span></p>
    </div>
  )
}

export default PickUpColor
