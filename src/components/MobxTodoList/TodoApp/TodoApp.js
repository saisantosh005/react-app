import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import '../index.css';
import {NewList} from'../List/EachTodo';

let count = 0;
@observer
class CreateToDoListMobx extends React.Component{
    @observable className="each-list-item";
    @observable listIdOfToList=[];
    @observable valueTosend="";
    @observable no=0;
    
    // constructor(props){
    //     super(props);
    //     this.className="each-list-item";
    //     this.listIdOfToList=[];
    //     this.valueTosend="";
    //     this.no=0;    
    // }
    // @observable className="each-list-item";
    // @observable listIdOfToList=[];
    // @observable valueTosend="";
    // @observable no=0;
    
  //0ok-------done
    formListItem=(event)=>{
        if(event.target.value!==""){
            if(event.keyCode===13){
                const listObject={
                    className:"each-list-item",
                    isChecked:false,
                    id:count,
                }
                this.listIdOfToList.push(listObject);
                //     { 
                //     className:"each-list-item",
                //     isChecked:false,
                //     id:count,
                // }
                this.listIdOfToList=this.listIdOfToList,
                this.valueTosend=event.target.value,
                event.target.value="";
                count++;
            }    
        }
    }
    // 0ok
    deleteListItem=(event)=>{
        //
        this.listIdOfToList.forEach((item,index)=>{
            if(Number(event.target.className)===Number(item.id)){
                this.listIdOfToList.splice(index,1);
                this.listIdOfToList=this.listIdOfToList;
            }
        });
    }
    //0ok
    appendChecked=(input)=>{
        this.listIdOfToList.forEach((item)=>{
            let id
            let isChecked
            if(Number(input)===Number(item.id)){
                item.isChecked=true;
                    this.listIdOfToList=this.listIdOfToList;
            }
        });
    }
    removeIt=(input)=>{
        this.listIdOfToList.forEach((item)=>{
            if(Number(input)===Number(item.id)){
                item.isChecked=false;
                    this.listIdOfToList=this.listIdOfToList;
            }
        });
    }
    
    showAll=()=>{
        this.listIdOfToList.forEach((item)=>{
            item.className="each-list-item";
                this.listIdOfToList=this.listIdOfToList;
        });
    }
    showCompleted=()=>{
        
        this.showAll();
        this.listIdOfToList.forEach((item)=>{
            if(item.isChecked===false){
                item.className="each-list-item-none";
                this.listIdOfToList=this.listIdOfToList;
            }
        });
    }
    
    showActive=()=>{
        this.showAll();
        this.listIdOfToList.forEach((item)=>{
            if(item.isChecked){
                item.className="each-list-item-none";
                    this.listIdOfToList=this.listIdOfToList;
            }
        });
    }
    
    clearTheSelectedItems=()=>{
        let zoom=[];
        this.listIdOfToList.forEach((item)=>{
            if(item.isChecked===true){
                zoom.push(item.id);
            }
        });
        zoom.forEach((item1)=>{
            this.listIdOfToList.forEach((item,index)=>{
                if(item1===item.id){
                    this.listIdOfToList.splice(index,1);
                        this.listIdOfToList=this.listIdOfToList;
                }
            });
        });
    }

    render(){
        const here = this.listIdOfToList.map((item,index)=>
        <NewList 
            className={item.className}  key={item.id} 
            valueSend = {this.valueTosend} delete={this.deleteListItem}
            id={item.id} removeIt={this.removeIt} 
            checking={this.appendChecked} isChecked={ item.isChecked}/>
            );
        
        return(
            <div className="paddingName">
                <div className="todo-app">
                    <p className="todos-logo">todos</p>
                    <div className="fixed-entry-box">
                        <span className="drop-box" onClick={this.showAll} >^</span>
                        <input type= "text" id= "mainInput" className="fixed-entry-input-box" 
                                onKeyDown={this.formListItem} placeholder="what needs to be done?"></input>
                    </div>
                    {here}
                    
                    {this.listIdOfToList.length>0? 
                    <div className="all-footer">           
                        <div className ="footer-part">
                            <span>{this.listIdOfToList.length}items left</span>
                            <ul className="footer-ul">
                                <li onClick={this.showAll}>All</li>
                                <li onClick={this.showActive}>Active</li>
                                <li onClick={this.showCompleted}>Completed</li>
                            </ul>
                            <span className="clear-box-class-name" onClick={this.clearTheSelectedItems}>Clear Selected</span>
                        </div>
                        <div className="all-footer">
                            <div className="one"></div>
                            <div className="two"></div>
                        </div>
                    </div>:
                    <div></div>}
            
                </div>
                <div className="water-mark">
                    <span>Double Click to edit todo</span>
                    <span>Created by <strong>petehunt</strong></span>
                    <span>part of <strong>TodoMVC</strong></span>
                </div>
            </div>);
    }
}

export { CreateToDoListMobx};


// second


// import React from 'react';
// import './index.css';

// class NewList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             className:"created-list-input-box",
//             disabled:false,
//             checked:false,
//             valueId:this.props.valueSend,
//         };
//     }
//     changeInputState=(event)=>{
//         if(event.target.checked===true){
//             this.setState({
//             className:"created-list-input-box-none",    
//             disabled:true,
//             checked:true,
//             },this.props.checking(event.target.parentNode.id));
//         }
//         else{
//             this.setState({
//             className:"created-list-input-box",    
//             disabled:false,
//             checked:false,
//             },this.props.removeIt(event.target.parentNode.id));
//         }
//     }
//     changeValue=(event)=>{
//         this.setState({
//             valueId:event.target.value,
//         });
//     }
//     change=(event)=>{
//         if(event.keyCode===13){
//             document.getElementById("mainInput").focus();
//         }
//     }
//     render(){
//         return(
//             <div className={this.props.className} id={this.props.id} status={this.state.checked}>
//                 <input className="check-box" type="checkbox" onChange={this.changeInputState}></input>
//                 <input className={this.state.className} disabled={this.state.disabled} 
//                 onChange={this.changeValue} onKeyDown={this.change} value={this.state.valueId}></input>
//                 <span className="remove-element" onClick={this.props.delete} id="23">X</span>
//             </div>
//         );
//     }
// }

// let mainClassName="each-list-item";
// let stop=0;
// let zoom;
// let count = 0;
// class CreateToDoList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             listIdOfToList:[],
//             checkedListIds:[],
//             tempList:[],
//             activeList:[],
//             isChecked:false,
//             ok:false,
//             valueTosend:"4567",
//             no:0,
//         }
//     }
   
//     formListItem=(event)=>{
//         if(event.target.value!==""){
//             if(event.keyCode===13){
//                 // this.state.listIdOfToList.push({hi:"hi"});
//                 this.setState({
//                     no:this.state.no+=1,
//                     ok:true,
//                     listIdOfToList:this.state.listIdOfToList.concat([this.state.no]),
//                     listIdOfToList:this.state.listIdOfToList,
//                     valueTosend:event.target.value,
//                 });
//                     event.target.value="";
//                     count++;
//             }    
//         }
//     }
//     deleteListItem=(event)=>{
//       let arr  = this.state.listIdOfToList.indexOf(Number(event.target.parentNode.id));
//       this.state.listIdOfToList.splice(arr,1);
//       this.state.activeList.splice(arr,1);
//       this.state.valueTosend=0;
//         this.setState({
//             listIdOfToList:this.state.listIdOfToList,
//             activeList:this.state.activeList,
//         });
//     }
//     appendChecked=(input)=>{
//         this.setState({
//             checkedListIds: this.state.checkedListIds.concat([input]),
            
//         });
//     }
//     removeIt=(input)=>{
//       let arr  = this.state.checkedListIds.indexOf(Number(input));
//       this.state.checkedListIds.splice(arr,1);
//       this.setState({
//           checkedListIds:this.state.checkedListIds,
//       });
//     }
  
    
//     // showCompleted=()=>{
//     //     // this.state.tempList = this.state.listIdOfToList;
//     //     // this.state.listIdOfToList=this.state.checkedListIds;
//     //     this.setState({
//     //         tempList:this.state.listIdOfToList,
//     //         listIdOfToList:this.state.checkedListIds,
//     //     });
//     //     stop=1;
//     // }
//     // showAll=()=>{
//     //     this.setState({
//     //         listIdOfToList:this.state.tempList,
//     //     });
//     // }
    
    
//     render(){
//         const here = this.state.listIdOfToList.map((item)=>
//         <NewList className= {mainClassName} key={item} valueSend = {this.state.valueTosend} delete={this.deleteListItem}
//         id={item} removeIt={this.removeIt} checking={this.appendChecked} isChecked={
//         this.changeCheckedData}/>);
        
//         return(
//         <div className="todo-app">
//             <p className="todos-logo">todos</p>
//             <div className="fixed-entry-box">
//                 <input id= "mainInput" className="fixed-entry-input-box" onKeyDown={this.formListItem} placeholder="what needs to be done?" ></input>
//             </div>
//           {here}
//             {this.state.ok===true && this.state.listIdOfToList.length>0? 
//             <div className ="footer-part">
//                 <span>{this.state.listIdOfToList.length}items left</span>
//                 <ul className="footer-ul">
//                     <li onClick={this.showAll}>All</li>
//                     <li onClick={this.showActive}>Active</li>
//                     <li onClick={this.showCompleted}>Completed</li>
//                 </ul>
//                 <span onClick={this.clearTheSelectedItems}>Clear Selected</span>
//             </div>:<div></div>}
//         </div>);
//     }
// }
// export { CreateToDoList,NewList };
// /*
//  // formListItem=(event)=>{
//     //     if(event.target.value!==""){
//     //         if(event.keyCode===13){
//     //             this.setState({
//     //                 valueTosend:event.target.value,
//     //                 },()=>{
//     //                 this.setState({listIdOfToList:this.state.listIdOfToList.concat(
//     //                 [
//     //                     <NewList key={this.state.no} valueSend = {this.state.valueTosend}
//     //                     delete={this.deleteListItem}
//     //                     id={this.state.no} 
//     //                     removeIt={this.removeIt} 
//     //                     checking={this.appendChecked}/>,
//     //                 ])
//     //                 ,no:this.state.no+=1})
//     //                 });
//     //             event.target.value="";
//     //         }
//     //     }
//     // }
    
     
    
    
    
    
    
    
//     // changeCheckedData=(input)=>{
//     //     alert(input);
//     // }
    
//     // clearTheSelectedItems=(event)=>{
//     //     let one = this.state.listIdOfToList;
//     //     let two = this.state.checkedListIds;
//     //     let three = this.state.activeList;
//     //         for(let i=0;i<one.length;i++){
//     //             for(let j=0;j<two.length;j++){
//     //                 if(one[i]==two[j]){
//     //                     one.splice(one.indexOf(one[i]),1);
//     //                     two.splice(two.indexOf(two[i]),1);
//     //                     // three.splice(three.indexOf(three[i]),1);
//     //                     this.setState({
//     //                         listIdOfToList:one,
//     //                         checkedListIds:two,
//     //                         // activeList:three,
//     //                     });
//     //                 }
//     //             }
//     //         }
//     // }
 
 
    
//     // showAll=(event)=>{
//     //     this.state.listIdOfToList.forEach((item)=>{
//     //         document.getElementById(item).style.display="flex";
//     //     });
//     // }
   
//       // }
    
//     // showActive=()=>{
//     //     this.setState({
//     //         listIdOfToList:this.state.activeList,
//     //         tempList:this.state.listIdOfToList,
//     //     })
//     // }
// */

// Third
// how many conponents


// import React from 'react';
// import {UserInput} from './userInput';
// import {TodoList} from "./toDoList";
// import {footer} from './footer';

// const CreateToDoList = ()=>{
//     return <div>
//     <user>hellow</user>
        // <TodoList />
        // <Footer />
    
    
    
//     hi</div>;
// };

// export {CreateToDoList};










