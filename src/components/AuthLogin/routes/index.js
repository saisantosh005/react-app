import {Route } from "react-router-dom";
import React from 'react';
import {SIGN_IN_PATH } from '../constants/RouterConstants';
import SignInRoute from './SignInRoute';

const  route =<Route  path={SIGN_IN_PATH} component={SignInRoute} />;

export {route};