import { useState } from "react";

const PickUpColor = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <body style={{backgroundColor: color}}>
        <div className="color-box" id="colorBox"></div>
        <p>
          選擇的顏色: <span id="colorValue">{color}</span>
        </p>
        <input type="color" id="colorPicker" value={color} onChange={handleColor} />

      </body>
    </div>
  );
};

export default PickUpColor;
