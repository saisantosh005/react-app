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
    @observable limit=4;
    
    @computed get noOfBars() {
        return (16/this.limit);
    }
    componentDidMount(){
        this.getProductStoreData().getProductList(`products?limit=${this.limit}&offset=0`);
    }
    incrementLimit=()=>{
        this.limit++;
    }
    decrementLimit=()=>{
        this.limit--;
    }
    
    getProductStoreData=()=>{
        return this.props.productStore;    
    }
    
    
    doNetWorkCalls=()=>{
        this.getProductStoreData().getProductList("products?limit=3&offset=0");
    }
    
    renderProductList=observer(()=>{
        let {onClickAddToCart} =this.props.cartStore;
        let {listOfProducts,sortedAndFilteredProducts}=this.getProductStoreData();
        if(listOfProducts.size===0){
            return <NoDataView/>;
        }
        let arrayIt=[];
        // console.log("hel",sortedAndFilteredProducts);
        sortedAndFilteredProducts.forEach(item=> {arrayIt.push(<Product onClickAddToCart = {onClickAddToCart}
            key ={item.id} productDetails = {item}/>)});
        return arrayIt;
    });
    
    
    render(){
        const {getProductListAPIError,getProductListAPIStatus} = this.getProductStoreData();
        return(
            <ProductBodyDivStyle>
                <Header productStore={this.props.productStore}/>
                <Pagination value ={{"one":this.limit,"two":this.noOfBars}} incrementLimit={this.incrementLimit}
                    decrementLimit={this.decrementLimit} />
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
export {ProductList};

        // alert(listOfProducts.get(1));
        // console.log(listOfProducts);
        // return sortedAndFilteredProducts.map((item,index)=><Product onClickAddToCart = {onClickAddToCart} key={item.id} productDetails = {item}/>);
