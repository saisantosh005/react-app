
import React from 'react';
import {CardImage,Card,DataOfEachCard,ContryName} from './eachCard.js'
class CountryCard extends React.Component{
    
    render(){
        let {countryDetails} = this.props;
        return(
        <Card themeObject={this.props.themeObject} key={countryDetails.name} id={countryDetails.name} onClick={this.props.navigateCountryDetailsPage}>
            <CardImage className="image-size" src={countryDetails.flag} alt="Country flag"/>
            <DataOfEachCard>
                <ContryName>{countryDetails.name}</ContryName> 
                <span><strong>Population: </strong>{countryDetails.population}</span>
                <span><strong>Region: </strong>{countryDetails.region}</span>
                <span><strong>Capital: </strong>{countryDetails.capital}</span>
            </DataOfEachCard>
        </Card>);      
    }
}

export { CountryCard };


// import React from 'react';
// import {CardImage} from './cardImage.js'
// class CountryCard extends React.Component{
    
//     render(){
//         let {countryDetails} = this.props;
//         return(
//         <li key={countryDetails.name} className="li-element" id={countryDetails.name} onClick={this.props.navigateCountryDetailsPage}>
//             <CardImage className="image-size" src={countryDetails.flag} alt="Country flag"/>
//             <h4>{countryDetails.name}</h4> 
//             <div className="list-data-in-small">
//                 <span><strong>Population: </strong>{countryDetails.population}</span>
//                 <span><strong>Region: </strong>{countryDetails.region}</span>
//                 <span><strong>Capital: </strong>{countryDetails.capital}</span>
//             </div>
//         </li>);      
//     }
// }

// export { CountryCard };

