import {action,observable} from 'mobx';

class CounterCount {
    @observable count;
    constructor(){
        this.count=0;
    }
    @action.bound 
    ChangeCountValue(input){
        this.count=input;
    }
    @action.bound onIncrement(){
        if(isNaN(this.count)){
            this.count=0;
        }
        this.count=this.count+1;    
    }
    @action.bound onDecrement(){
        if(isNaN(this.count)){
         this.count=0;
        }
        this.count=this.count-1;    
    }
}
const counterCount = new CounterCount();
export {counterCount};









