import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {CreateToDoList} from './components/toDoList/index.js';
import { CarsList } from './components/CarsList/carsList.js';
import {WaterCountApp} from './components/waterCount/waterApp.js';
import {FormComponents}from './components/formComponents/index.js';
import {CountriesDashboardApp} from'./components/project/countryDashboard/CountriesDashboardApp.js';
import CountryDetails from './components/project/countryDetails/CountryDetails.js';
import {EmojiGame} from './components/assignment-5/EmojiGame/EmojiGame.js';
// import {Home} from './home.js';
// import Page1 from "./components/Page1";
// import {CheckTheData} from'./components/CheckTheData/CheckTheData.js';

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";
class App extends React.Component{
  state={
        selectedTheme:"light",
    }
    
    changeSelectedTheme=()=>{
        this.setState({
            selectedTheme:this.state.selectedTheme==="light"?"dark":"light",
        });
    }
    static themeObject= {
        "light":{
            "themeName":"light Mode",
            "background":"whitesmoke",
            "selectedBackgrounds":"white",
            color:"black",
            border:"lightgrey",
        },
        "dark":{
            "themeName":"Dark Mode",
            "selectedBackgrounds":"#223c54",
            "background":"#2a3c4d",
            color:"white",
            border:"black",
        }
    };
    render(){
        let themeObject=App.themeObject;
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/page-1">
                    <Page1 />
                </Route>    
                <Route path="/CarsList">
                    <CarsList />
                </Route>
                <Route path="/CreateToDoList">
                    <CreateToDoList />
                </Route>
                <Route path="/FormComponents">
                    <FormComponents heading="Form Components" />
                </Route>
                <Route path="/WaterCountApp">
                    <WaterCountApp />
                </Route>
                <Route exact path="/emoji-game">
                    <EmojiGame />
                </Route>
                <Route exact path="/country-dashboard-app">
                    <CountriesDashboardApp themeObject={themeObject[this.state.selectedTheme]} changeSelectedTheme={this.changeSelectedTheme} />
                </Route>
                <Route  exact path="/country-dashboard-app/details/:alpha3code">
                    <CountryDetails themeObject={themeObject[this.state.selectedTheme]} changeSelectedTheme={this.changeSelectedTheme}/>
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
    </Router>
  );
        }
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';
// import {CreateToDoList} from './components/toDoList/index.js';
// import { CarsList } from './components/CarsList/carsList.js';
// import {WaterCountApp} from './components/waterCount/waterApp.js';
// import {FormComponents}from './components/formComponents/index.js';
// import {CountriesDashboardApp} from'./components/project/countryDashboard/CountriesDashboardApp.js';
// import CountryDetails from './components/project/countryDetails/CountryDetails.js';
// import {EmojiGame} from './components/assignment-5/EmojiGame/EmojiGame.js';
// import {Home} from './home.js';
// import Page1 from "./components/Page1";
// import {CheckTheData} from'./components/CheckTheData/CheckTheData.js';
// import "./App.css";

// class App extends React.Component{
//   state={
//         selectedTheme:"light",
//     }
    
//     changeSelectedTheme=()=>{
//         this.setState({
//             selectedTheme:this.state.selectedTheme==="light"?"dark":"light",
//         });
//     }
//     static themeObject= {
//             "light":{
//                 "themeName":"light Mode",
//                 "background":"whitesmoke",
//                 "selectedBackgrounds":"white",
//                 color:"black",
//                 border:"lightgrey",
//             },
//             "dark":{
//                 "themeName":"Dark Mode",
//                 "selectedBackgrounds":"#223c54",
//                 "background":"#2a3c4d",
//                 color:"white",
//                 border:"black",
//             }
//         };
//     render(){
//         let themeObject=App.themeObject;
//         // let themeObject = {
//         //     "light":{
//         //         "themeName":"light Mode",
//         //         "background":"whitesmoke",
//         //         "selectedBackgrounds":"white",
//         //         color:"black",
//         //         border:"lightgrey",
//         //     },
//         //     "dark":{
//         //         "themeName":"Dark Mode",
//         //         "selectedBackgrounds":"#223c54",
//         //         "background":"#2a3c4d",
//         //         color:"white",
//         //         border:"black",
//         //     }
//         // };
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//           <Route path="/CarsList">
//             <CarsList />
//           </Route>
          
//           <Route path="/CreateToDoList">
//             <CreateToDoList />
//           </Route>
          
//           <Route path="/FormComponents">
//             <FormComponents heading="Form Components" />
//           </Route>
          
//           <Route path="/WaterCountApp">
//             <WaterCountApp />
//           </Route>
      
//           <Route exact path="/country-dashboard-app">
//               <CountriesDashboardApp themeObject={themeObject[this.state.selectedTheme]} changeSelectedTheme={this.changeSelectedTheme} />
//           </Route>
//           <Route  exact path="/country-dashboard-app/details/:alpha3code">
//               <CountryDetails themeObject={themeObject[this.state.selectedTheme]} changeSelectedTheme={this.changeSelectedTheme}/>
//           </Route>
//           <Route exact path="/page-1">
//             <Page1 />
//           </Route>
//           <Route exact path="/emoji-game">
//             <EmojiGame />
//           </Route>
//           <Route exact path="/CheckTheData">
//             <CheckTheData />
//           </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
//   }
// }

// export default App;
