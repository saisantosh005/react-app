import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <ul>
            <li>
                <Link to="/page-1">Page 1</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/CreateToDoList">CreateToDoList one</Link>
            </li>
            <li>
                <Link to="/WaterCountApp">WaterCountApp</Link>
            </li>
            <li>
                <Link to ="/FormComponents">form-Components</Link>
            </li>
            <li>
               <Link to="/CarsList">CarsList</Link>
            </li>
            <li>
                <Link to="/country-dashboard-app">CountriesDashboardApp</Link>
            </li>
            <li>
                <Link to="/emoji-game">Emoji Game</Link>
            </li>
            <li>
                <Link to="/CheckTheData">CheckTheData</Link>
            </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
