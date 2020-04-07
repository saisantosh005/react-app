import React from 'react';
import { withRouter } from 'react-router-dom';
import { CountryCard } from '../countryCard/CountryCard.js';
import {All,Ul} from './allCountries.js';
class Countries  extends React.Component{
    state={
    }
    
    navigateCountryDetailsPage=(event)=>{
        this.props.countries.map((item)=>{
            if(event.currentTarget.id===item.name){
                let {history}=this.props;
                history.push(`/country-dashboard-app/details/${item.alpha3Code}`);
            }
            return null;
        });
    }
    
    renderCountries=()=>{
        return this.props.countries.map((item)=>
            <CountryCard themeObject={this.props.themeObject} key = {item.name} countryDetails={item} navigateCountryDetailsPage={this.navigateCountryDetailsPage} />
       );
    }
    componenet
    
    render(){
        return(
            <All>
                <Ul>               
                    {this.renderCountries()}
                </Ul>
            </All>
        );
    }
}
export default withRouter(Countries);

// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { CountryCard } from '../countryCard/CountryCard.js';
// import {CountriesList} from './countries.js';
// class Countries  extends React.Component{
//     state={
//     }
    
//     navigateCountryDetailsPage=(event)=>{
//         this.props.countries.map((item)=>{
//             if(event.currentTarget.id===item.name){
//                 let {history}=this.props;
//                 history.push(`/country-dashboard-app/details/${item.alpha3Code}`);
//             }
//             return null;
//         });
//     }
    
//     renderCountries=()=>{
//         return this.props.countries.map((item)=>
//             <CountryCard key = {item.name} countryDetails={item} navigateCountryDetailsPage={this.navigateCountryDetailsPage} />
//       );
//     }
    
//     render(){
//         return(
//             <div className="countries-list-section">
//                 <ul className="ul-element">
//                     {this.renderCountries()}
//                 </ul>
                
//             </div>
//         );
//     }
// }
// export default withRouter(Countries);


