import {observable,action,computed,reaction } from 'mobx';
import {Todo} from '../models/Todo';
import {API_INITIAL,API_FAILED,API_FETCHING,API_SUCCESS} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';

class TodoStore{
    @observable getTodoAPIStatus;
    @observable getTodoApiError;
    todoService;

    @observable listOfTodos;
    @observable selectedFilter;
    @observable  count;
    
    constructor(todoService){
        this.todoService = todoService;
        this.listOfTodos=[];
        this.init();
    }
    
    
    @action.bound
    onAddTodo(event){
        if(event.keyCode===13&&event.target.value.trim()!==""){
            const TodoObject={
                    id:this.count+=1,
                    title:event.target.value,
                    completed:false,
                    isDisabled:false,
            };
            const newTodoModel = new Todo(TodoObject);
            this.listOfTodos.push(newTodoModel);
            event.target.value="";
        }   
    }
    
    // listOfTodoChange = reaction(
    //     ()=>this.listOfTodos.map(item=>item.title),
    //     (newTitle)=>{console.log("list Changed",newTitle);
    //         this.listOfTodoChange();
    //     });
    
    
    @action.bound
    onRemoveTodo(event){
        this.listOfTodos=this.listOfTodos.filter((item)=>Number(event.target.id)!==Number(item.id))
    }
    
    @computed get getActiveTodoCount(){
        console.log(this.listOfTodos.length);
        return this.listOfTodos.length;
    }

    @action.bound
    onClearCompleted(){
        this.listOfTodos = this.listOfTodos.filter((item,index)=>item.completed===false);
    }
    
    @action.bound
    onChangeSelectedFilter(event){
        this.selectedFilter=event.target.id;
    }
    
    @action
    init(){
        this.getTodoAPIStatus=API_INITIAL;
        this.selectedFilter="All";
        this.getTodoAPIError=null;
        this.listOfTodos=[];
        this.count = 0;
    }
    
    @action.bound
    clearStore(){
        this.init();
    }
    @computed get filterTodos(){
        switch(this.selectedFilter){
            case "All":
                return this.listOfTodos
            case "Active":
                return this.listOfTodos.filter((item)=>!item.completed)
            case "Completed":
                return this.listOfTodos.filter((item)=>item.completed)
        }
    }
    
    @action.bound
    setTodoAPIStatus(apiStatus){
        this.getTodoAPIStatus=apiStatus;
    }
    @action.bound
    setTodoAPIResponse(todoResponse){
        this.listOfTodos=todoResponse.map(item=>{
            this.count =item.id;
            return new Todo({
            id:Number(item.id),
            title:item.title,
            completed:item.completed,
            isDisabled:item.completed,
        });
        });
    }
    @action.bound
    setTodoAPIError(error){
        this.getTodoAPIError=error;
    }
    
    @action.bound
    getTodosAPI(){
        const todoPromise = this.todoService.getTodoAPI();
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodoAPIStatus,this.setTodoAPIResponse)
        .catch(this.setTodoAPIError);
    }
}
export default TodoStore;






// const  varisable = reaction(()=>{},()=>{});