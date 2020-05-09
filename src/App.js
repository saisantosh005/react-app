
// import {configure} from 'mobx';

import {observer} from 'mobx-react';



import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {CreateToDoList} from './components/toDoList/index.js';
import {CarsList } from './components/CarsList/carsList.js';
import {WaterCountApp} from './components/waterCount/waterApp.js';
import {FormComponents}from './components/formComponents/index.js';
import {CountriesDashboardApp} from'./components/project/countryDashboard/CountriesDashboardApp.js';
import CountryDetails from './components/project/countryDetails/CountryDetails.js';
import {EmojiGame} from './components/assignment-5/EmojiGame/EmojiGame.js';
import {CounterApp} from './components/CounterApp/CounterApp';
import {CreateToDoListMobx} from './components/MobxTodoList/TodoApp/TodoApp';
import {EventListApp } from './components/EventListApp/EventApp/EventApp';
import {TodoListApp} from './components/NewTodoListApp/TodoApp/TodoListApp';
import {A} from './components/practice/Practice';
import {GridMemoryGame} from './components/GridMemoryGameApp/GridMemoryGame/GridMemoryApp.js';
import {RestApiPractice} from './components/RestPractice/RestPractice.js';
import UsersPage from './components/UsersPage/Userpage.js';
import LoginPage from './components/LoginPage/LoginPage.js';

import SignInPage from './components/AuthLogin/components/SignInPage'
// import {Home} from './home.js';
// import Page1 from "./components/Page1";
// import {CheckTheData} from'./components/CheckTheData/CheckTheData.js';

import HomePage from "./components/HomePage/index.js";
import Page1 from "./components/Page1";
import "./App.css";
import CounterPage from './components/CounterPage/index';

// import routes from './components/ECommerceApp/Routes/';

import ProductPageRoute from './components/ECommerceApp/Routes/ProductPage';
// components/ProductPage';/


// import {observable} from 'mobx';
// import themeStore from './stores/ThemeStore/index';

// 8

// configure ({enforceActions:true});

// 8
import stores from './stores';
import ProductStores from './components/ECommerceApp/ProductStores';
import {Provider} from 'mobx-react';
import {route} from './components/AuthLogin/routes';

import {enableLogging} from'mobx-logger';
const config ={
    predicate:()=>true,
    action:true,
    reaction:true,
    transcaction:true,
    compute:true
};
enableLogging(config);

@observer//1
class App extends React.Component{
    // getCurrentTheme=()=>{
    //     return themeStore.selectedTheme;
    // }
    
    // changeSelectedTheme=()=>{
    //     themeStore.setCurrentTheme();
    // }
    // static themeObject= {
    //     "light":{
    //         "themeName":"Dark Mode",
    //         "background":"whitesmoke",
    //         "selectedBackgrounds":"white",
    //         color:"black",
    //         border:"lightgrey",
    //     },
    //     "dark":{
    //         "themeName":"Light Mode",
    //         "selectedBackgrounds":"#223c54",
    //         "background":"#2a3c4d",
    //         color:"white",
    //         border:"black",
    //     }
    // };
    
    
    render(){
        // let themeObject=App.themeObject;
        const allStores = {
            ...stores,
            ...ProductStores
        };
        return (
            <Provider {...allStores}>
            <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/users" component={UsersPage}/>
                {route}
                <Route exact path="/ecommerce-store/products">
                    <ProductPageRoute />
                </Route>    
                
                <Route exact path="/counter-page">
                    <CounterPage />
                </Route>    
                <Route exact path="/page-1">
                    <Page1 />
                </Route>    
                <Route path="/CarsList">
                    <CarsList />
                </Route>
                <Route path="/Practice">
                    <A />
                </Route>
                
                <Route path="/CreateToDoList">
                    <CreateToDoList />
                </Route>
                <Route path="/New-Todo-List">
                    <TodoListApp />
                </Route>
                
                <Route path="/Event-List-App">
                    <EventListApp />
                </Route>
                
                <Route path="/Mobx-todo-list">
                    <CreateToDoListMobx />
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
                    <CountriesDashboardApp  />
                </Route>
                <Route  exact path="/country-dashboard-app/details/:alpha3code">
                    <CountryDetails />
                </Route>
                <Route exact path="/Counter-app">
                    <CounterApp />
                </Route>
                <Route exact path="/Grid-memory-game">
                    <GridMemoryGame />
                </Route>
                <Route exact path="/Rest-api-practice">
                    <RestApiPractice />
                </Route>
                
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
    </Router>
    </Provider>
  );
        }
}

export default App;

//
// <Route exact path="/Login-page">
                //     <LoginPage />
                // </Route>    
                
                
// themeObject={themeObject[this.getCurrentTheme()]} changeSelectedTheme={this.changeSelectedTheme}
// themeObject={themeObject[this.getCurrentTheme()]} changeSelectedTheme={this.changeSelectedTheme}
// 

// export default observer(App);

// <CountriesDashboardApp themeObject={themeObject[this.state.selectedTheme]} changeSelectedTheme={this.changeSelectedTheme} />
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
