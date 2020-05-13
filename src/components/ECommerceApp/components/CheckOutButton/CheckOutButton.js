import React from 'react';
import {CheckOutButtonStyle} from '../../styledComponents/CheckOutButton';

class CheckOutButton extends React.Component{
    
    onClear(){
        const {clearCart,}  = this.props;
        alert("Thank you for shopping with us 😊.Your products will be delivered in 3 days to the address mentioned in your profile.");
        clearCart();
    }
    
    
    render(){
        const {isDisabled}  = this.props;
        return(
            <CheckOutButtonStyle onClick={this.clearCart} disabled={isDisabled}>
                CheckOut
            </CheckOutButtonStyle>
        );
    }
}
export default CheckOutButton;