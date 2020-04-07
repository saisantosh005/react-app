import React from 'react';

class YourState extends React.Component{
    state={
            selectedState:"",
            submittedState:"",
    };
        
    handleChangeState=(event)=>{
        this.setState({
            submittedState:event.target.value,
        });
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    
    displayMessage=()=>{
        this.setState({
            selectedState:this.state.submittedState,
        });
    }
    render(){
        const options = this.props.stateList.map((item)=>
            <option key = {item} value={item}>{item}</option>
        );
    
        return(
        <div  className="yourState">
            <form className="yourState" onSubmit={this.handleSubmit}>
                <select onChange={this.handleChangeState}>
                    {options}
                </select>
                <input type="button" onClick={this.displayMessage} value="submit"></input>
            </form>
            {this.state.selectedState?<div> I am from {this.state.selectedState} state</div>:<div></div>}
        </div>
        );
    }
   
}


// import React from 'react';

// class YourState extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             selectedState:"",
//             submittedState:false,
//         };
//     }
//     // handleChangeState=(event)=>{
//     //     this.setState({
//     //         submittedState:event.target.value,
//     //     });
//     // }
 
//     handleChangeState=(event)=>{
//         this.setState({
//             submittedState:false,
//             selectedState:event.target.value,
            
//         });
//     }
 
//     handleSubmit=(event)=>{
//         this.setState({
//             submittedState:true,
//         });
//         event.preventDefault();
//     }
    
//     displayMessage=()=>{
        
//         if(this.state.submittedState){
//           return <div> I am from {this.state.selectedState} state</div>;
//         }
//         // this.setState({
//         //     selectedState:this.state.submittedState,
//         // });
//     }
//     render(){
//         // const options = this.props.stateList.map((item)=>
//         //     <option value={item}>{item}</option>
//         // );{this.state.selectedState?<div> I am from {this.state.selectedState} state</div>:<div></div>}
//         return(
//         <div  className="yourState">
//             <form className="yourState" onSubmit={this.handleSubmit}>
//                 <select onChange={this.handleChangeState}>
//                     {this.props.stateList.map((item)=><option value={item}>{item}</option>)}
//                 </select>
//                 <input type="button" onClick={this.handleSubmit} value="submit"></input>
//             </form>
//             {this.displayMessage()}
            
//         </div>
//         );
//     }
// }
export {YourState};