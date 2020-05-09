
// import dependencies
import React from 'react';

//import react-testing methods
import {render} from '@testing-library/react';
import {SignInPage} from '.';
/*global expect*/
describe("signInForm",()=>{
    it("should render typed userName",()=>{
        const userName = "test-user";
        const {getByPlaceholderText} = render(
            <SignInPage userName={userName} onChangeUserName={()=>{}}/>
        );
        const userNameField = getByPlaceholderText("Username");
    
        expect(userNameField.value).toBe(userName);
    });
    
    
    it("should render typed userPassword",()=>{
        const password = "test-password";
        
        const {getByPlaceholderText} = render(
            <SignInPage password={password} onChangePassword={()=>{}}/>);
        
        const passwordField=getByPlaceholderText("Password");
        expect(passwordField.value).toBe(password);
    });
    
    it("should render error",()=>{
        const errorMessage="Please enter username";
        const {getByText} = render(
            <SignInPage errorMessage={errorMessage}/>);
        
        getByText(/Please enter username/i);
    })
})