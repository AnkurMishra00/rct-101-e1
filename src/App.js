import React from "react";
import './App.css';
import AddTask from "./components/AddTask/AddTask";


function App() {
  return <div className="App">{<h1>TODO App with Item Count</h1>}
  <div className="Second">
    <div><AddTask  /></div>
    

  </div>
  
  </div>;
  
}

export default App;
