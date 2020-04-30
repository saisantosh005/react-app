import {observable} from 'mobx';

class ProductModel {
    @observable image;
    @observable id;
    @observable availableSizes;
    @observable currencyFormat;
    @observable description;
    @observable isFreeShipping;
    @observable installments;
    @observable price;
    @observable style;
    @observable title;
    @observable quantity;
    
    constructor(productDetails){
        this.image=productDetails.image;
        this.id=productDetails.id;
        this.availableSizes=productDetails.availableSizes;
        this.currencyFormat=productDetails.currencyFormat;
        this.description=productDetails.description;
        this.isFreeShipping=productDetails.isFreeShipping;
        this.installments=productDetails.installments;
        this.price=productDetails.price;
        this.style=productDetails.style;
        this.title=productDetails.title;
        this.quantity = productDetails.quantity;
   
    }
        
}

export default ProductModel;