import React from 'react';
// import {observable,action} from 'mobx';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import {Todo} from '../../../stores/models/Todo';
import {EachTodoStyling,EachTodoCheckBoxStyling,
        EachTodoInput,EachTodoCrossStyling} from './eachTodoStyling';

@observer
class EachTodo extends React.Component{
    @observable EachTodoData=this.props.todo;
    // @action.bound
    changeFocus=(event)=>{
        if(event.keyCode===13){
            document.getElementById("mainInputTag").focus();
            let {EachTodoData} =this.props;
            EachTodoData.isChanged=false;
        }
        
    }
    // @action.bound
    changeBorderStyle=(event)=>{
        let {EachTodoData} =this.props;
        {EachTodoData.isChanged===true?EachTodoData.isChanged=false:EachTodoData.isChanged=true}
    }
    render(){
        let {onRemoveTodo,EachTodoData} =this.props;
        return(
            <EachTodoStyling>
                <EachTodoCheckBoxStyling 
                    type ="checkBox"
                    value={EachTodoData.id} 
                    checked={EachTodoData.completed} 
                    onChange={EachTodoData.onCompletedTodo}/> 
                <EachTodoInput 
                    type="text"  
                    value={EachTodoData.title}
                    disabled={EachTodoData.isDisabled}
                    isChanged={EachTodoData.isChanged}
                    onFocus={this.changeBorderStyle}
                    onBlur={this.changeBorderStyle}
                    onChange={EachTodoData.onUpdateTodoTitle} onKeyDown={this.changeFocus}/>
                <EachTodoCrossStyling
                    id={EachTodoData.id} 
                    onClick={onRemoveTodo}>x</EachTodoCrossStyling>
            </EachTodoStyling>
        );
    }
}

export {EachTodo};

// import React from 'react';
// import {observable} from 'mobx';
// import {observer} from'mobx-react';
// @observer
// class NewList extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         className:"created-list-input-box",
//     //         removeElementClass:"remove-element",
//     //         checkBoxClassName:'check-box',
//     //         valueId:this.props.valueSend,
//     //         disabled:false,
            
//     //     };
//     // }
//     @observable className="created-list-input-box";
//     @observable removeElementClass="remove-element";
//     @observable checkBoxClassName='check-box';
//     @observable valueId=this.props.valueSend;
//     @observable disabled=false;
    
//     changeInputState=(event)=>{
//         if(event.target.checked){
//             this.className="created-list-input-box-none";
//             this.disabled=true;
//             this.props.checking(event.target.id);
//         }
//         else{
//             this.className="created-list-input-box";    
//             this.disabled=false;
//             this.props.removeIt(event.target.id);
//         }
//     }
    
//     changeValue=(event)=>{
//             this.valueId=event.target.value;
//     }
    
//     change=(event)=>{
//         if(event.keyCode===13){
//             this.checkBoxClassName="check-box";
//             this.className="created-list-input-box";
//             this.crossBoxClassName="cross-box";
//             document.getElementById("mainInput").focus();
//         }
//     }
//     hideOneAndThree=(event)=>{
//         this.checkBoxClassName="check-box-none";
//         this.className="created-list-input-box-border";
//         this.crossBoxClassName="cross-box-hide";
//     }
    
//     changeBorderInput=()=>{
//         this.className="created-list-input-box";
//         this.checkBoxClassName="check-box";
//         }
//     render(){
//         return(
//             <div className={this.props.className}>
//                 <input className={this.checkBoxClassName} 
//                       type="checkbox" onChange={this.changeInputState} 
//                       id={this.props.id} ></input>
//                 <input className={this.className} disabled={this.disabled} 
//                       onChange={this.changeValue} 
//                       onClick={this.hideOneAndThree} 
//                       onBlur={this.changeBorderInput} 
//                       onKeyDown={this.change} value={this.valueId}></input>
//                 <p className={this.props.id} onClick={this.props.delete} id={this.props.id}>X</p>
//             </div>
//         );
//     }
// }

// export {NewList};