import Weather from "./Weather";
import './App.css';

function App() {
  return ( 
  <div className="App">  

  
  <div className="container">
  
    <Weather defaultCity="Amsterdam"/>
   
  </div> 
  <footer>
   Created by <a style={{marginLeft:"6px"}} href="https://www.linkedin.com/in/blancaperezsoler/" target="_blank" rel="noreferrer">Blanca Perez Soler </a>.<a style={{marginLeft:"6px"}} href="https://github.com/BlancaPerezSoler/react-final-project" target="_blank"rel="noreferrer">Open source</a>
    </footer>
  </div>
  );  
}


export default App;
