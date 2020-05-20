import React from 'react';
import {SignInPage}  from '../../components/SignInPage';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router';

import {authStore} from '../../stores';
import {ECOMMERCE_APP_PATH,ERROR_MESSAGE_ONE,ERROR_MESSAGE_TWO} from '../../constants/SignInPage';
import {setAccessToken} from '../../../../utils/StorageUtils.js';

@observer
class SignInRoute extends React.Component{
    @observable password;
    @observable userName;
    @observable errorMessage;
    @observable disabled=false;
    
    constructor(props){
        super(props);
    }
    
    onChangePassword=(event)=>{
        this.password = event.target.value;
    };
    onChangeUserName=(event)=>{
        this.userName=event.target.value;
    }
   
    onSubmit=(event)=>{
        event.preventDefault();
        if(this.userName===""||this.userName===undefined){
            this.errorMessage=ERROR_MESSAGE_ONE;
        }
        else if(this.password===""||this.password===undefined){
            this.errorMessage=ERROR_MESSAGE_TWO;
        }
        else{
            this.disabled=true;
            authStore.userSignIn({},this.onSuccess,this.onFailure);
        }
    }
    
    onSuccess=(input)=>{
        this.errorMessage="";
        setAccessToken(authStore.access_token);
        let {history} =this.props;
        history.replace(ECOMMERCE_APP_PATH);
    }
    
    onFailure = ()=>{
        const {getUserSignInAPIError:apiError} =authStore;
        if(apiError!==null&&apiError!==undefined){
            this.errorMessage = JSON.parse(apiError).problem;
        }
    }
    
    renderProductPage = ()=>{
        return <Redirect to={ECOMMERCE_APP_PATH}/>;
    }
    
    render(){
        return(
            <SignInPage 
                onChangePassword={this.onChangePassword}
                onChangeUserName={this.onChangeUserName}
                onSubmit={this.onSubmit}
                errorMessage = {this.errorMessage}
                userName={this.userName}
                password={this.password}
                disabled={this.disabled}
            />
        );
    }
}

export default withRouter(SignInRoute);