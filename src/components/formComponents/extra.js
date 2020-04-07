import React from 'react';


class ParentExtra extends React.Component{
    constructor(props){
        super(props);
        this.state={
        count : 0,
        parentCounter1:0,
        parentCounter:2,
    };
    }
    onParentCounterIncrement  =() =>{
        // this.setState({count:this.state.count+1});
        // this.setState({count:this.state.count+3});
        // this.setState({count:this.state.count+2});
        // this.setState({count:this.state.count+6});
        this.setState((pre)=>({
            count:pre.count+1
        }));
        this.setState((pre)=>({
            count:pre.count+2
        }));
        this.setState((pre)=>({
            count:pre.count+3
        }));
        this.setState((pre)=>({
            count:pre.count+4
        }));
        this.setState((pre)=>({
            count:pre.count+5
        }));
        this.setState((pre)=>({
            count:pre.count+6
        }));
        
        //  console.log(this.state.count);
        this.setState({
            parentCounter1:this.state.parentCounter+1,
            count:this.state.count+1,
        });
        //  console.log(this.state.count);
    }
        
    render(){
        console.log(this.state.count);
        console.log('Parent redner Callled');
        return (
            <ChildCounter onParentCounterIncrement={this.onParentCounterIncrement}
            parentCounter={this.state.parentCounter}/>
        );
    }
}
class ChildCounter extends React.Component{
    state={
        childCounter1:0,
        childCounter2:0,
    }
    onIncrement=()=>{
        this.props.onParentCounterIncrement();
        this.setState({
            childCounter1:this.state.childCounter1 +1,
        });
    }
    render(){
        console.log("child called");
        
        return (
            <div >
                <button onClick={this.onIncrement}></button>
            </div>
        );
    }
}
export {ParentExtra};