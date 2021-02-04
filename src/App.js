import Weather from "./Weather";
import './App.css';

function App() {
  return ( 
  <div className="App">  

  
  <div className="container">
  
    <Weather defaultCity="Amsterdam"/>
   
  </div> 
  <footer>
   This page was reated by <a style={{marginRight:"6px", marginLeft:"6px"}} href="https://www.linkedin.com/in/blancaperezsoler/" target="_blank" rel="noreferrer">Blanca Perez Soler </a> {" "} with <a style={{marginLeft:"6px"}} href="https://github.com/BlancaPerezSoler/react-final-project" target="_blank"rel="noreferrer">open-source at GitHub</a>
    </footer>
  </div>
  );  
}


export default App;
