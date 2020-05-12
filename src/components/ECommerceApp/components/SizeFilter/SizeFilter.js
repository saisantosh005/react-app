import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {inject} from 'mobx-react';
import Button from '../Button';
import {SelectSizeDivStyle} from '../../styledComponents/SizeFilter';

@inject ("productStore")
@observer
class SizeFilter  extends React.Component{
    @observable size=["XS","S","M","L","XL","XXL"];
    render(){
        let {onSelectSize} =this.props.productStore;
        const ButtonArray = this.size.map((item)=><Button key={item} onSelectSizeIt={onSelectSize} valueIt={item}/>);
        return (
            <SelectSizeDivStyle>
              {ButtonArray}
            </SelectSizeDivStyle>);
    }
}

export default SizeFilter;