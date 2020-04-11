import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Provider,inject} from 'mobx-react';

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

class A extends React.Component{
    
    render(){
        return (
            <Provider temp={'value'}>
            
            A component
                <B/>
            </Provider>
            );
    }
}

export {A};