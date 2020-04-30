import React from 'react';
import {Route } from "react-router-dom";
import SignInPage  from '../../components/SignInPage'
import {SIGN_IN_PATH } from '../../constants/RouterConstants';
const  route =<Route path={SIGN_IN_PATH} component={SignInPage} />
export {route};