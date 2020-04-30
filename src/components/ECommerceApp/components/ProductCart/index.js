import React from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import CartList from '../CartList';
import SubTotal from '../SubTotal';
import {ProductCartStyle,
        CartButtonStyle,
        CartFooter,
        NoOfItemsStyle,
        CartSymbol,AddContentStyle,
        CartSymbolDivStyle,CartListStyle,
        CrossStyle,CartStyle,CartDataStyle} from '../../styledComponents/ProductCart' ;
import CheckOutButton from '../CheckOutButton';
import {FiShoppingCart} from 'react-icons/fi';

@inject("cartStore")
@observer
class ProductCart extends React.Component{
    @observable shouldDisplayCart=false;
    @observable width="500px";
    showCart=()=>{
        this.shouldDisplayCart=true;
        this.width="500px";
    }
    hideCart=()=>{
        this.shouldDisplayCart=false;
        this.width="0px";
    }
    
    render(){
        const {cartProductList,totalCartAmout,clearCart,noOfProductInCart} = this.props.cartStore;
        let isDisabled=true;
        if(cartProductList.size>0){
            isDisabled=false;
        }
        return(
            <ProductCartStyle>
                {this.shouldDisplayCart?
                    <CartStyle width = {this.width} isOk={this.shouldDisplayCart}>
                        <CrossStyle onClick={this.hideCart} >X</CrossStyle>
                        <CartDataStyle>
                            <CartSymbolDivStyle>
                                <CartSymbol>
                                    <FiShoppingCart />
                                    <NoOfItemsStyle>{noOfProductInCart}</NoOfItemsStyle>
                                </CartSymbol>
                                <div>Cart</div>
                            </CartSymbolDivStyle>
                            
                            <CartListStyle>
                                {cartProductList.size>0?<CartList />:
                                <AddContentStyle>
                                    Add some products to the cart!
                                </AddContentStyle>}
                            </CartListStyle>
                            <CartFooter>
                                <SubTotal total= {totalCartAmout} />
                                <CheckOutButton clearCart={clearCart} isDisabled={isDisabled}/>
                            </CartFooter>
                        </CartDataStyle>
                    </CartStyle>
                :
                    <CartButtonStyle onClick={this.showCart}>
                        <FiShoppingCart />
                        <NoOfItemsStyle>{noOfProductInCart}</NoOfItemsStyle>
                    </CartButtonStyle>
                }
                
            </ProductCartStyle>
        );
    }
}
export default ProductCart;