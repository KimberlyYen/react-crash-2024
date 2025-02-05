import { useState } from "react";

const MyComponents = () => {
  const [car, setCar] = useState({ car: "toyota", year: 2024, modal: "musting" });


  function handleYear (e){
    setCar({...car, year: e.target.value})
  }
  
  function handleCar (e){
    setCar({...car,car: e.target.value})
  }

  function handleModal (e){
    setCar({...car,modal: e.target.value})
  }

  return (
    <div>
      <p>{car.year}</p>
      <p>{car.car}</p>
      <p>{car.modal}</p>

      <input type="number" value={car.year} onChange={handleYear}/>
      <input type="text" value={car.car} onChange={handleCar}/>
      <input type="text" value={car.modal} onChange={handleModal}/>


    </div>
  );
};

export default MyComponents;
