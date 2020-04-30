import React from'react';
import {ToastMainDivStyle} from '../../styledComponents/Toast';

class Toast extends React.Component{
    
    
    render(){
        return(
            <ToastMainDivStyle>
                {"Your Product added to the cart"}
            </ToastMainDivStyle>);
    }
}
export default Toast ;