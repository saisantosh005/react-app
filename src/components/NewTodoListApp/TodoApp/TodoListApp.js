import React from 'react';

import {observable,trace,reaction} from 'mobx';
import {observer} from'mobx-react';
// import todoStore from '../../../stores/TodoStore/TodoStore';
import {EachTodo} from '../EachTodo/EachTodo';
import {AddTodo} from '../AddTodo/AddTodo';
import {TodoFooter} from '../Footer/TodoFooter';
import {TodoAppMainScreen,TodoAppMainDiv,TodoTitle} from './todoAppStyling';
// import {Todo} from '../../../stores/models/Todo';
import {inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../../common/NoDataView/index.js';

@inject ("todoStore")
@observer
class TodoListApp extends React.Component{
    @observable isError="";
    componentDidMount(){
        this.doNetWorkCalls();
    }
    
    getTodoStore=()=>{
        return this.props.todoStore;
    }
    doNetWorkCalls=()=>{
        this.getTodoStore().getTodosAPI();
    }
    
    onAddTodo=(event)=>{
        // todoStore.onAddTodo(event);
        this.getTodoStore().onAddTodo(event);
    }
    
    onRemoveTodo=(event)=>{
        // todoStore.onRemoveTodo(event);
        this.getTodoStore().onRemoveTodo(event);
    }
    
    
    onClearCompleted=()=>{ 
        // todoStore..onClearCompleted();//
        this.getTodoStore().onClearCompleted();
    }
  
    onChangeSelectedFilter=(event)=>{
        this.getTodoStore().onChangeSelectedFilter(event);
    }
    
    // getReaction = reaction(()=>{return todoStore.listOfTodos.length},(length)=>{console.log(length)});
    // getReaction = reaction(()=>{return this.getTodoStore().listOfTodos.length},(length)=>{console.log(length)});

    getFilterTodo=()=>{
        return this.getTodoStore().filterTodos.map((item)=><EachTodo 
                EachTodoData ={item}
                key = {item.id} id = {Number(item.id)}
                completed={item.completed} todo={item} 
                onRemoveTodo={this.onRemoveTodo} 
                />);
    }
    
    renderTodoList=observer(()=>{
        const {listOfTodos,selectedFilter} = this.getTodoStore();
        return  <TodoAppMainScreen >
                <TodoAppMainDiv>
                    <TodoTitle>todos</TodoTitle>
                    <AddTodo onAddTodo={this.onAddTodo} showAllList={this.getTodoStore().listOfTodos}/>
                   
                    {listOfTodos.length===0?<NoDataView />:this.getFilterTodo()}
                   
                    {this.getTodoStore().getActiveTodoCount>0&&
                        <TodoFooter
                            listOfTodos = {this.getTodoStore().listOfTodos}
                            onChangeSelectedFilter={this.onChangeSelectedFilter}
                            onClearCompleted={this.onClearCompleted}
                            activeTodosCount={this.getTodoStore().getActiveTodoCount}
                            selectedFilter={selectedFilter}
                        />
                    }
                </TodoAppMainDiv>
            </TodoAppMainScreen>
       
    });
    
    render(){
        trace(true);
        let {getTodoAPIStatus,getTodoAPIError,listOfTodos} = this.getTodoStore();
        return (
            <LoadingWrapperWithFailure 
                    apiStatus={getTodoAPIStatus}
                    apiError={getTodoAPIError}
                    onRetryClick={this.doNetWorkCalls}
                    renderSuccessUI={this.renderTodoList}
                />
        );
 
    }
}
export {TodoListApp};