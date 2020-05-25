import React from 'react';
import {Provider} from 'mobx-react';
import{render,waitFor,fireEvent} from '@testing-library/react';

import {ProductList} from '.';
import ProductStore from '../../ProductStores/ProductStore';
import ProductService from '../../Service/ProductService';

import CartStore from '../../ProductStores/CartStore';


/*global expect,jest*/
describe("should test the productList",()=>{
    
    let cartStore;
    
    let productStore;
    let productAPI;
    
    beforeEach(()=>{
        productAPI = new ProductService();
        cartStore = new CartStore();
        productStore =new ProductStore(productAPI);
    });
    
    it("test the productList",()=>{
        const renderProductList = jest.fn();
        const {getByTestId} = render(
            <Provider  cartStore = {cartStore} productStore = {productStore}>
                <ProductList />
            </Provider>
        );
        expect(productStore.listOfProducts.size).toBe(0);
        
        expect(getByTestId("productDetailsDiv")).toHaveTextContent("");
        expect(renderProductList).toBeCalled();
        // console.log(productStore.getProductListAPIStatus);
        
    });
});

