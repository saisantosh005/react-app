import React from 'react';

import {observable,reaction} from 'mobx';
import {observer} from'mobx-react';
import todoStore from '../../../stores/TodoStore/TodoStore';
import {EachTodo} from '../EachTodo/EachTodo';
import {AddTodo} from '../AddTodo/AddTodo';
import {TodoFooter} from '../Footer/TodoFooter';
import {TodoAppMainScreen,TodoAppMainDiv,TodoTitle,Button} from './todoAppStyling';
import {Todo} from '../../../stores/models/Todo';
/*global fetch */
@observer
class TodoListApp extends React.Component{
    @observable isError="";
    componentDidMount(){
        this.getFetchData();
    }
    async getFetchData(){
        let data= await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(data.ok);
        let dataJson =await data.json();
        if(dataJson===""){
            this.isError=false;
        }
        else{
            this.isError=true;
        }
        this.JsonObject=dataJson;
        console.log(data);
        
        todoStore.count = dataJson.length;
            for(let i=0;i<dataJson.length;i++){
                const TodoObject={
                    id:dataJson[i].id,
                    title:dataJson[i].title,
                    completed:dataJson[i].completed,
                    isDisabled:dataJson[i].completed,
                };
                const newTodoModel = new Todo(TodoObject);
                todoStore.listOfTodos.push(newTodoModel);
            }
    }
    
    onAddTodo=(event)=>{
        todoStore.onAddTodo(event);
    }
    
    onRemoveTodo=(event)=>{
        todoStore.onRemoveTodo(event);
    }
    
    
    onClearCompleted=()=>{ 
        todoStore.onClearCompleted();
    }
  
    onChangeSelectedFilter=(event)=>{
        todoStore.onChangeSelectedFilter(event);
    }
    
    getReaction = reaction(()=>{return todoStore.listOfTodos.length},(length)=>{console.log(length)});

    
    getFilterTodo=()=>{
        
        if(todoStore.selectedFilter==="All"){
            return todoStore.listOfTodos.map((item)=>
                (<EachTodo 
                EachTodoData ={item}
                key = {item.id} id ={item.id}
                completed={item.completed} todo={item} 
                
                onRemoveTodo={this.onRemoveTodo} 
                />)
            );    
        }
        
        else if(todoStore.selectedFilter==="Active"){
            return todoStore.listOfTodos.map((item)=>{
                if(item.completed===false){
                    return <EachTodo
                    EachTodoData ={item}
                    completed={item.completed}
                    key = {item.id} id ={item.id} todo={item}
                    
                    onRemoveTodo={this.onRemoveTodo} 
                    />;
                }
            }
            );
        }
        else if(todoStore.selectedFilter==="Completed"){
            return todoStore.listOfTodos.map((item)=>{
                if(item.Completed===true){
                    return <EachTodo 
                    EachTodoData ={item}
                    completed={item.completed}
                    key = {item.id} id ={item.id} todo={item} 
                     
                    onRemoveTodo={this.onRemoveTodo} 
                    />;
                }
            }
            );
        }
        
    }
    
    render(){
        return (
            <TodoAppMainScreen>
                <TodoAppMainDiv>
                    <TodoTitle>todos</TodoTitle>
                    <AddTodo onAddTodo={this.onAddTodo} showAllList={todoStore.listOfTodos}/>
                    
                    {this.isError===""?"loading":this.isError?this.getFilterTodo():
                        <Button onClick={this.getFetchData}>Retry</Button>
                    }
                    
                    {todoStore.getActiveTodoCount>0&&
                        <TodoFooter
                            listOfTodos = {todoStore.listOfTodos}
                            onChangeSelectedFilter={this.onChangeSelectedFilter}
                            onClearCompleted={this.onClearCompleted}
                            activeTodosCount={todoStore.getActiveTodoCount}
                            selectedFilter={"ALl"}
                        />
                    }
                </TodoAppMainDiv>
            </TodoAppMainScreen>
        );
    }
    
}
export {TodoListApp};
 
 