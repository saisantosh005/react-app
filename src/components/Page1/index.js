import React from "react";
// import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Page1() {
    return (
        // <div className="bg-black h-screen flex justify-center items-center flex-col text-white">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h1>Page 1</h1>
        //     <ul>
            
        //     </ul>
        // </div>
        <ul className="m-20 font-bold leading-8">
            <li>
                <Link to="/practice-advanced-concepts">practice advanced concepts</Link>
            </li>
            
            <li>
                <Link to="/users">UsersPage</Link>
            </li>
            <li>
                <Link to="/ecommerce-store/sign-in">ECommerceApp</Link>
            </li>
            <li>
                <Link to="/Rest-api-practice">Rest Api</Link>
            </li>
            
            <li>
                <Link to="/New-Todo-List">New To do list App</Link>
            </li>
            
            <li>
                <Link to="/Mobx-todo-list">Mobx-todo-list</Link>
            </li>
            <li>
                <Link to="/Event-List-App">Event-list-app</Link>
            </li>
            <li>
                <Link to="/Practice">Practice it</Link>
            </li>
            
            
            <li>
                <Link to="/CreateToDoList">CreateToDoList one</Link>
            </li>
            
             <li>
                <Link to="/Counter-app">CounterApp</Link>
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
            <li>
                <Link to="/WaterCountApp">WaterCountApp</Link>
            </li>
            
            <li>
                <Link to="/Grid-memory-game">Grid Memory Game</Link>
            </li>
            
        </ul>
      
      
      );
}

export default Page1;
