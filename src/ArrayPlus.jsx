import { useState } from "react";

const ArrayPlus = () => {
  const [food, setFood] = useState(["apple", "orange", "pineapple", "banana"]);

  const handleFoodChange = () => {
    const NewItem = document.getElementById("newItem").value;
    document.getElementById("newItem").value = "";

    setFood((f) => [...f, NewItem]);
  };

  const removeElement = (index) => {
    setFood(food.filter((_, i)=> i !== index))
  };

  return (
    <div>
      <ul>
        {food.map((food, index) => (
          <li key={index} onClick={() => removeElement(index)}>
            {" "}
            {food}{" "}
          </li>
        ))}
      </ul>
      <input type="text" id="newItem" />
      <button onClick={handleFoodChange}>Add New One</button>
    </div>
  );
};

export default ArrayPlus;

// input 可以帶出值
