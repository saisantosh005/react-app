import React from 'react';
import{observable} from 'mobx';
import{observer} from 'mobx-react';
import {withRouter } from 'react-router-dom';

import {authStore} from '../../../AuthLogin/stores';
import {getAccessToken} from '../../../AuthLogin/utils/StorageUtils.js';
import ProductPage from '../../components/ProductPage';
//  import {Redirect} from 'react-router-dom';

@observer
class ProductPageRoute extends React.Component{
    @observable array
    @observable displayToastMessage= false;
    // notify = () =>{toast("Product added to your cart!",{position: toast.POSITION.BOTTOM_CENTER})};
    componentDidMount(){
        console.log(getAccessToken(),"santosh");
    }
    
    gotToLoginScreen=()=>{
        const {history}=this.props;
        history.replace('/ecommerce-store/sign-in');
        authStore.userSignOut();
        // return null;
        // return(
        //     <Redirect
        //         to={{
        //             pathname:'/ecommerce-store/sign-in',
        //         }}
        //     />
        // );
    }
    
    
    render(){
        if(getAccessToken()===undefined){
            this.gotToLoginScreen();
        }
        return(
            <ProductPage gotToLoginScreen = {this.gotToLoginScreen}/>
        );
    }
}


export default withRouter(ProductPageRoute);



/*


const ecommerceAppRoute=[
<ProtectedRout ecommerceProductsPath={ECOMMERCE_APP_PATH} signInPath={SIGN_IN_PATH}/>];

export {ecommerceAppRoute}



*/