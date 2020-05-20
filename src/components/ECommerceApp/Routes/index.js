import React from 'react';

import ProductPage from '../components/ProductPage';
import {ProtectedRoute} from '../../../common/ProtectedRoute';
const ecommerceRoute = [<ProtectedRoute key={Math.random()} component = {ProductPage} exact path ={"/ecommerce-store/products"} />];

export {ecommerceRoute};