import React from 'react';
import {observable,action,computed,reaction } from 'mobx';
import {Todo} from '../models/Todo.js';

// import {observer} from 'mobx-react';
// @observer
class TodoStore{
    @observable listOfTodos=[];
    @observable selectedFilter;
    @observable  count;
    
    constructor(){
        this.listOfTodos=[];
        this.selectedFilter="All";//All
        this.count = 0;
    }
    
    @action.bound
    onAddTodo(){
        if(event.keyCode===13&&event.target.value.trim()!==""){
            const newTodoModel = new Todo({
                    id:this.count+=1,
                    title:event.target.value,
                    isCompleted:false,
                    isDisabled:false,
            });
            this.listOfTodos.push(newTodoModel);
            event.target.value="";
        }   
    }
    
    listOfTodoChange = reaction(
        ()=>this.listOfTodos.map(item=>item.title),
        (newTitle)=>{console.log("list Changed",newTitle);
            this.listOfTodoChange();
        });
    
    
    @action.bound
    onRemoveTodo(event){    
        this.listOfTodos=this.listOfTodos.filter((item)=>event.target.id!=item.id);
    }
    
    @computed get getActiveTodoCount(){
        return this.listOfTodos.length;
    }

    @action.bound
    onClearCompleted(){
        this.listOfTodos = this.listOfTodos.filter((item,index)=>item.isCompleted===false);
    }
    
    @action.bound
    onChangeSelectedFilter(event){
        this.selectedFilter=event.target.id;
    }
}
const todoStore = new TodoStore();
export default todoStore;






// const  varisable = reaction(()=>{},()=>{});