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
    @observable count;
    // @computed get noOfBars() {
    //     return ;
    // }
    componentDidMount(){
        this.getProductStoreData().getProductList(this.limit);
        this.count = Math.ceil(this.limit/16);
        
    }
    incrementLimit=()=>{
        this.limit++;
        this.doNetWorkCalls();
    }
    decrementLimit=()=>{
        this.limit--;
        this.doNetWorkCalls();
    }
    
    getProductStoreData=()=>{
        return this.props.productStore;    
    }
    
    doNetWorkCalls=()=>{
        this.getProductStoreData().getProductList(this.limit);
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
        return arrayIt;
    });
    
    
    render(){
        const {getProductListAPIError,getProductListAPIStatus} = this.getProductStoreData();
        return(
            <ProductBodyDivStyle>
                <Header productStore={this.props.productStore}/>
                <Pagination value ={{"one":this.limit,"two":this.count}} incrementLimit={this.incrementLimit}
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
