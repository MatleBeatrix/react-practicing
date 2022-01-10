const carName = 'Opal';
const carNumber = 12;
const isCar = true;

const cars = ['Opal', 'BMW', 125, 'Volvo', false];
const man = {
  firstName: 'Joe',
  lastName: 'Smith'
};

const nullVariable = null; 
let udVar = undefined;

const myFunction = () => {
  return 'hello';
}; 

const carList = [
  {carName: 'Opal', doorNumber: 4},
  {carName: 'Skoda', doorNumber: 4},
  {carName: 'Mercedes', doorNumber: 5},
  {carName: 'BMW', doorNumber: 5},
  {carName: 'Trabant', doorNumber: 4}
];

const newArray = carList.map((car) => 
  (
    <div key={car.carName} className="carBrand2">
        <p><b>Márka:</b></p>
        <p><i>{car.carName}</i></p>
        <p><em>Ajtók száma: {car.doorNumber}</em></p>
      </div>
  )
);
//console.log(newArray);


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p className="par">Ez egy <br/>szöveg</p>
      <p>{cars}</p>
      <p>{man.firstName} {man.lastName}</p>
      <p>{nullVariable}{udVar}</p>
      {myFunction()}
      <div id="egyedi">Ez egy auto {carName} {carNumber +10} {isCar}</div>
      <input type="password" placeholder="min 6 karakter"/>
      <h3 className="carBrandTitle">CarBrand1</h3>
      <div className="carBrand1">
        <p><b>Márka:</b></p>
        <p><i>Opel</i></p>
        <p><em>Ajtók száma: 4</em></p>
      </div>
      <div className="carBrand1">
        <p><b>Márka:</b></p>
        <p><i>BMW</i></p>
        <p><em>Ajtók száma: 5</em></p>
      </div>
      <h3 className="carBrandTitle">CarBrand2</h3>
      {newArray}
      <h3 className="carBrandTitle">CarBrand3</h3>
      {
        carList.map((car) => 
        (
          <div key={car.carName} className={car.doorNumber === 5 ? 'carBrand3_5' : 'carBrand3_4'} >
              <p><b>Márka:</b></p>
              <p><i>{car.carName}</i></p>
              <p><em>Ajtók száma: {car.doorNumber<5 ? car.doorNumber : 'Not valid'}</em></p>
            </div>
        )
      )
      }
    </div>
  );
}

export default App;
