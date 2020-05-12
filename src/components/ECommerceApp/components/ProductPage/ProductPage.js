import React from 'react';
import{observable} from 'mobx';
import{observer,inject} from 'mobx-react';
import {Redirect} from 'react-router-dom';
import {withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EcommerceAppStyle,
    ECommereAPPMainDiv,ProductCartMainDivStyle,
    SignOutAndCartStyle,ToastDivStyle,
    SignOutButtonStyle,ToastMessageStyle
} from '../../styledComponents/ProductPage';
import SizeFilter  from '../SizeFilter';
import ProductList from '../ProductList';
import ProductCart from '../ProductCart';
import Toast     from '../Toast';
import {authStore} from '../../../AuthLogin/stores';
import {getAccessToken,clearUserSession} from '../../../AuthLogin/utils/StorageUtils.js';

@inject("productStore")
@observer
class ProductPage extends React.Component{
    @observable array
    @observable displayToastMessage= false;
    
    // notify = () =>{toast("Product added to your cart!",{position: toast.POSITION.BOTTOM_CENTER})};
    
    componentDidMount(){
        console.log(getAccessToken(),"santosh");
    }
    
    gotToLoginScreen=()=>{
        // this.props.productStore.clearStore();
        // alert("called Goto");
        const {history}=this.props;
        history.replace('/ecommerce-store/sign-in');
        authStore.userSignOut();
        // return null;
        return(
            <Redirect
                to={{
                    pathname:'/ecommerce-store/sign-in',
                }}
            />
        );
    }
    render(){
        if(getAccessToken()===undefined){
            return this.gotToLoginScreen();
        }
        return(
            <EcommerceAppStyle>
                <ProductCartMainDivStyle>
                    <ProductCart />
                </ProductCartMainDivStyle>
                <SignOutAndCartStyle>
                    <SignOutButtonStyle onClick={this.gotToLoginScreen}> Sign Out</SignOutButtonStyle>
                </SignOutAndCartStyle>
                <ECommereAPPMainDiv>
                    <SizeFilter />
                    <ProductList changeToastMessage={this.changeToastMessage}/>
                </ECommereAPPMainDiv>
               <ToastContainer />
            </EcommerceAppStyle>
        );
    }
}

export default withRouter(ProductPage);
