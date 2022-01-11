import {useState} from 'react';

const App = () => {
  let [isLandingPage, setterF] = useState(true);
  let [pageName, setPageName] = useState('home');

  //let shouldShowHomepage = pageName === 'about';  //igaz vagy hamis értéket add vissza
  
  const toogleDisplay = (text) => {
    setterF(!isLandingPage);
    console.log(text);
  }
  
  
  return (
    <div>
      <p>Hello Word</p>
      <div>
        {
          isLandingPage ? 
          <div>Landing Page</div> : 
          <div>Homepage</div>
        }
      </div>
      <button onClick={() => setterF(!isLandingPage)}>Click</button>
      <button onClick={toogleDisplay}>Click</button>
      <hr/>
      <button onClick={()=> {setPageName("home")}}>Home</button>
      <button onClick={()=> {setPageName("about")}}>About</button>
      <button onClick={()=> {setPageName("landing")}}>Landing</button>
      <br/><br/>
      <div className='content'>
        {pageName === "home" && <div>Content of Homepage<h1>Welcome to the Homepage!</h1></div>}
        {pageName === "about" && <div>Content of About Page<h2>This page is very cool</h2></div>}
        {pageName === "landing" && <div>Content of Landing Page <br/><br/><input type="text" placeholder='type'/></div>}
      </div>
      <hr/>
    </div>
  )
}


export default App;
