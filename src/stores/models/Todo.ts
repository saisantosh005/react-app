import {observable,action} from 'mobx';
type InputEvent = React.ChangeEvent<HTMLInputElement>;


export type TodoType={
    id:number;
    title:string
    isCompleted:boolean
    isDisabled:boolean
}

class Todo{
    @observable id:number;
    @observable title:string;
    @observable isCompleted:boolean;
    @observable isDisabled:boolean;
    @observable isChanged:boolean;
    constructor(props:TodoType){
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
    onUpdateTodoTitle(event:InputEvent){
        if(event.target.value!==""){
            this.title=event.target.value;
        }
        else{
            alert("todo should not be empty");
        }
    }
}
export {Todo};




