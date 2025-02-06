import { useState } from "react";

const UpdateArrayOfObject = () => {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModal, setCarModal] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear, 
      make: carMake,  
      model: carModal}

      setCar(c => [...c, newCar])

      setCarYear(new Date().getFullYear())
      setCarMake("")
      setCarModal("")
  }

  function handleRemoveCar(index) {
    setCar(c => c.filter((_, i) => i !== index ))
  }

  function handleYearChange(event) {
    setCarYear(event.target.value)
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value)
  }

  function handleModelChange(event) {
    setCarModal(event.target.value)
  }
    
  return (
    <div>
      <h2>List of Car Object</h2>
      <ul>
        {car.map((car, index) => 
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        )}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" />
      <br />
      <input type="text" value={carModal} onChange={handleModelChange} placeholder="Enter Car Modal" />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default UpdateArrayOfObject;
