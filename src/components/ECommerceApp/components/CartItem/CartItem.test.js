import React from 'react';
import {Provider} from 'mobx-react';
import {render} from '@testing-library/react';
import CartItem from '.';
import CartStore from '../../ProductStores/CartStore';
import cartFixture from  '../../fixtures/CartFixture/CartFixture.json';

/*global expect,jest*/
describe("",()=>{
    let cartStore;
    beforeEach(()=>{
        cartStore = new CartStore();
    });
    
    it("Should test the cartItem",()=>{
        cartStore.onClickAddToCart(cartFixture[0]);
        const {getByText} = render(
            <Provider cartStore={cartStore}>
                <CartItem cartItem={cartFixture[0]}/>
            </Provider>
            );
        getByText("Cat Tee Black T-Shirt");
        
    });
    
    it("Should test the cartItem quantity",()=>{
        cartStore.onClickAddToCart(cartFixture[0]);
        cartStore.onClickAddToCart(cartFixture[0]);
        cartStore.onClickAddToCart(cartFixture[0]);
        const {getByText} = render(
            <Provider cartStore={cartStore}>
                <CartItem cartItem={cartFixture[0]}/>
            </Provider>
            );
        getByText("Quantity: 1");
    });
});