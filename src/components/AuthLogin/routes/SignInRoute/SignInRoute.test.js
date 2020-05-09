import React from 'react';
import {render,fireEvent,waitFor,waitForDomChange} from '@testing-library/react';
import {Router,Route,withRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import {createMemoryHistory} from 'history';


import AuthService from '../../services/AuthService';

import AuthStore from '../../stores/AuthStore';

import SignInRoute from '.';

import getSignInResponse from '../../fixtures/SignInResponse';



import {
    SIGN_IN_PATH,
    ECOMMERCE_APP_PATH
} from '../../constants/RouterConstants';

const LocationDisplay = withRouter(({location})=>(
    <div data-testid="location-display">
        {location.pathname};
    </div> 
));

/*global expect,jest*/
describe("SignInRoute Tests",()=>{
    let authAPI;
    let authStore;
    
    beforeEach(()=>{
        authAPI = new AuthService();
        authStore = new AuthStore(authAPI);
    });
    
    afterEach(()=>{
        jest.resetAllMocks();
    });
    
    it("should render Username empty message",()=>{
        const {getByText,getByRole } = render(
        <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
        </Router>
    );
    const signInButton = getByRole("button", { name: "Sign In" });

    fireEvent.click(signInButton);

    getByText(/Please enter username/i);
    
    });
    
    it("should render password empty error Message",()=>{
        const {getByText,getByRole,getByPlaceholderText} = render(
            
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );
        const userName = "test-user";
        const userNameField = getByPlaceholderText("Username");
        const signInButton = getByRole("button",{name:"Sign In"});  
        
        fireEvent.change(userNameField,{target:{value:userName}});
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
        
    });
    
    it("should submit sign in or press enter",()=>{
        const {getByRole,getByPlaceholderText,getByLabelText} = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore = {authStore}/>
            </Router>
            );
        
        const username="user-name";
        const password="password";
        const userNameField= getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const button = getByRole("button",{name:"Sign In"});
        
        
        fireEvent.change(userNameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(button);
        // waitFor(()=>getByLabelText("audio-loading"));
    });
    
    it("should test sign in loading state",()=>{
        const {getByPlaceholderText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>);
            
        const username="test-user";
        const password = "test-password";
        
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const button = getByRole("button",{name:"Sign In"});
        
        
        const mockLoadingPromise = new Promise(function(resolve,reject){});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authStore.signInAPI = mockSignInAPI;
        
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(button);
        
        // getByRole("button",{disabled:true});
        
    });
    
    
    
    it("should render signinRoute success State",async()=>{
        const history  =    createMemoryHistory();
        const route = SIGN_IN_PATH;
        
        history.push(route);
        
        const {getByPlaceholderText,getByRole,queryByRole} = render(
            <Provider authStore={authStore}>
                <Router history={history}>
                    <Route path = {SIGN_IN_PATH}>
                        <SignInRoute />
                    </Route>
                    <Route path = {ECOMMERCE_APP_PATH}>
                        <LocationDisplay />
                    </Route>
                </Router>
            </Provider>
        );

        const username = "user-name";
        const password = "password";
        
        const userNameField= getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const button = getByRole("button",{name:"Sign In"});
        
        const mockSuccessPromise=new Promise((resolve,reject)=>{
            resolve(getSignInResponse);
        });
        const mockSignInApi = jest.fn();
        mockSignInApi.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInApi;
        
        fireEvent.change(userNameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(button);
        
        await waitFor(()=>{
            expect(queryByRole("button",{name:"Sign in"})).not.toBeInTheDocument();
        });
    });
    
    it("sholud test server error state",async()=>{
        
        const {getByPlaceholderText,getByRole,getByText} = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}   />
            </Router>
        );
        
        const username = "user-name";
        const password = "password";
        const userNameField= getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const button = getByRole("button",{name:"Sign In"});
        
        const mockSuccessPromise=new Promise((resolve,reject)=>{
            reject(new Error("Server Error"));
        }).catch(()=>{});
        const mockSignInApi = jest.fn();
        mockSignInApi.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInApi;
        
        fireEvent.change(userNameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(button);
        
       await waitForDomChange(()=>{
            getByText(/server-error/i);
        });
        
    });
});










