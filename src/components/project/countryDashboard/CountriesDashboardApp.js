import React from 'react';
// import '../project.css';
import {Header} from '../header/Header.js';
import {CountriesFilterBar} from '../searchAndselect/CountriesFilterBar.js';
import Countries from '../countries/Countries.js';
import {Dashboard} from './dashBoardStyle.js';
/* global fetch*/
// import themeStore from '../stores/ThemeStore';
import {observer} from 'mobx-react';
import themeStore from '../../../stores/ThemeStore/index.js';
import WithCoutries from '../../../common/hocs/withCountries.js';
@observer 
class CountriesDashboardApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedRegion:"All",
            searchText:"",
            countries:'',
            commonFetchData:"",
        };
    }
    async componentDidMount() {
        this.getCountries();
    }
    
    async getCountries(){
        const fetchData = await fetch('https://restcountries.eu/rest/v2/all');
        const fetchDataJson = await fetchData.json();
        this.setState({
            countries:fetchDataJson,
            commonFetchData:fetchDataJson,
        });
    }
    
    onChangeSelectedRegion=(input)=>{
        this.setState({
            selectedRegion:input,
        },this.filterCountriesBySelectedRegion);
        return null;
    }

    onChangeSearchText=(event)=>{
        const text = event.target.value.trim();
        let {selectedRegion,commonFetchData}=this.state;
        if(text===""){
            if(selectedRegion!=="All"){
                this.setState({
                    countries:commonFetchData.filter((item)=>(item.region===selectedRegion))
                });
            }
            else{
                this.setState({
                    countries:commonFetchData
                });
            }
        }
        this.setState({
            searchText:text,
        });
        
        return null;
    }
    
    filterCountriesByName=(event)=>{
        if(event.keyCode===13){
            let { commonFetchData,searchText,selectedRegion }=this.state;
            if(selectedRegion!=="All"){
                this.setState({
                    countries:commonFetchData.filter((item)=>
                        (item.name.toUpperCase().includes(searchText.toUpperCase())&&(item.region===selectedRegion))),
                });
            }
            else{
                this.setState({
                    countries:commonFetchData.filter((item)=>
                        (item.name.toUpperCase().includes(searchText.toUpperCase()))),
                });
            }
        }
    }
    
    filterCountriesBySelectedRegion=()=>{
        let { commonFetchData,selectedRegion }=this.state;
        if(selectedRegion==="All"){
            this.setState({
                countries:commonFetchData,
            });    
        }
        else{
            this.setState({
                countries:commonFetchData.filter((item)=>(item.region===selectedRegion)),
            });    
        }
    }
    
    
    displayCountries=()=>{
        const {getCurrentTheme,themeObject} = this.props;
        if(this.state.countries.length>0){
            return <Countries themeObject = {themeObject[getCurrentTheme()]} countries={this.state.countries} />;
        }
        else if((this.state.countries.length===0&&this.state.searchText!=="")){
           return <div>No results found</div> ;
        }
        else if(this.state.searchText===""&&this.state.countries.length===0){
            return <div>loading</div>;
        }
    }
    
    componentWillUnmount(){
        this.setState=({
            selectedRegion:"All",
            searchText:"",
            countries:'',
            commonFetchData:"", 
        });
    }
    render(){
        const {getCurrentTheme,changeSelectedTheme,themeObject} = this.props;
        let themeObjectIt = themeObject[getCurrentTheme()];
        let themeName=themeObjectIt.themeName;
        return(
            <Dashboard className={`countries-app ${themeName}`} themeObject={themeObjectIt}>
                <Header onChangeTheme={changeSelectedTheme} 
                        themeObject={themeObjectIt}
                        name={themeName} />
                <CountriesFilterBar
                    themeObject={themeObjectIt}
                    selectedRegion={this.state.selectedRegion}
                    themeName = {themeName}
                    // searchText={this.state.searchText}
                    filterCountriesByName={this.filterCountriesByName}
                    onChangeSearchText={this.onChangeSearchText}
                    onChangeSelectedRegion={this.onChangeSelectedRegion}/>
                {this.displayCountries()}         
            </Dashboard>
        );
    }
    
}

export default WithCoutries(CountriesDashboardApp);





// import React from 'react';
// // import '../project.css';
// import {Header} from '../header/Header.js';
// import {CountriesFilterBar} from '../searchAndselect/CountriesFilterBar.js';
// import Countries from '../countries/Countries.js';
// import {Dashboard} from './dashBoardStyle.js';
// /* global fetch*/
// // import themeStore from '../stores/ThemeStore';
// class CountriesDashboardApp extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             selectedRegion:"All",
//             searchText:"",
//             selectedTheme:true,
//             countries:'',
//             commonFetchData:"",
//         };
//     }
    
//     // @observable selectedTheme="light"
//     // getCurrentTheme=()=>{
//     //     // return this.selectedTheme;
//     //     return themeStore.selectedTheme;
//     // }
//     // // setCurrentTheme=(theme)=>{
//     // //     // this.themeStore.selectedTheme=theme;
//     // //     themeStore.setCurrentTheme(theme);
//     // // }
    
//     // changeSelectedTheme=()=>{
//     //     // this.setState({
//     //     //     selectedTheme:
//     //     // });
//     //      themeStore.setCurrentTheme();
//     //     // if(this.getCurrentTheme()==="light"){
//     //     //     this.setCurrentTheme("dark")}
//     //     // else{
//     //     //     this.setCurrentTheme("light");
//     //     // }
//     // }
//     // static themeObject= {
//     //     "light":{
//     //         "themeName":"Dark Mode",
//     //         "background":"whitesmoke",
//     //         "selectedBackgrounds":"white",
//     //         color:"black",
//     //         border:"lightgrey",
//     //     },
//     //     "dark":{
//     //         "themeName":"Light Mode",
//     //         "selectedBackgrounds":"#223c54",
//     //         "background":"#2a3c4d",
//     //         color:"white",
//     //         border:"black",
//     //     }
//     // };
    
    
//     async componentDidMount() {
//         this.getCountries();
//     }
    
//     onChangeSelectedRegion=(input)=>{
//         this.setState({
//             selectedRegion:input,
//         },this.filterCountriesBySelectedRegion);
//         return null;
//     }

//     onChangeSearchText=(event)=>{
//         const text = event.target.value.trim();
//         let {selectedRegion,commonFetchData}=this.state;
//         if(text===""){
//             if(selectedRegion!=="All"){
//                 this.setState({
//                     countries:commonFetchData.filter((item)=>(item.region===selectedRegion))
//                 });
//             }
//             else{
//                 this.setState({
//                     countries:commonFetchData
//                 });
//             }
//         }
//         this.setState({
//             searchText:text,
//         });
        
//         return null;
//     }
//     async getCountries(){
//         const fetchData = await fetch('https://restcountries.eu/rest/v2/all');
//         const fetchDataJson = await fetchData.json();
//         this.setState({
//             countries:fetchDataJson,
//             commonFetchData:fetchDataJson,
//         });
//     }
   
//     filterCountriesByName=(event)=>{
//         if(event.keyCode===13){
//             let { commonFetchData,searchText,selectedRegion }=this.state;
//             if(selectedRegion!=="All"){
//                 this.setState({
//                     countries:commonFetchData.filter((item)=>
//                         (item.name.toUpperCase().includes(searchText.toUpperCase())&&(item.region===selectedRegion))),
//                 });
//             }
//             else{
//                 this.setState({
//                     countries:commonFetchData.filter((item)=>
//                         (item.name.toUpperCase().includes(searchText.toUpperCase()))),
//                 });
//             }
//         }
//     }
    
//     filterCountriesBySelectedRegion=()=>{
//         let { commonFetchData,selectedRegion }=this.state;
//         if(selectedRegion==="All"){
//             this.setState({
//                 countries:commonFetchData,
//             });    
//         }
//         else{
//             this.setState({
//                 countries:commonFetchData.filter((item)=>(item.region===selectedRegion)),
//             });    
//         }
//     }
    
//     onChangeTheme=()=>{
//         this.setState({
//             selectedTheme:!this.state.selectedTheme,
//         });
//     }
    
//     displayCountries=()=>{
//         if(this.state.countries.length>0){
//             return <Countries themeObject = {this.props.themeObject} countries={this.state.countries} isThemeTrue={this.state.selectedTheme}/>;
//         }
//         else if((this.state.countries.length===0&&this.state.searchText!=="")){
//           return <div>No results found</div> ;
//         }
//         else if(this.state.searchText===""&&this.state.countries.length===0){
//             return <div>loading</div>;
//         }
//     }
    
//     componentWillUnmount(){
//         this.setState=({
//           selectedRegion:"All",
//             searchText:"",
//             selectedTheme:true,
//             countries:'',
//             commonFetchData:"", 
//         });
//     }
//     render(){
//         let {themeName} =this.props.themeObject;
//         let {changeSelectedTheme}=this.props;
//         return(
//             <Dashboard className={`countries-app ${themeName}`} themeObject={this.props.themeObject}>
//                 <Header onChangeTheme={changeSelectedTheme} 
//                         themeObject={this.props.themeObject}
//                         name={themeName} />
//                 <CountriesFilterBar
//                     themeObject={this.props.themeObject}
//                     selectedRegion={this.state.selectedRegion}
//                     themeName = {themeName}
//                     // searchText={this.state.searchText}
//                     filterCountriesByName={this.filterCountriesByName}
//                     onChangeSearchText={this.onChangeSearchText}
//                     onChangeSelectedRegion={this.onChangeSelectedRegion}/>
//                 {this.displayCountries()}
            
//             </Dashboard>
//         );
//     }
    
// }
// export {CountriesDashboardApp};
