import React from 'react';
import {Product} from '../Product';
import {observable,computed} from 'mobx';
import {observer,inject} from 'mobx-react';
import {Header} from '../Header';
import {ProductListStyle,ProductBodyDivStyle}  from './styledComponent.js';
// import ProductStore from '../../ProductStores/ProductStore';
import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../../common/NoDataView/index.js';
import {Pagination} from '../Pagination';

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
        let {listOfProducts,sortedAndFilteredProducts}=this.getProductStoreData();
        if(listOfProducts.size===0){
            return <NoDataView/>;
        }
        let arrayIt=[];
        sortedAndFilteredProducts.forEach(item=> {arrayIt.push(<Product onClickAddToCart = {onClickAddToCart}
            key ={item.id} productDetails = {item}/>)});
            if(arrayIt.length>0){
                return arrayIt;
            }
            else{
                return "No products of your request";
            }
    });
    
    
    render(){
        const {
            getProductListAPIError,
            getProductListAPIStatus,
            noOfPages,
            pageNumber,
            incrementLimit,
            decrementLimit,
        } = this.getProductStoreData();
        return(
            <ProductBodyDivStyle>
                <Header productStore={this.props.productStore}/>
                <Pagination data-testid="pagination" value ={{"one":pageNumber,"two":noOfPages}} incrementLimit={incrementLimit}
                    decrementLimit={decrementLimit} />
                <ProductListStyle data-testid="productDetailsDiv">
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
export {ProductList};
