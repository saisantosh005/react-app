import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {ProductMainDivStyle,
        Image,
        ProductName,
        ProductDataStyle,
        BoldIt,PriceDivStyle,InstallmentsDiv,
        AddToCart,ToastMessage,FreeMainStyle,FreeShippingDivStyle} from './styledComponent.js';
        
import {toast,Slide} from 'react-toastify';
import {Toast}     from '../Toast';
// import {css } from 'glamour';
@inject("cartStore")
@observer 
class Product extends React.Component{
    // @observable displayToastMessage=false;
    
    onClickAddToCart=()=>{
        const {onClickAddToCart} =this.props;
        onClickAddToCart(this.props.productDetails);
        this.notifyToast();
    }
    
    notifyToast=()=>{
        // toast.configure({
        //     hideProgressBar:true,
        // });
        return toast.warn(<Toast />,
            {
                hideProgressBar:true,
                autoClose:1000,
                transition:Slide,
                position:toast.POSITION.BOTTOM_CENTER,
            }
        );
    }
    
    render(){
        const {productDetails}  =this.props;
        const {image,id,
                availableSizes,currencyFormat,
                description,
                isFreeShipping,
                installments,
                price,
                style,
                title,
        } = productDetails;
    
        return(
            <ProductMainDivStyle>
                {isFreeShipping&&<FreeMainStyle>
                    <FreeShippingDivStyle data-testid="freeShipping">Free shipping</FreeShippingDivStyle>
                </FreeMainStyle>}
                <Image src={image} alt="Images" />
                <ProductDataStyle>
                    <ProductName>{title}</ProductName>
                    <PriceDivStyle>
                        {currencyFormat} 
                        <BoldIt> {price.toFixed(0)}</BoldIt>.{(price + "").split(".")[1]}
                    </PriceDivStyle>
                    <InstallmentsDiv>or {installments} * {currencyFormat} {(price/installments).toFixed(2)}</InstallmentsDiv>
                </ProductDataStyle>
                <AddToCart onClick = {this.onClickAddToCart}>
                    Add to cart
                </AddToCart>
            </ProductMainDivStyle>);
    }
}
export {Product};
// <div>{currencyFormat} {Number(price.toFixed(0))+Number((price%price.toFixed(0)).toFixed(2))}</div>