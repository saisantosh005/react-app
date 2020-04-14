import React from 'react';
import {reaction} from 'mobx';
import {observer} from'mobx-react';
import todoStore from '../../../stores/TodoStore/TodoStore';
import {EachTodo} from '../EachTodo/EachTodo';
import {AddTodo} from '../AddTodo/AddTodo';
import {TodoFooter} from '../Footer/TodoFooter';
import {TodoAppMainScreen,TodoAppMainDiv,TodoTitle} from './todoAppStyling';
import {Todo} from '../../../stores/models/Todo';
// import themeStore from '../../../stores/ThemeStore/index.js';

// type TodoList = {
//     id
// }
// type TodoListApp


@observer
class TodoListApp extends React.Component{
    onAddTodo=(event:React.KeyboardEvent)=>{
        todoStore.onAddTodo(event);
    }
    
    onRemoveTodo=(event)=>{
        todoStore.onRemoveTodo(event);
    }
    
    // onCompletedTodo=(event)=>{
    //     todoStore.onCompletedTodo(event);
    // }
    
    
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
                isCompleted={item.isCompleted} todo={item} 
                onCompletedTodo={this.onCompletedTodo} 
                onRemoveTodo={this.onRemoveTodo} 
                />)
            );    
        }
        
        else if(todoStore.selectedFilter==="Active"){
            return todoStore.listOfTodos.map((item)=>{
                if(item.isCompleted===false){
                    return <EachTodo
                    EachTodoData ={item}
                    isCompleted={item.isCompleted}
                    key = {item.id} id ={item.id} todo={item}
                    onCompletedTodo={this.onCompletedTodo} 
                    onRemoveTodo={this.onRemoveTodo} 
                    />;
                }
            }
            );
        }
        else if(todoStore.selectedFilter==="Completed"){
            return todoStore.listOfTodos.map((item)=>{
                if(item.isCompleted===true){
                    return <EachTodo 
                    EachTodoData ={item}
                    isCompleted={item.isCompleted}
                    key = {item.id} id ={item.id} todo={item} 
                    onCompletedTodo={this.onCompletedTodo} 
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
                    
                    {this.getFilterTodo()}
                    
                    {todoStore.getActiveTodoCount>0&&<TodoFooter
                    listOfTodos = {todoStore.listOfTodos}
                    onChangeSelectedFilter={this.onChangeSelectedFilter}
                    onClearCompleted={this.onClearCompleted}
                    activeTodosCount={todoStore.getActiveTodoCount}
                    selectedFilter={"ALl"}/>}
                </TodoAppMainDiv>
            </TodoAppMainScreen>
        );
    }
    
}
export {TodoListApp};
 
 