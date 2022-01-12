import { useState } from "react";

//const inputValue = "Haho";

const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
  {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210km/h"},
  {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220km/h"},
]

const listHandle = () => {
  const newArray = []
  for (const car of cars) {
    
    newArray.push(<p key={car.model}>{car.brand} - {car.model} ({car.topSpeed})</p>)
  }
  return newArray;
}




const App = () => {  
  let [inputValue2, setValue] = useState("Szoveg");
  /*
  const addButton = () => {
      if (inputValue2.length <3){
        console.log(inputValue2);
        return (<div><button disabled>Submit</button><p>Min 3 charakter</p></div>);
      }
      return (<div><button>Submit</button></div>);
    
  }
*/
  

  return (
    <div>
      <p>Hello Word</p>
      <input type="text" value={inputValue2} onChange={(event) => {setValue(event.target.value)}}/>

      {/*addButton()*/}
      <button disabled={inputValue2.length<3}>Submit</button>
      {inputValue2.length <3 && <p>Min 3 char</p>}
      {/*
      {inputValue2.length >=3 && <button>Submit</button>}
      {inputValue2.length <3 && <button disabled>Submit</button>}
      {inputValue2.length <3 && <p>Min. 3 char</p>}
      */}
      {<hr/>}
      {cars.filter(car => car.brand.startsWith(inputValue2)).map((car) => { 
          return <div key={car.model}>{car.brand} - {car.model} ({car.topSpeed})</div> 
      })}
    </div>
  )
}


export default App;
