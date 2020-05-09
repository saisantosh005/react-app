import React from "react";
import {observer} from 'mobx-react';
import {observable,action,autorun} from 'mobx';
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
    @observable count=7;
    
    message=observable({
        name:"here",
        value:6,
        ok:true,
        clear:{
            value1:"hello",
        }
    });
    
    // @action.bound
    
    changeCount=()=>{
        this.count-=7;
        this.speed=9; 
        this.message.value++;
        // .createIt={here:4};
    }
    
    
    @action.bound
    changeIt(){
        console.log(this.message.createIt,"start");
        this.message.createIt.here-=4;
        console.log(this.message.createIt,"end");
    }
    
    creat=autorun(()=>{
        console.log(this.message,"jooo");
    });
    
        
    render(){
        console.log("hello");
        return (
            <div>
                <p>Count:{this.count}</p>
                <p>Count:{this.speed}</p>
                <p>{this.message.value}</p>
                <button onClick={this.changeCount}>button</button>
            </div>
        );
    }
}

// <button onClick={this.count>0?this.changeCount:this.changeIt}>button</button>
// {this.message.createIt!==undefined&&<p>{this.message.createIt.here}</p>}
// <StyledDiv onClick={this.changePopus}>Hello do it </StyledDiv>
        // {this.speed&&<div>Hello do it </div>}

 export {A};

// const here = new A();

// autorun(()=>{
//     console.log(here.message);
//     console.log(here.message.clear,"now");
//     here.message.clear.hello=0;
// });
// here.message.clear.hello=9;
// here.message.clear.hello=8;
// here.message.to = 3;
// here.message.to=5;




// autorun()
    // author = message.author
    //     autorun(() => {
    //         console.log(author.name)
    //     })
    //     message.author.name = "Sara"
    //     message.author = { name: "John" }

    // changePopus=()=>{
    //     // this.speed=tre;
    //     this.count-=1;
    //     // this.speed = 7;
        
    //     // console.log
    // }
    
    