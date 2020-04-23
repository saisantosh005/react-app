import {create} from 'apisauce';
import {apiMethods} from '../../constants/APIConstants';
import {networkCallWithApisauce} from '../../utils/APIUtils.js';


class TodoService{
    api
    constructor(){
        this.api = create({
            baseURL:"https://jsonplaceholder.typicode.com/",
        });
    }
    getTodoAPI(){
        return networkCallWithApisauce(
            this.api,
            "todos",
            {},
            apiMethods.get
            );
    }
}
export default TodoService;