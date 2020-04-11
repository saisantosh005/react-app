import {observable,action} from 'mobx';

class Todo{
    @observable id;
    @observable title;
    @observable isCompleted;
    @observable isDisabled;
    @observable isChanged;
    constructor(props){
        this.id=props.id;
        this.title=props.title;
        this.isCompleted=props.isCompleted;
        this.isDisabled=props.isDisabled;
        this.isChanged=false;
    }
    
    @action.bound
    onCompletedTodo(){
        if(this.isCompleted){
            this.isCompleted=false;
            this.isDisabled=false;
        }
        else{
            this.isCompleted=true;
            this.isDisabled=true;
        }
    }
    
    @action.bound
    onUpdateTodoTitle(event){
        if(event.target.value!==""){
            this.title=event.target.value;
        }
        else{
            alert("todo should not be empty");
        }
    }

}
export {Todo};




