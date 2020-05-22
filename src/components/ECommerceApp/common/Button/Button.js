import React from 'react';
import {ButtonStyle} from './styledComponent.js';


class Button extends React.Component{
    render(){
        
        const {styledObject,label} =this.props;
        return(<ButtonStyle styledObject={styledObject}>
        {label}
        </ButtonStyle>);
    }
}
export {Button};