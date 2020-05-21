import React from 'react';
import {LoginPageMainDiv,
        LoginBoxStyle,
        UserNameStyle,
        PasswordStyle,
        SignInButtonStyle,SignInNameStyled,
        ErrorMessage
} from '../../styledComponents';
import {observer} from 'mobx-react';

// import {getAccessToken} from '../../../../utils/StorageUtils.js';

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
    userNameRef = React.createRef();
    componentDidMount(){
        this.userNameRef.current.focus();
        console.log(4);
    }
    
    render(){
        let {onChangeUserName,onChangePassword,
            onSubmit,userName,password,disabled,
            errorMessage} = this.props;
        return(
            <LoginPageMainDiv>
                <LoginBoxStyle
                    onSubmit={onSubmit}>
                    <SignInNameStyled>
                        Sign in
                    </SignInNameStyled>
                    <UserNameStyle 
                        ref = {this.userNameRef}
                        type="text"
                        defaultValue={userName}
                        onChange = {onChangeUserName} 
                        placeholder="Username"
                    />
                    <PasswordStyle 
                        defaultValue={password}
                        onChange={onChangePassword} 
                        type="Password"
                        placeholder="Password"
                    />
                    <SignInButtonStyle 
                        disabled = {disabled}
                        data-testid='sign-in-button'
                        type="submit"
                        onClick={onSubmit}>
                            Sign In
                    </SignInButtonStyle>
                    {errorMessage!==""?
                        <ErrorMessage>
                            {errorMessage}
                        </ErrorMessage>:null
                    }
                </LoginBoxStyle>
            </LoginPageMainDiv>
        );
    }
}


export  {SignInPage};