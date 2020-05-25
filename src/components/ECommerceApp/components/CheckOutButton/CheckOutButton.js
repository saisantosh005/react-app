import React from 'react';
import {CheckOutButtonStyle} from './styledComponent.js';

class CheckOutButton extends React.Component{
    
    onClickClearCart=()=>{
        const {clearCart}  = this.props;
        alert("Thank you for shopping with us 😊.Your products will be delivered in 3 days to the address mentioned in your profile.");
        clearCart();
    }
    
    
    render(){
        const {isDisabled}  = this.props;
        return(
            <CheckOutButtonStyle data-testid="checkOutButton"  onClick={this.onClickClearCart} disabled={isDisabled}>
                CheckOut
            </CheckOutButtonStyle>
        );
    }
}
export {CheckOutButton};