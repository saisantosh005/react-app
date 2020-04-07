import React from 'react';
import { GoSearch } from 'react-icons/go';
import {SearchBar,SearchInput} from './searchAndSelect';
class SearchCountry extends React.Component{
    
    render(){
        // <SearchBar className={`search-div ${this.props.themeName}`}>
        return(
            <SearchBar themeObject={this.props.themeObject}>
                <GoSearch />
                <SearchInput themeObject={this.props.themeObject} 
                    className={`search-bar ${this.props.themeName}`}
                    onChange={this.props.onChangeSearchText}
                    onKeyDown={this.props.filterCountriesByName}
                    // value={this.props.searchText}
                    placeholder={`Search for country`} type="text" />
            </SearchBar>
        );
    }
}
export {SearchCountry};


