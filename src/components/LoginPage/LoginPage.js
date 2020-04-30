import React from 'react';
import {LoginPageStyled,UserNameStyle,UserPassword,SubmitButtonStyle} from './loginPageStyle.js';
import {setAccessToken} from '../../utils/StorageUtils.js';
import {Redirect} from 'react-router-dom';
class LoginPage extends React.Component{
    setCookie=()=>{
        setAccessToken(120);
        
        <Redirect
                to={{
                    pathname:'/Login-page',
                }}
            />
    }
    render(){
        return(
            <LoginPageStyled>
                <UserNameStyle placeholder="User Name" />
                <UserPassword placeholder ="PassWord"/>
                <SubmitButtonStyle onClick={this.setCookie}>Submit</SubmitButtonStyle>
            </LoginPageStyled>);
    }
}
export default LoginPage;