import React from 'react';
// import {observable} from 'mobx';
import {observer} from 'mobx-react';
import todoStore from '../../../stores/TodoStore/TodoStore';
import {TodoAppFixedDiv,MainInput,DropDown} from './addTodoStyle';

@observer
class AddTodo extends React.Component{
    changeSelectedfilter=()=>{
        {todoStore.selectedFilter!=="All"?todoStore.selectedFilter="All":todoStore.selectedFilter=""}
    }
    
    render(){
        let {onAddTodo} =this.props;
        return (
            <TodoAppFixedDiv >
                <DropDown onClick={this.changeSelectedfilter}>v</DropDown>
                <MainInput id="mainInputTag" type="text" 
                placeholder={"what needs to be done?"} onKeyDown={onAddTodo}/>
            </TodoAppFixedDiv>
        );
    }
}
export {AddTodo};

//doubt
// onKeyDown={onAddTodo(event,this.todoTitle)