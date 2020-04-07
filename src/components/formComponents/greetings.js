

// import React from 'react';
// import "./backsign.css";



// let here="";
// class Greetings extends React.Component{
    
//     state={
//         userInputText:"",
//         displayName:false,
//         count:0,
//     };
    
//     handleUserInput = (event) => {
//         this.setState({
//             userInputText:event.target.value,
//         });
//     }
    
//     handleSubmit= (event) => {
//         // console.log("yes");
//         event.preventDefault();
//     }
    
//     displayMessage= () => {
//         // console.log("no");
//         if(this.state.userInputText!==""){
//             here = this.state.userInputText;
//             this.setState(()=>({
//               displayName:true,
//               userInputText:"",
//               count:this.state.count+=1,
//             }));
//             this.setState(()=>{
//                 count:this.state.count+=1
//             });
//             this.setState(()=>{
//                 count:this.state.count+=1
//             });
//             this.setState(()=>{
//                 count:this.state.count+=1
//             });
//         }
        
           
//     }
//     render(){
//         console.log(this.state.count);
//         // <input className="form-submit" type="button" onClick={this.displayMessage} value="Greet"></input>
//         return(
//             <div className="greetings">
//                 <form  className="form-class" onSubmit={this.handleSubmit}>
//                     <input type="text" className="form-input" value={this.state.userInputText}
//                         placeholder="Enter the name" onChange={this.handleUserInput} ></input>
//                     <input className="form-submit" type="button"  onClick={this.displayMessage} value="Greet"></input>
//                 </form>
                
//                 {this.state.displayName?<div>Hello {here}, have a nice day! </div>:<div></div>}
//             </div>
//         );
//     }
// }
// export {Greetings};

















// // import React from 'react';
// // import "./backsign.css";

// // let here="";
// // class Greetings extends React.Component{
    
// //     state={
// //         userInputText:"",
// //         displayName:false,
// //     };
    
// //     handleUserInput = (event) => {
// //         this.setState({
// //             userInputText:event.target.value,
// //         });
// //     }
    
// //     handleSubmit= (event) => {
// //         event.preventDefault();
// //     }
    
// //     displayMessage= () => {
// //         if(this.state.userInputText!==""){
// //             here = this.state.userInputText;
// //             this.setState({
// //               displayName:true,
// //               userInputText:"",
// //             });
// //         }
// //     }
// //     render(){
// //         return(
// //             <div className="greetings">
// //                 <form  className="form-class" onSubmit={this.handleSubmit} >
// //                     <input type="text" className="form-input" value={this.state.userInputText}
// //                         placeholder="Enter the name" onChange={this.handleUserInput} ></input>
// //                     <input className="form-submit" type="button" onClick={this.displayMessage} value="Greet"></input>
// //                 </form>
                
// //                 {this.state.displayName?<div>Hello {here}, have a nice day! </div>:<div></div>}
// //             </div>
// //         );
// //     }
// // }
// // // export {Greetings};



