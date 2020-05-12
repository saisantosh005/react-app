import React from "react";
import {render} from "@testing-library/react";
import Header from '.';
import ProductStore from '../../ProductStores/ProductStore';
import ProductService from '../../Service/ProductService';
import getProductAPI from '../../fixtures/ProductFixtures/ProductFixture.json';



/*global expect*/
describe("",()=>{
    let productStore = new ProductStore();
    let productAPI = new ProductService();
    beforeEach(()=>{
        productAPI = new ProductService();
        productStore = new ProductStore(productAPI);
    });
    
    
    it("shuold check the no of products",()=>{
        const {getByText}  = render(<Header productStore= {productStore}/>);
        getByText(/0/i);
    });
    
    it("sholud check the data when products loaded",()=>{
        const {getByText}  = render(<Header productStore= {productStore}/>);
        productStore.setProductListResponse(getProductAPI);
        getByText(/16/i);
    });
})