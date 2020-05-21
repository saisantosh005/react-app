import React from 'react';
import {TodoFooterStyling,HoverDiv,UnderLine} from'./footerStyling';
import {Todo} from '../../../stores/models/Todo';

import {Button} from './Button';

class TodoFooter extends React.Component{
    render(){
        let {listOfTodos} = this.props;
        let countOfCompleted=0;
        listOfTodos.forEach((item)=>{
            if(item.completed===true){
                countOfCompleted+=1;
            }
        });
        
        return (
            <TodoFooterStyling>
                <div>{this.props.activeTodosCount} items left</div>
                <Button id={"All"} onClick={this.props.onChangeSelectedFilter} nameIt={"ALL"}/>
                <Button id={"Active"} onClick={this.props.onChangeSelectedFilter} nameIt={"Active"}/>
                <Button id={"Completed"} onClick={this.props.onChangeSelectedFilter} nameIt={"Completed"}/>
                {countOfCompleted>0&&<UnderLine onClick={this.props.onClearCompleted}>Clear Selected</UnderLine>}
            </TodoFooterStyling>
        );
    }
}

// <All id={"All"} onClick={this.props.onChangeSelectedFilter}/>
// <Active id={"Active"} onClick={this.props.onChangeSelectedFilter}/>
// <Completed id={"Completed"} onClick={this.props.onChangeSelectedFilter}/>
                
                
// <HoverDiv id={"All"} onClick={this.props.onChangeSelectedFilter} >All</HoverDiv>
// <HoverDiv id={"Active"} onClick={this.props.onChangeSelectedFilter}>Active</HoverDiv>
// <HoverDiv id={"Completed"} onClick={this.props.onChangeSelectedFilter}>Completed</HoverDiv>
export {TodoFooter};