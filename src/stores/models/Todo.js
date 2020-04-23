import {observable,action} from 'mobx';
// type InputEvent = React.ChangeEvent<HTMLInputElement>;


// export type TodoType={
//     id:number;
//     title:string
//     isCompleted:boolean
//     isDisabled:boolean
// }

class Todo{
    @observable id;
    @observable title;
    @observable completed;
    @observable isDisabled;
    @observable isChanged;
    constructor(props){
        this.id=props.id;
        this.title=props.title;
        this.completed=props.completed;
        this.isDisabled=props.isDisabled;
        this.isChanged=false;
    }
    
    @action.bound
    onCompletedTodo(){
        
        this.completed=!this.completed
        this.isDisabled =!this.isDisabled
        
        // if(this.completed){
        //     this.completed=false;
        //     this.isDisabled=false;
        // }
        // else{
        //     this.completed=true;
        //     this.isDisabled=true;
        // }
        
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




