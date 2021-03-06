import React from 'react';
import {observer,inject} from 'mobx-react';
import {CartItemMainDivStyle,
ProductImageStyle,
CartItemDetailsDiv,
CartTitleAndCrossStyle,
    Title,
    Cross,
    ProductModelStyle,
    PriceStyle,
    QuantityStyle
    
} from './styledComponent.js';
// import {observable} from 'mobx';

@inject("cartStore")
@observer
class CartItem extends React.Component{
    
    onRemoveCartItem=()=>{
        const {cartItem}  = this.props;
        this.props.cartStore.onRemoveCartItem(cartItem);
    }
    
    render(){
        const {cartItem}  = this.props;
        return(
            <CartItemMainDivStyle>
                <ProductImageStyle src={cartItem.image}/>
                <CartItemDetailsDiv>
                    <CartTitleAndCrossStyle>
                        <Title data-testid="cartItemTitle">
                            {cartItem.title}
                        </Title>
                        <Cross onClick={this.onRemoveCartItem}>x</Cross>
                    </CartTitleAndCrossStyle>
                    <ProductModelStyle>
                       {cartItem.style}
                       <PriceStyle>{cartItem.currencyFormat} {cartItem.price}</PriceStyle>
                    </ProductModelStyle>
                    <QuantityStyle data-testid="Quantity">Quantity: 
                    {cartItem.quantity}</QuantityStyle>
                </CartItemDetailsDiv>
            </CartItemMainDivStyle>
        );
    }
}
export {CartItem};