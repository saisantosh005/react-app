import React from 'react';
import {CheckOutButtonStyle} from '../../styledComponents/CheckOutButton';

class CheckOutButton extends React.Component{
    
    render(){
        const {clearCart,isDisabled}  = this.props
        return(
            <CheckOutButtonStyle onClick={clearCart} disabled={isDisabled}>
                CheckOut
            </CheckOutButtonStyle>
            );
    }
}
export default CheckOutButton;