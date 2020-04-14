import React from 'react';
import {TodoFooterStyling,HoverDiv,UnderLine} from'./footerStyling';
import {Todo} from '../../../stores/models/Todo';
// ,TodoType
type TodoFooterProps={
    listOfTodos:Array<Todo>
    activeTodosCount:number
    onChangeSelectedFilter:()=>void
    onClearCompleted:()=>void
}


class TodoFooter extends React.Component<TodoFooterProps>{
    render(){
        let {listOfTodos} = this.props;
        let countOfCompleted=0;
        listOfTodos.forEach((item)=>{
            if(item.isCompleted===true){
                countOfCompleted+=1;
            }
        });
        
        return (
            <TodoFooterStyling>
                <div>{this.props.activeTodosCount} items left</div>
                <HoverDiv id={"All"} onClick={this.props.onChangeSelectedFilter} >All</HoverDiv>
                <HoverDiv id={"Active"} onClick={this.props.onChangeSelectedFilter}>Active</HoverDiv>
                <HoverDiv id={"Completed"} onClick={this.props.onChangeSelectedFilter}>Completed</HoverDiv>
                {countOfCompleted>0&&<UnderLine onClick={this.props.onClearCompleted}>Clear Selected</UnderLine>}
            </TodoFooterStyling>
        );
    }
}

export {TodoFooter};