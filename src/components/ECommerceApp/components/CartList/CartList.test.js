import React from 'react'

import {render,fireEvent,waitFor} from '@testing-library/react';
import {CartList} from '.';
import CartStore from '../../ProductStores/CartStore';


describe("it describes test case for cartlists",()=>{
    let cartlist;
    let cartStore;
    
    beforeEach("",()=>{
        cartlist = new CartList();
        cartStore = new CartStore();
    });
    
    it("",()=>{
        const {getByText} =render(
            <Provider cartStore = {cartStore}>
                <CartList />
            </Provider>);
        
    });
    
})