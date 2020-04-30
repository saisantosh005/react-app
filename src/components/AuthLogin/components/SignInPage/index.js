import React from 'react';
import {LoginPageMainDiv,
        LoginBoxStyle,
        UserNameStyle,
        PasswordStyle,
        SignInButtonStyle,SignInNameStyled,
        ErrorMessage
} from '../../styledComponents';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {getAccessToken,setAccessToken} from '../../../../utils/StorageUtils.js';
import {ECOMMERCE_APP_PATH,ERROR_MESSAGE_ONE,ERROR_MESSAGE_TWO} from '../../constants/SignInPage';
import {authStore} from '../../stores';

import cookieconsent  from "cookieconsent";


window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#f1d600"
    }
  }
});

@observer
class SignInPage extends React.Component{
    @observable userName="";
    @observable password="";
    @observable errorMessage = "";
    constructor(props){
        super(props);
        authStore.userSignIn();
    }
    
    onChangePassword=(event)=>{
        this.password = event.target.value;
    };
    onChangeUserName=(event)=>{
        this.userName=event.target.value;
    }
    signInOrShowErrorMessage=(event)=>{
        event.preventDefault();
        if(this.userName===""){
            this.errorMessage=ERROR_MESSAGE_ONE;
        }
        else if(this.password===""){
            this.errorMessage=ERROR_MESSAGE_TWO;
        }
        else{
            this.redirect();
        }
    }
    redirect=()=>{
        setAccessToken(authStore.access_token);
        this.errorMessage="";
        let {history} =this.props;
        history.replace(ECOMMERCE_APP_PATH);
    }
    render(){
        if(getAccessToken()!==undefined){
                this.redirect();
            }
        return(
            <LoginPageMainDiv>
                <LoginBoxStyle onSubmit={this.signInOrShowErrorMessage}>
                    <SignInNameStyled>
                        Sign in
                    </SignInNameStyled>
                    <UserNameStyle onChange = {this.onChangeUserName} placeholder="Username"/>
                    <PasswordStyle onChange={this.onChangePassword} type={"Password"} placeholder="Password"/>
                    <SignInButtonStyle 
                        data-testid='sign-in-button'
                        type="submit" onClick={this.signInOrShowErrorMessage}>
                        Sign In
                    </SignInButtonStyle>
                    {this.errorMessage!==""?<ErrorMessage>{this.errorMessage}</ErrorMessage>:""}
                </LoginBoxStyle>
            </LoginPageMainDiv>);
    }
}


export default withRouter(SignInPage);