import React from 'react';

import {
    API_FAILED,
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
} from '@ib/api-constants';

import ProductService from '../../Service/ProductService';
import ProductStore  from '.';

import getProductAPI from '../../fixtures/ProductFixtures/ProductFixture.json';

import ProductModel from '../model/ProductModel/index.js';
import testFixture from '../../fixtures/ProductFixtures/test.json';
// import fixtureProductData from '../../'

/*global jest,expect*/
describe("Product Store tests",()=>{
    let productAPI;
    let productStore;
    
    beforeEach(()=>{
        productAPI = new ProductService();
        productStore = new ProductStore(productAPI);
    });
    
    it("should test the initial cases",()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
    });
    
    it("should test the fetching case",()=>{
        const mockProductAPIPromise = new Promise((resolve,reject)=>{});
        const mockPromiseCall = jest.fn();
        mockPromiseCall.mockReturnValue(mockProductAPIPromise);
        productAPI.getProductAPI=mockPromiseCall;
        
        productStore.getProductList();
   
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
        expect(productStore.getProductListAPIError).toBe(null);
    });
    
    
    
    it("shoule test the succes case",async()=>{
        const mockProductAPIPromise = new Promise(function(resolve,reject){
            resolve(getProductAPI);
        });
        const mockPromiseCall = jest.fn();
        mockPromiseCall.mockReturnValue(mockProductAPIPromise);
        // await 
        productAPI.getProductAPI=mockPromiseCall;
        
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
        expect(productStore.getProductListAPIError).toBe(null);
        expect(productStore.listOfProducts.size).toBe(16);
    });
    
    it("shoule test the failed  case",async()=>{
        const mockProductAPIPromise = new Promise(function(resolve,reject){
            reject(new Error("error"));
        });
        const mockPromiseCall = jest.fn();
        mockPromiseCall.mockReturnValue(mockProductAPIPromise);
        productAPI.getProductAPI=mockPromiseCall;
        
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe("error");
    });
    
    it("should give the filtered data",()=>{
        productStore.onSelectSize("XS");
        productStore.setProductListResponse(getProductAPI);
        expect(productStore.products).toEqual([new ProductModel(getProductAPI[0]),new ProductModel(getProductAPI[7])]);
        expect(productStore.sizeFilter).toEqual(["XS"]);
    });
     it("should give the filtered data",()=>{
        productStore.onSelectSize("XS");
        productStore.onSelectSize("XS");
        // productStore.setProductListResponse(getProductAPI);
        // expect(productStore.products).toEqual([new ProductModel(getProductAPI[0]),new ProductModel(getProductAPI[7])]);
        expect(productStore.sizeFilter).toEqual([]);
    });
   
    it("should test the filtered data as selected",()=>{
        productStore.onSelectSize("XS");
        productStore.onChangSortBy("LOWEST TO HIGHEST");
        productStore.setProductListResponse(getProductAPI);
        expect(productStore.sortedAndFilteredProducts).toEqual([new ProductModel(testFixture[0]),new ProductModel(testFixture[1])]);
        
        expect(productStore.totalNoOfProductsDisplayed).toBe(2);
        expect(productStore.sortBy).toBe("LOWEST TO HIGHEST");
    });
    
    it("should test that a value presetn ",()=>{
        productStore.onSelectSize("XS");
        expect(productStore.isProductPresent(['XS',"S","L"])).toBe(true);
        expect(productStore.isProductPresent(['M',"S","L"])).toBe(false);
    });
    
    it("should test computed variable",()=>{
          productStore.onSelectSize("XS");
        productStore.onChangSortBy("HIGHEST TO LOWEST");
        productStore.setProductListResponse(getProductAPI);
        expect(productStore.sortedAndFilteredProducts).toEqual([new ProductModel(testFixture[1]),new ProductModel(testFixture[0])]);
        expect(productStore.totalNoOfProductsDisplayed).toBe(2);
        expect(productStore.sortBy).toBe("HIGHEST TO LOWEST");
    });
    it("should test computed variable",()=>{
          productStore.onSelectSize("XS");
        productStore.onChangSortBy("SELECT");
        productStore.setProductListResponse(getProductAPI);
        expect(productStore.sortedAndFilteredProducts).toEqual([new ProductModel(testFixture[0]),new ProductModel(testFixture[1])]);
        expect(productStore.totalNoOfProductsDisplayed).toBe(2);
        expect(productStore.sortBy).toBe("SELECT");
    });
 
    
    
})