import React from 'react';
import {SearchCountry} from './SearchCountry.js';
import {SelectRegion} from './SelectRegion.js';
import {SearchAndSelectSection} from './searchAndSelect.js'
class CountriesFilterBar extends React.Component{
    state={
    }
    render(){
        return(
            <SearchAndSelectSection>
                <SearchCountry themeName={this.props.themeName}
                    themeObject={this.props.themeObject}
                    // searchText={this.props.searchText} 
                    filterCountriesByName={this.props.filterCountriesByName} 
                    onChangeSearchText={this.props.onChangeSearchText} />
                <SelectRegion selectedRegion={this.props.selectedRegion} onChangeSelectedRegion = {this.props.onChangeSelectedRegion}/>
            </SearchAndSelectSection>
        );
    }
}
export {CountriesFilterBar};