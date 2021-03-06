import React from 'react';
import {observable} from 'mobx';
import {observer} from'mobx-react';



@observer
class NewList extends React.Component{

    @observable className="created-list-input-box";
    @observable removeElementClass="remove-element";
    @observable checkBoxClassName='check-box';
    @observable valueId=this.props.valueSend;
    @observable disabled=false;
    
    changeInputState=(event)=>{
        if(event.target.checked){
            this.className="created-list-input-box-none";
            this.disabled=true;
            this.props.checking(event.target.id);
        }
        else{
            this.className="created-list-input-box";    
            this.disabled=false;
            this.props.removeIt(event.target.id);
        }
    }
    
    changeValue=(event)=>{
            this.valueId=event.target.value;
    }
    
    change=(event)=>{
        if(event.keyCode===13){
            this.checkBoxClassName="check-box";
            this.className="created-list-input-box";
            this.crossBoxClassName="cross-box";
            document.getElementById("mainInput").focus();
        }
    }
    hideOneAndThree=(event)=>{
        this.checkBoxClassName="check-box-none";
        this.className="created-list-input-box-border";
        this.crossBoxClassName="cross-box-hide";
    }
    
    changeBorderInput=()=>{
        this.className="created-list-input-box";
        this.checkBoxClassName="check-box";
        }
    render(){
        return(
            <div className={this.props.className}>
                <input className={this.checkBoxClassName} 
                       type="checkbox" onChange={this.changeInputState} 
                       id={this.props.id} ></input>
                <input className={this.className} disabled={this.disabled} 
                       onChange={this.changeValue} 
                       onClick={this.hideOneAndThree} 
                       onBlur={this.changeBorderInput} 
                       onKeyDown={this.change} value={this.valueId}></input>
                <p className={this.props.id} onClick={this.props.delete} id={this.props.id}>X</p>
            </div>
        );
    }
}

export {NewList};