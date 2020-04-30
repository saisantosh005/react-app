import ProductStore from './ProductStore';
import ProductService from '../Service/ProductService';

import CartStore from './CartStore';

const productService = new ProductService();

const productStore = new ProductStore(productService);

const cartStore = new CartStore(productStore);


export default{
    productStore,
    cartStore,
};