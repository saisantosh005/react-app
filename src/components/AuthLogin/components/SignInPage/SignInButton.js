import React from 'react';

import {
    SignInButtonStyle
    } from '../../styledComponents';


class SignInButton extends React.Component{
    render(){
        const {disabled,
                testid,
                type,
                onClick,
                label
        } = this.props;
        return(
            <SignInButtonStyle 
                data-testid={testid} 
                disabled={disabled}
                type={type}
                onClick={onClick}
            >{label}
            </SignInButtonStyle>
            );
    }
}
export {SignInButton}