import React from 'react';
import Product from '../Product';
import {observer,inject} from 'mobx-react';
import Header from '../Header';
import {ProductListStyle,ProductBodyDivStyle}  from '../../styledComponents/ProductList';
import ProductStore from '../../ProductStores/ProductStore';
import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../../common/NoDataView/index.js';


@inject("productStore","cartStore")
@observer
class ProductList  extends React.Component{
    componentDidMount(){
        this.getProductStoreData().getProductList();
    }
    getProductStoreData=()=>{
        return this.props.productStore;    
    }
    doNetWorkCalls=()=>{
        this.getProductStoreData().getProductList();
    }
    
    renderProductList=observer(()=>{
        let {onClickAddToCart} =this.props.cartStore;
        let {listOfProducts,sortedAndFilteredProducts,products}=this.getProductStoreData();
        if(listOfProducts.size===0){
            return <NoDataView/>;
        }
        
        let arrayIt=[];
        // products.forEach((value,key,map)=>
        //     arrayIt.push(<Product onClickAddToCart = {onClickAddToCart} key={value.id} productDetails = {value}/>)
        // );
        // products.
        sortedAndFilteredProducts.forEach(item=> {arrayIt.push(<Product onClickAddToCart = {onClickAddToCart}
            key ={item.id} productDetails = {item}/>)});
        return arrayIt;
    });
    render(){
        const {getProductListAPIError,getProductListAPIStatus} = this.getProductStoreData();
        return(
            <ProductBodyDivStyle>
                <Header productStore={this.props.productStore}/>
                <ProductListStyle>
                    <LoadingWrapperWithFailure
                        apiStatus = {getProductListAPIStatus}
                        apiError = {getProductListAPIError}
                        onRetryClick={this.doNetWorkCalls}
                        renderSuccessUI={this.renderProductList}/>
                </ProductListStyle>
            </ProductBodyDivStyle>
            );
    }
}
export default ProductList;


        
        // alert(listOfProducts.get(1));
        // console.log(listOfProducts);
        // return sortedAndFilteredProducts.map((item,index)=><Product onClickAddToCart = {onClickAddToCart} key={item.id} productDetails = {item}/>);
