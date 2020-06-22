import {action,observable} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {clearUserSession} from '../../utils/StorageUtils.js';

class AuthStore{
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;

    authAPIservice;
    
    access_token;

    constructor(authAPIservice){
        this.authAPIservice = authAPIservice;
        this.init();
    }
    
    @action.bound
    init(){
        this.getUserSignInAPIError =null;
        this.getUserSignInAPIStatus=API_INITIAL;
    }
    
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    
    @action.bound
    setUserSignInAPIResponse(respose){
        this.access_token = respose[0].access_token;
    }
    
    @action.bound
    userSignIn(request,onSuccess,onFailure){
        const UserSignInPromise = this.authAPIservice.signInAPI();
        return bindPromiseWithOnSuccess(UserSignInPromise)
        .to(this.setGetUserSignInAPIStatus,response=>{
            this.setUserSignInAPIResponse(response);
            onSuccess();
        })
        .catch(error=>{
            this.setGetUserSignInAPIError();
            onFailure();
        });
    }

    @action.bound
    userSignOut(){
        clearUserSession();
        this.init();
    }
    
}
// export {AuthStore};
export default AuthStore;