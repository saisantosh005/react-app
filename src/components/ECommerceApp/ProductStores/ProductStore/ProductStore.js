import {observable,computed ,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL,API_FAILED,API_FETCHING,API_SUCCESS} from '@ib/api-constants';
import {clearUserSession} from '../../../../utils/StorageUtils.js';
import ProductModel from '../model/ProductModel';


class ProductStore{
    @observable listOfProducts;
    @observable listOfCartProducts;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable sortBy;
    @observable sizeFilter;
    @observable extraArray
    productService;
    
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
            // let array = new Map();
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
            return array.sort((a,b)=>a.price<b.price);
        }
        else{
            return array.sort((a,b)=>a.price>b.price);
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
    onChangSortBy(event){
        this.sortBy = event.target.value;
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
        apiResponse.forEach((item)=>{
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
        const productPromise = this.productService.getProductAPI();
        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setProductListAPIStatus,this.setProductListResponse)
        .catch(this.setProductListAPIError);
    }
}
export default ProductStore;

