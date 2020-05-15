import React from'react';
import {ToastMainDivStyle} from './styledComponent.js';

class Toast extends React.Component{
    
    
    render(){
        return(
            <ToastMainDivStyle>
                {"Your Product added to the cart"}
            </ToastMainDivStyle>);
    }
}
export {Toast} ;