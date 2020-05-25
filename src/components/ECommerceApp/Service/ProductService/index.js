import {create} from 'apisauce';
import {apiMethods} from '../../../../constants/APIConstants';
import {networkCallWithApisauce} from '../../../../utils/APIUtils.js';


class ProductService{
    api
    constructor(){
        this.api=create({
            baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
        });
    }
    
    getProductAPI=(input,offsetValue)=>{
        // const endPoint = `products?limit=3&offset=5`;
        return networkCallWithApisauce(
            this.api,
            `products?limit=${input}&offset=${offsetValue}`,
            {},
            apiMethods.get);
    }
    
}   
// baseURL:"https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
// 'v1/products/',
export default ProductService;