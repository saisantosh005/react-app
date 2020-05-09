import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import {Redirect} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage.js';
import {getAccessToken,clearUserSession} from '../../utils/StorageUtils.js';
class  HomePage extends React.Component {
    
    gotoGridScreenIfLoggedIN=()=>{
        return(
            <Redirect
                to={{
                    pathname:'/Login-page',
                }}
            />
        );
    }
    
    
    expireToken=()=>{
        clearUserSession();
    }
    
    render(){
        // if(getAccessToken()===undefined){
        //     return(
        //         this.gotoGridScreenIfLoggedIN()
        //     );
        // }
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a  className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <button onClick={this.expireToken}>setAccessToken</button>
                <ul>
                    <li> <Link to="/page-1">Page 1</Link> </li>
                    <li> <Link to="/">Home</Link> </li>
                </ul>
            </header>
        </div>
    );
  }
}

export default HomePage;

// class HomePage extends React.Component{
//     gotoGridScreenIfLoggedIN = ()=>{
//         return(
//             <Redirect
//             to={{
//                 pathname:'/grid-game',
//             }}/>);
//     }
//     render(){
//         if(true){
//             return this.gotoGridScreenIfLoggedIN();
//         }
//         return(
//              <ul>
//             <li>
//                 <Link to="/page-1">Page 1</Link>
//             </li>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
            
            
//         </ul>
//             );
//     }
// }
// export default HomePage;
