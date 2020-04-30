import React from 'react';
import {inject,observer} from 'mobx-react';
import {HeaderMainDivStyle,
        SortDivStyle,Select} from '../../styledComponents/Header';
        
@inject ("productStore")
@observer
class Header extends React.Component{
    
    
    render(){
        let {onChangSortBy,totalNoOfProductsDisplayed} = this.props.productStore
        return (
        <HeaderMainDivStyle>
            {totalNoOfProductsDisplayed} product(s) found
            <SortDivStyle>
                sort by price by:
                <Select onChange={onChangSortBy}>
                    <option value= "SELECT" selected={true} hidden={true} >select</option>
                    <option value= "LOWEST TO HIGHEST">Lowest to Highest</option>
                    <option value = "HIGHEST TO LOWEST">Highesst to Lowest</option>
                </Select>
            
            </SortDivStyle>
        </HeaderMainDivStyle>);
    }
        
}

export default Header;