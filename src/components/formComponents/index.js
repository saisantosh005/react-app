import React from 'react';
import "./backsign.css";

import {DisableOrEnable} from './disableButton.js';
import {FavouriteDessert} from './favouriteDesert.js';
import {Greetings} from './greetings.js';
import {YourState} from './yourState.js';
import {VisitedCities} from './visitedCities.js';
import {ParentExtra} from "./extra.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
//   useParams,
//   Redirect,
//   useHistory,
//   useLocation
} from "react-router-dom";



            
class  FormComponents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"],
            heading:this.props.heading,
        };
    }
    changeHeading=(event)=>{
    //   let history= useHistory();
    //   return history.push("/");
    
    this.setState({
        heading:event.target.className,
    })
    }
    
    render(){
        // let history = useHistory();
        return(
            <Router>
            <div>
                 
            <form>
            
                <div onClick={this.changeHeading} className="back-color">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd"><path d="M-3-3h22v22H-3z">
                </path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8
                .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
                <div className="heading">{this.state.heading}</div>
                </div>
                
            <ul>
                <li>
                    <Link to="/Greetings">. Greetings</Link>
                </li>
               
                <li>
                    <Link to="/FavouriteDessert" >. FavouriteDessert</Link>
                </li>
               
                <li>
                    <Link to="/YourState">. YourState</Link>
                </li>
               
                <li>
                    <Link to="/VisitedCities" >. VisitedCities</Link>
                </li>
                
                <li>
                    <Link to="/DisableOrEnable">. Disable</Link>
                </li>
                
                <li>
                    <Link to="/ParentExtra">.Parent</Link>
                </li>
            </ul>
            </form>
             <Switch>
                <Route path="/Greetings">
                    <Greetings />
                </Route>
          
                <Route path="/FavouriteDessert">
                    <FavouriteDessert list={this.state.list} />
                </Route>
                 <Route path="/VisitedCities">
                    <VisitedCities cityList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
                </Route>
               
                <Route path="/YourState">
                    <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
                </Route>
                <Route path="/DisableOrEnable">
                    <DisableOrEnable changeHeading={this.changeHeading}/>
                </Route>
                
                <Route path="/ParentExtra">
                    <ParentExtra />
                </Route>
                
            </Switch>
           
            </div>
            </Router> 
            );
    }

}
// function Child(){
//  <Route path="/:id" children={<Child />} />
//     let {id}= useParams();
//     // this.setState({
//     //     heading:{id}
//     // })
//     return(<div>hello{id}</div>)
// }


export {FormComponents};