import React from 'react';
import {observable } from 'mobx';
import {observer,inject} from 'mobx-react';
import CartItem from '../CartItem';
import {CartListStyle} from '../../styledComponents/CartList';


@inject("cartStore")
@observer
class CartList extends React.Component{
    render(){
        let {cartProductList} =this.props.cartStore;
        let cartArray = [];
        cartProductList.forEach((value)=>{
            cartArray.push(<CartItem cartItem ={value}/>);
        });
        return(
            <CartListStyle>
                {cartArray}       
            </CartListStyle>
        );
    }
}

export default CartList;