import {useState} from 'react';

const App = () => {
  //let [isLandingPage, setMainDisplay] = useState(true);
  let [isLandingPage, setterF] = useState(true);
  
  /*
  const toogleDisplay = () => {
    setterF(!isLandingPage);
    //setMainDisplay((prevState) => !prevState);
  }
  */
  
  return (
    <div>
      <p>Hello Word</p>
      <div>
        {/*<Page/>*/}
        {/*Page()*/}
        {
          isLandingPage ? 
          <div>Landing Page</div> : 
          <div>Homepage</div>
        }
      </div>
      <br/>
      <button onClick={() => setterF(!isLandingPage)}>Click</button>
    </div>
  )
}

/*
const Page = () => {
  if (bool){
    return <div>Homepage</div>
  }
  else {
    return <div>Landing Page</div>
  }
}
*/
/*
const handleClick = () => {
  console.log(bool + ' volt');
  bool = !bool;
  console.log(bool + ' lett');
}

let bool = false;
const App = () => {
  return (
    <div>
    <p>Hello Word</p>
    <div>
        {
        bool ? 
          <div>Homegpage</div> : 
          <div>Landingpage</div>
        }
        {
      </div>
      <br/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
*/

export default App;
