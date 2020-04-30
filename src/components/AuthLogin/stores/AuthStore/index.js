import {action,observable} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js';

class AuthStore{
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    @observable authAPIservice
    access_token;
    
    
    constructor(authAPIservice){
        this.authAPIservice = authAPIservice;
        this.init();
    }
    
    @action
    init(){
        this.getUsersSignInAPIError =null;
        this.getUsersSignInAPIStatus=API_INITIAL;
    }
    @action.bound
    clearStore(){
        this.init();
    }
    
    @action.bound
    setUserSignInAPIResponse(respose){
        this.access_token = respose[0].access_token;
    }
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    userSignIn(){
        const signInPromise = this.authAPIservice.signInAPI();
        return bindPromiseWithOnSuccess(signInPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError);
    }
    
    @action.bound
    userSignOut(){
        alert("Final");
        clearUserSession();
        this.clearStore();
    }
        
}
export default AuthStore;