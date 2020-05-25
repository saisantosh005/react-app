import React from 'react';
import {Provider} from 'mobx-react';
import {render,fireEvent,waitFor} from '@testing-library/react';
import {CartItem} from '.';
import CartStore from '../../ProductStores/CartStore';
import cartFixture from  '../../fixtures/CartFixture/CartFixture.json';

/*global expect,jest*/
describe("",()=>{
    let cartStore;
    beforeEach(()=>{
        cartStore = new CartStore();
    });
    
    it("Should test the cartItem",()=>{
        const onRemoveCartItem =jest.fn();
        cartStore.onClickAddToCart(cartFixture[0]);
        // console.log(cartStore.cartProductList);
        const {getByTestId} = render(
            <Provider cartStore={cartStore}>
                <CartItem cartItem={cartStore.cartProductList[0]}/>
            </Provider>
            );
        expect(getByTestId("cartItemTitle")).toHaveTextContent("Cat Tee Black T-Shirt");
        expect(getByTestId("Quantity")).toHaveTextContent("Quantity:1");
        expect(onRemoveCartItem).not.toBeCalled();
        
    });
    
    it("Should test the cartItem quantity",()=>{
        cartStore.onClickAddToCart(cartFixture[0]);
        // cartStore.onClickAddToCart(cartFixture[0]);
        // cartStore.onClickAddToCart(cartFixture[0]);
        const {getByTestId} = render(
            <Provider cartStore={cartStore}>
                <CartItem cartItem={cartFixture[0]}/>
            </Provider>
            );
        expect(getByTestId("Quantity")).toHaveTextContent("Quantity:1");
    });
    
    
    
    it("should test the empty list of cartItem",()=>{
        const onRemoveCartItem = jest.fn();
        cartStore.onClickAddToCart(cartFixture[0]);
        const {getByRole} = render(
            <Provider cartStore={cartStore}>
                <CartItem cartItem={cartStore.cartProductList[0]}/>
            </Provider>
            );
            
            const crossButton = getByRole("button",{name:"x"});
            fireEvent.click(crossButton);
            waitFor(()=>expect(onRemoveCartItem).toBeCalled());
            expect(cartStore.cartProductList).toEqual([]);
            // console.log(cartStore.cartProductList)
    });
    
    
    
});