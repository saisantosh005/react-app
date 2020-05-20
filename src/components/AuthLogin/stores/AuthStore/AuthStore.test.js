


// import React from 'react';
import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS,
    } from '@ib/api-constants';
import AuthService from '../../services/AuthService/index.js';
import AuthStore from './AuthStore.js';
import getUserSignInRespnse from '../../fixtures/SignInResponse/index.json';

/*global expect,jest*/
describe("AuthStore Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthService();
    authStore = new AuthStore(authAPI);
  });

  it("should test initialising auth store", () => {
    expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
    expect(authStore.getUserSignInAPIError).toBe(null);
  });
  
  it("should render fetching state",async()=>{
      let onSuccess=jest.fn();
      let onFailure=jest.fn();
      
      const  getPromise=new Promise(function(resolve,reject){});
      const mockSignInAPI=jest.fn();
      mockSignInAPI.mockReturnValue(getPromise);
      
      
      authAPI.signInAPI=mockSignInAPI;
      await authStore.userSignIn(1,onSuccess,onFailure);
        
      expect(authStore.setGetUserSignInAPIStatus).toBeCalled();
      
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
      expect(onSuccess).not.toBeCalled();
      expect(onFailure).not.toBeCalled();
  });
  
  
  it("should render success state",async()=>{
      let onSuccess=jest.fn();
      let onFailure=jest.fn();
      let setGetUserSignInAPIError=jest.fn();
      let setGetUserSignInAPIStatus = jest.fn();

      const  getPromise=new Promise(function(resolve,reject){
          resolve(getUserSignInRespnse);
      });
      
      const mockSignInAPI=jest.fn();
      mockSignInAPI.mockReturnValue(getPromise);
      authAPI.signInAPI=mockSignInAPI;
      await authStore.userSignIn(1,onSuccess,onFailure);
      
      expect(authStore.setGetUserSignInAPIStatus).toBeCalled();
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
      expect(onSuccess).toBeCalled();
      expect(onFailure).not.toBeCalled();
  });
  
  
  it("should render error state",async()=>{
      let onSuccess=jest.fn();
      let onFailure=jest.fn();

        const getPromise=new Promise(function(resolve,reject){
            reject(new Error("error"));
        });
      
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(getPromise);
        authAPI.signInAPI=mockSignInAPI;
        await authStore.userSignIn(1,onSuccess,onFailure);
      
        expect(authStore.setGetUserSignInAPIStatus()).not.toBeCalled();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);    
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).toBeCalled();
        expect(authStore.setGetUserSignInAPIError()).toBeCalled();
    });

    it("should test user sign-out",()=>{
        authStore.userSignOut();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
});
