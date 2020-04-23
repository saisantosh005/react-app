import {action,observable} from 'mobx';
import {API_INITIAL,API_SUCCESS,API_FAILED,API_FETCHING} from '@ib/api-constants';
import {bindPromiseWithOnSuccess }from '@ib/mobx-promise';
// import {create} from 'apisauce';
// import {networkCallWithApisauce} from '../../utils/APIUtils.js';
// import {apiMethods} from '../../constants/APIConstants';
/*global fetch*/
// import UserService from'../../services/UserServices/index.fixtures';

class UserStore{
    
    @observable getUsersApiStatus;
    @observable getUsersApiError;
    @observable users
    userService
    constructor(userService){
        this.userService=userService;
        this.init();
    }
    
    @action
    init(){
        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users=[];
    }
    @action
    clearStore(){
        this.init();
    }
    
    
    
    @action.bound
    setUserAPIResponse(userResponse){
        this.users = userResponse.map((user)=>user.name);
        // this.getUsersApiStatus = API_SUCCESS;
    }
    @action.bound
    setUsersAPIError(error){
        this.getUsersApiError=error;
        // this.getUsersApiStatus = API_FAILED;
    }
    @action.bound
    setUsersAPIStatus(apiStatus){
        // console.log(apiStatus)
        this.getUsersApiStatus=apiStatus;
    }
    
    @action.bound
    getUsersApi(){
        /* 1
        // const userPromise = fetch("https://jsonplaceholder.typicode.com/users");
        
        // this.getUsersApiStatus=API_FETCHING;
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res=>res.json())
        // .then(this.setUserAPIResponse)
        // .catch(this.setUsersAPIError);*/
        
        // USING API SAOUCE SYNTAX
      
        // const api = create({
        //     baseURL:"https://jsonplaceholder.typicode.com/",
        // });
        // const usersPromise=networkCallWithApisauce(
        //     api,
        //     'users/',
        //     {},
        //     apiMethods.get);
        //     const userPromise = fetch("https://jsonplaceholder.typicode.com/users");
        // return bindPromiseWithOnSuccess(usersPromise)
        // .to(this.setUsersAPIStatus,this.setUserAPIResponse)
        // .catch(this.setUsersAPIError);
       
        // service
       
        /* 
            // const api = create({
            //     baseURL:"https://jsonplaceholder.typicode.com/",
            // });
            // const usersPromise=networkCallWithApisauce(
            //     api,
            //     'users/',
            //     {},
            // apiMethods.get);--this part to userService 
        */ 
        
        const usersPromise = this.userService.getUsersAPI();
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUserAPIResponse)
        .catch(this.setUsersAPIError);
        
    }
}



// const userService = new UserService();
// const userStore= new UserStore(userService);
// export default userStore;
export default UserStore;


// plain fetch
// plain apisauce
// apisauce with bindPromiseWithOnSuccess--to call automatie status

// api sause changes=--everywhere

// servie  
// api ==== fixtures
// 






