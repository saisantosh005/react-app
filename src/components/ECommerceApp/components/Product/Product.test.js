import React from 'react';
import {Provider} from 'mobx-react';
import {render,waitFor,fireEvent} from '@testing-library/react';
import CartStore from '../../ProductStores/CartStore';
import productFixture from '../../fixtures/ProductFixtures/ProductFixture.json'
import {Product} from '.';

/*global jest,expect*/
describe("",()=>{
    let cartStore;
    beforeEach(()=>{
        cartStore=  new CartStore();
    });
    
    // it("should test the Product details",()=>{
    //     const onClickAddToCart = jest.fn();
        
    //     const {getByTestId,getByText}=  render(
    //         <Provider cartStore={null}>
    //             <Product productDetails = {null} onClickAddToCart = {onClickAddToCart} />
    //         </Provider>
    //     );
        
    //     expect(getByText("Cat Tee Black T-Shirt")).toHaveTextContent("");
    //     expect(getByTestId("freeShipping")).toHaveTextContent("");
        
    //     expect(onClickAddToCart).not.toBeCalled();
    // });
    
    
    
    it("should test the Product details",()=>{
        const productDetails = productFixture[0];
        const onClickAddToCart = jest.fn();
        const {getByRole,getByTestId,getByText}=  render(
            <Provider cartStore={cartStore}>
                <Product productDetails = {productDetails} onClickAddToCart = {onClickAddToCart} />
            </Provider>
        );
        
        const addToCartButton = getByRole("button",{name:'Add to cart'});
        getByText("Cat Tee Black T-Shirt");
        expect(getByTestId("freeShipping")).toHaveTextContent("Free shipping");
        expect(onClickAddToCart).not.toBeCalled();
    });
    
    
    it("should test the Product details",()=>{
        const productDetails = productFixture[0];
        const onClickAddToCart = jest.fn();
        const notifyToast = jest.fn();
        const {getByRole,getByTestId,getByText}=  render(
            <Provider cartStore={cartStore}>
                <Product productDetails = {productDetails} onClickAddToCart = {onClickAddToCart} />
            </Provider>
        );
        
        const addToCartButton = getByRole("button",{name:'Add to cart'});
        getByText("Cat Tee Black T-Shirt");
        expect(getByTestId("freeShipping")).toHaveTextContent("Free shipping");
        
        fireEvent.click(addToCartButton);
        waitFor(()=>{
            expect(onClickAddToCart).toBeCalled();
            expect(notifyToast).toBeCalled();
        });
    });
})