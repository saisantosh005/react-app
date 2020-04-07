
import React from 'react';

import {
  Link
} from "react-router-dom";


class Home extends React.Component{
    
    render(){
        return (
        <div>
        
        <nav> 
          <ul>
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
        </nav>
        </div>
            );
    }
}

export {Home};