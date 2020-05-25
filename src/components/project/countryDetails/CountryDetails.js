import React from 'react';
import { withRouter} from 'react-router-dom';
import {Button} from '../buttons/Button.js';
import {Header} from '../header/Header.js';
import {MdArrowBack} from 'react-icons/md';
import {CountryDetailsDiv,Image,TheoryData,AllSpanTags,EachCountryDetails,CardDataDivWithTitle} from './detailsOfCountry.js';
// import {ButtonSection} from '../buttons/Button.js';
import {BackButtonSection,DashboardButton,BackButton} from './backButtonSection';
/* global fetch*/

import {observer} from 'mobx-react';
import themeStore from '../../../stores/ThemeStore/index.js';
import WithCoutries from '../../../common/hocs/withCountries.js';
@observer
class CountryDetails extends React.Component{
    state={
        countryDetails:null,
        countries:"",
    }
    
    async componentDidMount(){
        this.getCountries();
    }
    
    async getCountries(){
        const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all');
        const fetchCountriesJson = await fetchCountries.json();
        await fetchCountriesJson.forEach((item)=>{
            if(item.alpha3Code===this.props.match.params.alpha3code){
                this.setState({
                    countryDetails:item,
                    countries:fetchCountriesJson,
                });        
            }
        });
    }
    
    renderBorderCountries=(event)=>{
        let {history}=this.props;
        history.push(`/country-dashboard-app/details/${event.target.id}`);
        this.getCountries();
    }
    
    navigateBack=()=>{
        let {history}=this.props;
        history.goBack();
        this.getCountries();
    }
    navigateToDashBoard=()=>{
        let {history}=this.props;
        history.replace("/country-dashboard-app");
    }
    
    getJoinedValue=(input,input2)=>{
        let value;
        value = input.map((item)=>{
            return item.name;
        });
        return value.join(',');
    }
    // componentWillUnmount(){
    //   this.setState({
    //       countryDetails:null,
    //       countries:"",
    //   });
    // }
    render(){
        const {getCurrentTheme,changeSelectedTheme,themeObject} = this.props;
        let themeObjectIt = themeObject[getCurrentTheme()];
        let themeName=themeObjectIt.themeName;
        let {countryDetails,countries}=this.state;
        return(this.state.countryDetails===null?null:
        <CountryDetailsDiv className={`${themeName} over-all-card`} themeObject={themeObjectIt}>
            <Header className = {themeName} themeObject={themeObjectIt}
                    onChangeTheme={changeSelectedTheme} name={themeName} />
            <BackButtonSection>
                <BackButton themeObject={themeObjectIt} onClick={this.navigateBack} className={`card-back-button ${themeName}`}><MdArrowBack />Back</BackButton>
                <DashboardButton themeObject={themeObjectIt} className={`card-back-button ${themeName}`} onClick={this.navigateToDashBoard}>Dashboard</DashboardButton>
            </BackButtonSection>
            <EachCountryDetails>
                <Image className="card-image" src={countryDetails.flag} alt={`${countryDetails.name}'s flag`}/>
                <CardDataDivWithTitle>
                    <h3><strong>{countryDetails.name}</strong></h3>
                    <AllSpanTags>    
                        <TheoryData>
                            <span><strong>Native Name: </strong>{countryDetails.nativeName}</span>
                            <span><strong>Population: </strong>{countryDetails.population}</span>
                            <span><strong>Region: </strong>{countryDetails.region}</span>
                            <span><strong>Sub Region:</strong>{countryDetails.subregion}</span>
                            <span><strong>Capital: </strong>{countryDetails.capital}</span>
                        </TheoryData>
                        <TheoryData>
                            <span><strong>Top Level Domain: </strong>{countryDetails.topLevelDomain}</span>
                            <span><strong>Currencies: </strong>{this.getJoinedValue(countryDetails.currencies,"currencies")}</span>
                            <span><strong>Languages: </strong>{this.getJoinedValue(countryDetails.languages,"languages")}</span>
                        </TheoryData>
                    </AllSpanTags>
                    <div className="card-button-section">
                        <strong>Borders Countries: </strong><br/>
                        {countryDetails.borders!==""?
                        <ButtonSection >
                            <Button themeObject={themeObjectIt} countries = {countries} 
                                name={themeName} 
                                valueId={countryDetails.borders} 
                                countryChangeMethod={this.renderBorderCountries}/>
                        </ButtonSection>
                        :null}                
                    </div>
                </CardDataDivWithTitle>
            </EachCountryDetails>
        </CountryDetailsDiv>);
    }
}
          
export default withRouter(WithCoutries(CountryDetails));



// import React from 'react';
// import { withRouter} from 'react-router-dom';
// import {Button} from '../buttons/Button.js';
// import {Header} from '../header/Header.js';
// import {MdArrowBack} from 'react-icons/md';
// import {Image,TheoryData,CardDataDiv,EachCountryDetails,CardDataDivWithTitle} from './detailsOfCountry.js';
// import {EachButton} from '../buttons/eachButton.js';

// /* global fetch*/
// class CountryDetails extends React.Component{
//     state={
//         countryDetails:null,
//         countries:"",
//     }
//     async componentDidMount(){
//         this.changeUrl();
//     }
//     async changeUrl(){
//         const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all');
//         const fetchCountriesJson = await fetchCountries.json();
//         await fetchCountriesJson.forEach((item)=>{
//             if(item.alpha3Code===this.props.match.params.alpha3code){
//                 this.setState({
//                     countryDetails:item,
//                     countries:fetchCountriesJson,
//                 });        
//             }
//         });
//     }
//     renderBorderCountries=(event)=>{
//         let {history}=this.props;
//         history.push(`/country-dashboard-app/details/${event.target.id}`);
//         this.changeUrl();
//     }
    
//     navigateBack=()=>{
//         let {history}=this.props;
//         history.goBack();
//         this.changeUrl();
//     }
//     navigateToDashBoard=()=>{
//         let {history}=this.props;
//         history.replace("/country-dashboard-app");
//     }
    
//     getJoinedValue=(input,input2)=>{
//         let value;
//         value = input.map((item)=>{
//             return item.name;
//         });
//         return value.join(',');
//     }
//     render(){
//         let {themeName}=this.props;
//         let {countryDetails,countries}=this.state;
//         return(this.state.countryDetails===null?null:
//         <div className={`${themeName} over-all-card`}>
//             <Header cassName = {this.props.themeName} selectedTheme={this.state.selectedTheme}
//                     onChangeTheme={this.props.changeSelectedTheme} name={this.props.name} />
//             <div className="back-button">
//                 <EachButton  onClick={this.navigateBack} className={`card-back-button ${themeName}`}><MdArrowBack />Back</EachButton>
//                 <EachButton className={`card-back-button ${themeName}`} onClick={this.navigateToDashBoard}>Dashboard</EachButton>
//             </div>
//             <EachCountryDetails>
//                 <div className="card-image-div">
//                     <Image className="card-image" src={countryDetails.flag} alt={`${countryDetails.name}'s flag`}/>
//                 </div>
                
//                 <CardDataDivWithTitle>
//                     <h3><strong>{countryDetails.name}</strong></h3>
//                     <CardDataDiv>    
//                         <TheoryData>
//                             <span><strong>Native Name: </strong>{countryDetails.nativeName}</span>
//                             <span><strong>Population: </strong>{countryDetails.population}</span>
//                             <span><strong>Region: </strong>{countryDetails.region}</span>
//                             <span><strong>Sub Region:</strong>{countryDetails.subregion}</span>
//                             <span><strong>Capital: </strong>{countryDetails.capital}</span>
//                         </TheoryData>
//                         <TheoryData>
//                             <span><strong>Top Level Domain: </strong>{countryDetails.topLevelDomain}</span>
//                             <span><strong>Currencies: </strong>{this.getJoinedValue(countryDetails.currencies,"currencies")}</span>
//                             <span><strong>Languages: </strong>{this.getJoinedValue(countryDetails.languages,"languages")}</span>
//                         </TheoryData>
//                     </CardDataDiv>
//                     <div className="card-button-section">
//                         <strong>Borders Countries: </strong><br/>
//                         {countryDetails.borders!==""?
//                         <ButtonSection>
//                             <Button countries = {countries} 
//                                 name={themeName} 
//                                 valueId={countryDetails.borders} 
//                                 countryChangeMethod={this.renderBorderCountries}/>
//                         </ButtonSection>
//                         :null}                
//                     </div>
//                 </CardDataDivWithTitle>
//             </EachCountryDetails>
//         </div>);
//     }
// }
          
// export default withRouter(CountryDetails);







// import React from 'react';
// import { withRouter} from 'react-router-dom';
// import {Button} from '../buttons/Button.js';
// import {Header} from '../header/Header.js';
// import {MdArrowBack} from 'react-icons/md';
// import {CountryDetailsDiv,Image,TheoryData,AllSpanTags,EachCountryDetails,CardDataDivWithTitle} from './detailsOfCountry.js';
// import {ButtonSection} from '../buttons/eachButton.js';
// import {BackButtonSection,DashboardButton,BackButton} from './backButtonSection';
// /* global fetch*/

// import {observer} from 'mobx-react';
// import themeStore from '../../../stores/ThemeStore/index.js';

// @observer
// class CountryDetails extends React.Component{
//     state={
//         countryDetails:null,
//         countries:"",
//     }
    
    
    
//     async componentDidMount(){
//         this.changeUrl();
//     }
//     async changeUrl(){
//         const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all');
//         const fetchCountriesJson = await fetchCountries.json();
//         await fetchCountriesJson.forEach((item)=>{
//             if(item.alpha3Code===this.props.match.params.alpha3code){
//                 this.setState({
//                     countryDetails:item,
//                     countries:fetchCountriesJson,
//                 });        
//             }
//         });
//     }
    
    
    
//     getCurrentTheme=()=>{
//         return themeStore.selectedTheme;
//     }
 
//     changeSelectedTheme=()=>{
//         themeStore.setCurrentTheme();
//     }
    
//     static themeObject= {
//         "light":{
//             "themeName":"Dark Mode",
//             "background":"whitesmoke",
//             "selectedBackgrounds":"white",
//             color:"black",
//             border:"lightgrey",
//         },
//         "dark":{
//             "themeName":"Light Mode",
//             "selectedBackgrounds":"#223c54",
//             "background":"#2a3c4d",
//             color:"white",
//             border:"black",
//         }
//     };
    
    
//     renderBorderCountries=(event)=>{
//         let {history}=this.props;
//         history.push(`/country-dashboard-app/details/${event.target.id}`);
//         this.changeUrl();
//     }
    
//     navigateBack=()=>{
//         let {history}=this.props;
//         history.goBack();
//         this.changeUrl();
//     }
//     navigateToDashBoard=()=>{
//         let {history}=this.props;
//         history.replace("/country-dashboard-app");
//     }
    
//     getJoinedValue=(input,input2)=>{
//         let value;
//         value = input.map((item)=>{
//             return item.name;
//         });
//         return value.join(',');
//     }
//     render(){
//         let themeObject = CountryDetails.themeObject[this.getCurrentTheme()];
//         let themeName=themeObject.themeName;
//         let {countryDetails,countries}=this.state;
//         return(this.state.countryDetails===null?null:
//         <CountryDetailsDiv className={`${themeName} over-all-card`} themeObject={themeObject}>
//             <Header className = {themeName} themeObject={themeObject}
//                     onChangeTheme={this.changeSelectedTheme} name={themeName} />
//             <BackButtonSection>
//                 <BackButton themeObject={themeObject} onClick={this.navigateBack} className={`card-back-button ${themeName}`}><MdArrowBack />Back</BackButton>
//                 <DashboardButton themeObject={themeObject} className={`card-back-button ${themeName}`} onClick={this.navigateToDashBoard}>Dashboard</DashboardButton>
//             </BackButtonSection>
//             <EachCountryDetails>
//                 <Image className="card-image" src={countryDetails.flag} alt={`${countryDetails.name}'s flag`}/>
//                 <CardDataDivWithTitle>
//                     <h3><strong>{countryDetails.name}</strong></h3>
//                     <AllSpanTags>    
//                         <TheoryData>
//                             <span><strong>Native Name: </strong>{countryDetails.nativeName}</span>
//                             <span><strong>Population: </strong>{countryDetails.population}</span>
//                             <span><strong>Region: </strong>{countryDetails.region}</span>
//                             <span><strong>Sub Region:</strong>{countryDetails.subregion}</span>
//                             <span><strong>Capital: </strong>{countryDetails.capital}</span>
//                         </TheoryData>
//                         <TheoryData>
//                             <span><strong>Top Level Domain: </strong>{countryDetails.topLevelDomain}</span>
//                             <span><strong>Currencies: </strong>{this.getJoinedValue(countryDetails.currencies,"currencies")}</span>
//                             <span><strong>Languages: </strong>{this.getJoinedValue(countryDetails.languages,"languages")}</span>
//                         </TheoryData>
//                     </AllSpanTags>
//                     <div className="card-button-section">
//                         <strong>Borders Countries: </strong><br/>
//                         {countryDetails.borders!==""?
//                         <ButtonSection >
//                             <Button themeObject={themeObject} countries = {countries} 
//                                 name={themeName} 
//                                 valueId={countryDetails.borders} 
//                                 countryChangeMethod={this.renderBorderCountries}/>
//                         </ButtonSection>
//                         :null}                
//                     </div>
//                 </CardDataDivWithTitle>
//             </EachCountryDetails>
//         </CountryDetailsDiv>);
//     }
// }
          
// export default withRouter(CountryDetails);



// // import React from 'react';
// // import { withRouter} from 'react-router-dom';
// // import {Button} from '../buttons/Button.js';
// // import {Header} from '../header/Header.js';
// // import {MdArrowBack} from 'react-icons/md';
// // import {Image,TheoryData,CardDataDiv,EachCountryDetails,CardDataDivWithTitle} from './detailsOfCountry.js';
// // import {EachButton} from '../buttons/eachButton.js';

// // /* global fetch*/
// // class CountryDetails extends React.Component{
// //     state={
// //         countryDetails:null,
// //         countries:"",
// //     }
// //     async componentDidMount(){
// //         this.changeUrl();
// //     }
// //     async changeUrl(){
// //         const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all');
// //         const fetchCountriesJson = await fetchCountries.json();
// //         await fetchCountriesJson.forEach((item)=>{
// //             if(item.alpha3Code===this.props.match.params.alpha3code){
// //                 this.setState({
// //                     countryDetails:item,
// //                     countries:fetchCountriesJson,
// //                 });        
// //             }
// //         });
// //     }
// //     renderBorderCountries=(event)=>{
// //         let {history}=this.props;
// //         history.push(`/country-dashboard-app/details/${event.target.id}`);
// //         this.changeUrl();
// //     }
    
// //     navigateBack=()=>{
// //         let {history}=this.props;
// //         history.goBack();
// //         this.changeUrl();
// //     }
// //     navigateToDashBoard=()=>{
// //         let {history}=this.props;
// //         history.replace("/country-dashboard-app");
// //     }
    
// //     getJoinedValue=(input,input2)=>{
// //         let value;
// //         value = input.map((item)=>{
// //             return item.name;
// //         });
// //         return value.join(',');
// //     }
// //     render(){
// //         let {themeName}=this.props;
// //         let {countryDetails,countries}=this.state;
// //         return(this.state.countryDetails===null?null:
// //         <div className={`${themeName} over-all-card`}>
// //             <Header cassName = {this.props.themeName} selectedTheme={this.state.selectedTheme}
// //                     onChangeTheme={this.props.changeSelectedTheme} name={this.props.name} />
// //             <div className="back-button">
// //                 <EachButton  onClick={this.navigateBack} className={`card-back-button ${themeName}`}><MdArrowBack />Back</EachButton>
// //                 <EachButton className={`card-back-button ${themeName}`} onClick={this.navigateToDashBoard}>Dashboard</EachButton>
// //             </div>
// //             <EachCountryDetails>
// //                 <div className="card-image-div">
// //                     <Image className="card-image" src={countryDetails.flag} alt={`${countryDetails.name}'s flag`}/>
// //                 </div>
                
// //                 <CardDataDivWithTitle>
// //                     <h3><strong>{countryDetails.name}</strong></h3>
// //                     <CardDataDiv>    
// //                         <TheoryData>
// //                             <span><strong>Native Name: </strong>{countryDetails.nativeName}</span>
// //                             <span><strong>Population: </strong>{countryDetails.population}</span>
// //                             <span><strong>Region: </strong>{countryDetails.region}</span>
// //                             <span><strong>Sub Region:</strong>{countryDetails.subregion}</span>
// //                             <span><strong>Capital: </strong>{countryDetails.capital}</span>
// //                         </TheoryData>
// //                         <TheoryData>
// //                             <span><strong>Top Level Domain: </strong>{countryDetails.topLevelDomain}</span>
// //                             <span><strong>Currencies: </strong>{this.getJoinedValue(countryDetails.currencies,"currencies")}</span>
// //                             <span><strong>Languages: </strong>{this.getJoinedValue(countryDetails.languages,"languages")}</span>
// //                         </TheoryData>
// //                     </CardDataDiv>
// //                     <div className="card-button-section">
// //                         <strong>Borders Countries: </strong><br/>
// //                         {countryDetails.borders!==""?
// //                         <ButtonSection>
// //                             <Button countries = {countries} 
// //                                 name={themeName} 
// //                                 valueId={countryDetails.borders} 
// //                                 countryChangeMethod={this.renderBorderCountries}/>
// //                         </ButtonSection>
// //                         :null}                
// //                     </div>
// //                 </CardDataDivWithTitle>
// //             </EachCountryDetails>
// //         </div>);
// //     }
// // }
          
// // export default withRouter(CountryDetails);
