import cartFixture from  '../../fixtures/CartFixture/CartFixture.json';


import React from 'react';
import CartStore from '.';

import CartModel from '../model/CartModel';


/*global expect,jest*/
describe("cartStore tests",()=>{
    let cartStore;
    
    
    beforeEach(()=>{
        cartStore = new CartStore();
    })
    
    it("should test ",()=>{
        const data = cartFixture
        console.log(data);
        // const data = JSON.parse(cartFixture);
        console.log(cartStore.onClickAddToCart(data));
        cartStore.onClickAddToCart(data);
        console.log(cartStore.cartProductList);
        // expect(CartStore.cartProductList).toEqual([new CartModel(data)]);
        // expect(CartStore.cartProductList).toBe(new CartModel())
    });
})