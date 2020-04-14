import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {counterCount} from './Count';
import { CounterButtonAndInputStyling,
        CounterTitleStyling,CounterAppStyling,
        Button,InputTagStyling} from './counterAppStyling';

// import {CounterCount} from './Count';
// type InputChange={
// }{target:{value:number}}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
// type OnchangeProps={
    // onInputChange:Function;
    // changeCountValue:(input:number)=>void
// }<OnchangeProps>

@observer
class CounterApp extends Component{
    
    getCount=()=>{
        return counterCount.count;
    }
    increament=()=>{
        counterCount.onIncrement();
    }
    decrement=()=>{
        counterCount.onDecrement();
    }
    onInputChange=(event:InputEvent)=>{
        counterCount.ChangeCountValue(Number(event.target.value));
    }
    
    render(){
        return(
            <CounterAppStyling>
                <CounterTitleStyling>Counter</CounterTitleStyling>
                <CounterButtonAndInputStyling>
                    <Button onClick={this.increament}>+</Button>
                    <InputTagStyling type="number" 
                    onChange={this.onInputChange} 
                    value={this.getCount()}></InputTagStyling>
                    <Button onClick={this.decrement}>-</Button>
                </CounterButtonAndInputStyling>
            </CounterAppStyling>
        );
    }
}
export {CounterApp};