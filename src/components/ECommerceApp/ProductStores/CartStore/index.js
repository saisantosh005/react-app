import {observable,computed,action} from 'mobx';
import CartModel from '../model/CartModel';
class CartStore{
    @observable cartProductList;
    @observable productStore;
    
    constructor(props){
        this.cartProductList=new Map();
        // this.cartProductList=observable(new Map());
        // alert(props.listOfProducts);
    }
    
    @action.bound
    onClickAddToCart(input){
        if(this.cartProductList.has(input.id)){
            this.cartProductList.get(input.id).incrementQuantity();
        }
        else{
            const cartObject = {
                image:input.image,
                id:input.id,
                availableSizes:input.availableSizes,
                currencyFormat:input.currencyFormat,
                description:input.description,
                isFreeShipping:input.isFreeShipping,
                installments:input.installments,
                price:input.price,
                style:input.style,
                title:input.title,
                quantity:1,
            };
            this.cartProductList.set(cartObject.id,new CartModel(cartObject));
        }
        
    }
    
    onRemoveCartItem=(input)=>{
        if(this.cartProductList.has(input.id)){
            this.cartProductList.delete(input.id);
        }
    }
    
    clearCart =()=>{
        alert("Thank you for shopping with us 😊.Your products will be delivered in 3 days to the address mentioned in your profile.");
        this.cartProductList.clear();
    }
    
    getProductDetailsById=()=>{
        
        
    }
    @computed get totalCartAmout(){
        let amount = 0;
        this.cartProductList.forEach((value,key)=>{amount = amount+(value.price*value.quantity)});
        return amount.toFixed(2);
    }
    
    @computed get noOfProductInCart(){
        let noOfProductInCart = 0;
        this.cartProductList.forEach((value,key)=>{
            noOfProductInCart+=value.quantity;
        });
        return noOfProductInCart;
    }
}
export default CartStore;