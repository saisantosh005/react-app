import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Provider,inject} from 'mobx-react';
import {StyledDiv} from './practice1.js';

@inject("temp")
class D extends React.Component{
    render(){
        let {temp} = this.props
        return(
        <div>
        D component:- {temp}
        </div>);
    }
}

@inject("temp")
class C extends React.Component{
    render(){
        let {temp,name} = this.props;
        return(
            <div>
            C Component:- {temp,name}
                <D />
            </div>);
    }
}


@inject("temp")
@observer
class B extends React.Component{
    @observable name="";
    onChangeIt=(event)=>{
        this.name=event.target.value;
    }
    render(){
        let {temp} = this.props;
        return(
            <div>
            <input style={{background:'dodgerBlue',margin:'40px'}} onChange={this.onChangeIt}/>
                B component:- {temp}
                <C name={this.name} />
            </div>);
    }
}

@observer
class A extends React.Component{
    @observable speed="";
    changePopus=()=>{
            console.log("one");
            this.speed=true
        }
        
    render(){
        // return (
        //     <Provider temp={'value'}>
            
        //     A component
        //         <B/>
        //     </Provider>
        //     );
        return (
            <div>
                <StyledDiv onClick={this.changePopus}>Hello</StyledDiv>
                {this.speed&&<div>Hello</div>}
            </div>
        )
    }
}

export {A};