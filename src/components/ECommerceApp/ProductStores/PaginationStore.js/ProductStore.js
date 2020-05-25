import {observable,computed ,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL,API_FAILED,API_FETCHING,API_SUCCESS} from '@ib/api-constants';
import ProductModel from '../model/ProductModel';

import {clearUserSession} from '../../../../utils/StorageUtils.js';



class ProductStore{
    @observable listOfProducts;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable sortBy;
    @observable sizeFilter;
    productService;
    
    @observable pageNumber=1;
    @observable noOfPages=0;
    limit=3;
    @observable offset = 0;
    
    @action.bound
    incrementLimit(){
        this.offset=this.offset+this.limit;
        this.pageNumber++;
        this.getProductList();
    }
    
    @action.bound
    decrementLimit(){
        this.offset=this.offset-this.limit;
        this.pageNumber--;
        this.getProductList();
    }
    
    constructor(productService){
        this.productService = productService;
        this.init();
    }
    
    @action.bound
    init(){
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.sizeFilter=[];
        this.listOfProducts=new Map();
        this.sortBy="SELECT";
    }
    
    // @action.bound
    // clearStore(){
    //     clearUserSession();
    //     this.init();
    // }
    
    @computed get products(){
        if(this.sizeFilter.length!==0){
            let array = [];
            this.listOfProducts.forEach((value,key,map)=>{
                if(this.isProductPresent(value.availableSizes)){
                    array.push(value);
                }
            });
            return array;
        }
        const array=[];
        this.listOfProducts.forEach((value,key,map)=>{array.push(value)});
        return array;
    }
    
    
    @computed get sortedAndFilteredProducts(){
        let array = this.products;
        if(this.sortBy==="SELECT"){
            return array;
        }
        else if(this.sortBy==="HIGHEST TO LOWEST"){
            const myData = [].concat(array).sort((a, b) => a.price < b.price ? 1 : -1);
            return myData;
        }
        else{
            const myData = [].concat(array).sort((a, b) => a.price > b.price ? 1 : -1);
            return myData;
        }
    }
    
    
    @computed get totalNoOfProductsDisplayed(){
        return this.products.length;
    }

    @action.bound
    onSelectSize(input){
        let count =0;
        let array = this.sizeFilter;
        for(let i=0;i<array.length;i++){
            if(array[i]===input){
                count++;
                this.sizeFilter.splice(i,1);
            }
        }
        if(count===0){
            this.sizeFilter.push(input);
        }
    }
    
    @action.bound
    onChangSortBy(input){
        this.sortBy = input;
    }
    
    @action.bound
    isProductPresent(productSizes){
        for(let sizeIndex=0;sizeIndex<this.sizeFilter.length;sizeIndex++){
            for(let productSizeIndex=0;productSizeIndex<productSizes.length;productSizeIndex++){
                if(this.sizeFilter[sizeIndex]===productSizes[productSizeIndex]){
                    return true;
                }
            }
        }
        return false;
    }
    
    @action.bound
    setProductListResponse(apiResponse){
        this.noOfPages = Math.ceil(apiResponse.total/(this.limit));
        
        this.listOfProducts=new Map();
        apiResponse.products.forEach((item)=>{
            item.quantity = 0;
            this.listOfProducts.set(item.id,new ProductModel(item));
        });
    }
    
    @action.bound
    setProductListAPIError(apiError){
        this.getProductListAPIError=apiError;
    }
    
    
    @action.bound
    setProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }
    
    @action.bound
    getProductList(){
        const productPromise = this.productService.getProductAPI(this.limit,this.offset);
        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setProductListAPIStatus,this.setProductListResponse)
        .catch(this.setProductListAPIError);
    }
}
export default ProductStore;

