import React from 'react';
import {Redirect,Route}  from 'react-router-dom';

import {getAccessToken} from '../../components/AuthLogin/utils/StorageUtils.js';

const ProtectedRoute = (props)=>{
    const {component:Component,...rest} = props;
    if(getAccessToken()!==undefined){
        return <Route component={Component} {...rest} />;
    }
    else{
        return <Redirect to={"/ecommerce-store/sign-in"}/>;
    }
};

export {ProtectedRoute};