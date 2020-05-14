

const ProtectedRoute = (props)=>{
    const {ecommerceProductsPath,signInPath} = this.props;
    if(isLogin()){
        <Route to={ecommerceProductsPath}/>;
    }
    else{
        <Redirect to={signInPath}/>;
    }
};

export {ProtectedRoute};