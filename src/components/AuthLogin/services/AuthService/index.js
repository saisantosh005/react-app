import {create} from 'apisauce';
import {apiMethods} from '../../constants/APIConstants';
import {networkCallWithApisauce} from '../../utils/APIUtils.js';

class AuthService {
    api
    
    constructor(){
        this.api = create({
            baseURL:"https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
        });
    }
    signInAPI(){
        return networkCallWithApisauce(
            this.api,
            'v1/signin/',
            {},
            apiMethods.get);
    }
}
// export {AuthService};
export default AuthService;