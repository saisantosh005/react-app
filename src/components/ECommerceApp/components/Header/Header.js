import React from 'react';
import {inject,observer} from 'mobx-react';
import {HeaderMainDivStyle,
        SortDivStyle,Select} from './styledComponent.js';
        
// @inject ("productStore")
@observer
class Header extends React.Component{
    
    onChangSortBy=()=>{
        let {onChangSortBy} = this.props.productStore;
        onChangSortBy(event.target.value);
    }
    render(){
        let {totalNoOfProductsDisplayed} = this.props.productStore;
        return (
        <HeaderMainDivStyle>
            {totalNoOfProductsDisplayed} product(s) found
            <SortDivStyle>
                sort by price by:
                <Select defaultValue="" onChange={this.onChangSortBy}>
                    <option value= "SELECT" >select</option>
                    <option value= "LOWEST TO HIGHEST">Lowest to Highest</option>
                    <option value = "HIGHEST TO LOWEST">Highesst to Lowest</option>
                </Select>
            </SortDivStyle>
        </HeaderMainDivStyle>);
    }
        
}
export {Header};