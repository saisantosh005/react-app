import React from 'react';
import { CounterButtonAndInputStyling,CounterTitleStyling,CounterAppStyling,Button,InputTagStyling} from './counterAppStyling.js';
import {counterCount} from './Count.js';
import {observer} from 'mobx-react';
@observer
class CounterApp extends React.Component{
    getCount=()=>{
        return counterCount.count;
    }
    increament=()=>{
        counterCount.onIncrement();
    }
    decrement=()=>{
        counterCount.onDecrement();
    }
    onInputChange=(event)=>{
        counterCount.ChangeCountValue(event.target.value);
    }
    
    render(){
        return(
            <CounterAppStyling>
                <CounterTitleStyling>Counter</CounterTitleStyling>
                <CounterButtonAndInputStyling>
                    <Button onClick={this.increament}>+</Button>
                    <InputTagStyling type="number" onChange={this.onInputChange} value={this.getCount()}></InputTagStyling>
                    <Button onClick={this.decrement}>-</Button>
                </CounterButtonAndInputStyling>
            </CounterAppStyling>
        );
    }
}
export {CounterApp};