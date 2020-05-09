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
    });
    
})