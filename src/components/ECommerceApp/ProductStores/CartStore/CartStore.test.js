import React from 'react';
import CartStore from '.';
import CartModel from '../model/CartModel';
import ProductModel from '../model/ProductModel';
import cartFixture from  '../../fixtures/CartFixture/CartFixture.json';

/*global expect,jest*/
describe("cartStore tests",()=>{
    let cartStore;
    beforeEach(()=>{
        cartStore = new CartStore();
    });
    
    it("Should give the added products",()=>{
        const value = cartFixture[0];
        value.quantity=1;
        cartStore.onClickAddToCart(value);
        expect(cartStore.cartProductList).toEqual([new CartModel(value)]);
        expect(Number(cartStore.totalCartAmout)).toBe(value.price*value.quantity);
        expect(cartStore.noOfProductInCart).toBe(1*value.quantity);
    });
    it("should test the cart list cleared",()=>{
        const value = cartFixture[0];
        value.quantity=1;
        cartStore.onClickAddToCart(value);
        cartStore.onRemoveCartItem(value);
        expect(cartStore.cartProductList).toEqual([]);
    });
    
    it("should test the array should be empty ",()=>{
        const value = cartFixture[0];
        value.quantity=1;
        cartStore.onClickAddToCart(value);
        cartStore.clearCart();
        expect(cartStore.cartProductList).toEqual([]);
    });
    
    it("should test the quantity increment",()=>{
         const value = cartFixture[0];
        value.quantity=2;
        cartStore.onClickAddToCart(value);
        cartStore.onClickAddToCart(value);
        expect(cartStore.cartProductList).toEqual([new CartModel(value)]);
        expect(Number(cartStore.totalCartAmout)).toBe(value.price*value.quantity);
        expect(cartStore.noOfProductInCart).toBe(1*value.quantity);
    });
    
    
    
})