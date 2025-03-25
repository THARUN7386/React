import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [name, setName]=useState("");
  const [darkMode, setDarkmode]=useState(false);


  return (
    <div class= {darkMode?"container dark":"container"}>
     <h1>Welcome to student Dashboard</h1>
     <input 
     type="text"
     placeholder="Enter your name"
     className="name-input"
      value={name}
      onChange={(e)=>setName(e.target.value)}>
     </input>
     <p>Hello, {name} </p>
     <button className="toggle-btn"
      onClick={() =>setDarkmode(!darkMode)}>
     {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
     </button>
    </div>
    
  );
}

export default App;