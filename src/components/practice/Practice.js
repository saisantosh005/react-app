

import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun, action } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Tony";
  @observable lastName = "Stark";

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }

  @action.bound
changeFirstNameAndLastName() {
    let promise = new Promise((resolve, reject) => {
      resolve({
        first_name: "Peter",
        last_name: "Parker",
      });
    });
    promise.then((response) => {
      this.firstName = response.first_name;
      this.lastName = response.last_name;
    });
  }
}

const newPerson = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => {
  console.log("Autorun called");
  console.log(newPerson.fullName);
});

// Example React component that observes state
const A = observer((props) => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{newPerson.fullName}</p>
      <button onClick={newPerson.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});
export {A}
// render(<ProfileView person={newPerson} />, document.getElementById("root"));



/*

import React, { Component } from "react";
import { render } from "react-dom";
import { inject, Provider, observer } from "mobx-react";
import { observable, action } from "mobx";

@inject("appStore")
@observer
class Title extends Component {
  render() {
    // console.log("CCC");
    const { title } = this.props.appStore.message;
    return <p>Title: {title}</p>;
  }
}

@inject("appStore")
// @observer
class Message extends Component {
  onChangeTitle = () => {
    const { onChangeTitle } = this.props.appStore;
    onChangeTitle("Hi");
  };
  render() {
    // console.log("changed");
    return (
      <div>
        <Title />
        <button onClick={this.onChangeTitle}>Change title</button>
      </div>
    );
  }
}

@observer
class A extends Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <Message />
      </Provider>
    );
  }
}

class AppStore {
  @observable message = {
    title: "Hello",
  };

  @action.bound
  onChangeTitle(title) {
    this.message.title = title;
  }
}

const appStore = new AppStore();
export {A};


when ever free observe it clear again*/


// render(<App />, document.getElementById("root"));






// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action, autorun } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable firstCounter = 0;
//   @observable secondCounter = 0;

//   dispose = autorun(() => {
//     console.log("Set displayFirstCounterAndSecondCounter");
//     this.displayFirstCounterAndSecondCounter = `${this.firstCounter} ${this.secondCounter}`;
//     // this.firstCounter++;
//   });

//   onChangeFirstAndSecondCount = () => {
//     this.firstCounter = this.firstCounter + 1;
//     this.secondCounter = this.secondCounter + 10;
//     this.firstCounter = this.firstCounter + 1;
//   };

//   componentWillUnmount() {
//     this.dispose();
//   }

//   render() {
//     console.log("2");
//     return (
//       <div>
//         <p>{this.firstCounter}</p>
//         <p>
//           Counter display string: {this.displayFirstCounterAndSecondCounter}
//         </p>
//         <button onClick={this.onChangeFirstAndSecondCount}>Change count</button>
//       </div>
//     );
//   }
// }

// render(<Counter />, document.getElementById("root"));



// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, computed } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable firstCounter = 0;
//   @observable secondCounter = 0;
//   @observable count = 0;

//   @computed
//   get displayCount() {
//     console.log("computed value");
//     return this.firstCounter;
//   }

//   onChangeFirstAndSecondCount = async() => {
//     await this.firstCounter;
//     this.firstCounter = this.firstCounter + 1;
//     this.secondCounter = this.secondCounter + 10;
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.displayCount}</p>
//         <button onClick={this.onChangeFirstAndSecondCount}>
//           Change first and second counters
//         </button>
//       </div>
//     );
//   }
// }

// render(<Counter />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";
// @observer
// class A extends React.Component {
//   @observable parentCounter = 0;

//   @action.bound
//   onParentCounterIncrement() {
//     this.parentCounter += 1;
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <CounterChild
//         onParentCounterIncrement={this.onParentCounterIncrement}
//         parentCounter={this.parentCounter}
//       />
//     );
//   }
// }

// @observer
// class CounterChild extends React.Component {
//   @observable childCounter1 = 0;
//   @observable childCounter2 = 0;

//   @action.bound
//   onIncrement() {
//     const { onParentCounterIncrement } = this.props;

//     onParentCounterIncrement();
//     onParentCounterIncrement();

//     this.childCounter1 += 3;
//   }

//   render() {
//     console.log("render CounterChild");
//     const { parentCounter } = this.props;

//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <div>parentCounter: {parentCounter}</div>
//         <div>childCounter1: {this.childCounter1}</div>
//         <div>childCounter2: {this.childCounter2}</div>
//       </div>
//     );
//   }
// }

// export {A}
// render(<CounterParent />, document.getElementById("root"));








// import React, { Component } from "react";
// // import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, computed,action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable firstCounter = 0;
//   @observable secondCounter = 0;

//   @computed
//   get displayFirstCounterAndSecondCounter() {
//     console.log("computed value");
//     return `${this.firstCounter} ${this.secondCounter}`;
//   }

//   onChangeFirstAndSecondCount = () => {
//     this.firstCounter = this.firstCounter + 1;
//     this.newValue();
//     this.newValue();
//     this.newValue();
//     this.newValue();
    
//   };
  
//   // @action.bound
//   newValue=()=>{
//     return this.firstCounter++;
//     // this.firstCounter = this.firstCounter + 1;
//     // this.secondCounter = this.secondCounter + 10;
//   }

//   render() {
//     console.log("k");
//     return (
//       <div>
//       <p>{this.displayFirstCounterAndSecondCounter}</p>
//         <p>
//           Counter display string: {this.displayFirstCounterAndSecondCounter}
//         </p>
//         <button onClick={this.onChangeFirstAndSecondCount}>
//           Change counters
//         </button>
//       </div>
//     );
//   }
// }
// export  {A};
// render(<Counter />, document.getElementById("root"));




// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// @observer
// class A extends Component {
//   @observable count = -34;

//   @action.bound
//   onUpdate = () => {
//     this.count = this.count + 12;
//     console.log("First Log:", this.count);
//     this.count = this.count - 23;
//     console.log("Second Log:", this.count);
//     this.count = this.count - 30;
//     console.log("Third Log:", this.count);
//   };

//   render() {
//     console.log("k");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onUpdate}>Update</button>
//       </div>
//     );
//   }
// }

// export {A};
// render(<Counter />, document.getElementById("root"));









// import React from "react";
// import { render } from "react-dom";
// import { observable, computed, autorun, action } from "mobx";
// import { observer } from "mobx-react";

// class Person {
//   @observable firstName = "Tony";
//   @observable lastName = "Stark";

//   @computed get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   @action.bound
//   async changeFirstNameAndLastName() {
//     this.firstName = 111;
//       this.lastName = 123456;
//     let promise = new Promise((resolve, reject) => {
//       resolve({
//         first_name: "Peter",
//         last_name: "Parker",
//       });
//     });
//     promise.then((response) => {
//     //   this.firstName = response.first_name;
//     //   this.lastName = response.last_name;
//     });
//     this.firstName = 1111344;
//       this.lastName = 1234561342;
    
//   }
// }

// const newPerson = new Person();

// // Reaction: log the profile info whenever it changes
// autorun(() => {
//   console.log("Autorun called");
//   console.log(newPerson.fullName);
// });

// // Example React component that observes state
// const A = observer((props) => {
//   console.log("render ProfileView");

//   return (
//     <div>
//       <p>{newPerson.fullName}</p>
//       <button onClick={newPerson.changeFirstNameAndLastName}>
//         Change first name and last name
//       </button>
//     </div>
//   );
// });
// export {A};
// render(<ProfileView person={newPerson} />, document.getElementById("root"));



// import React, { Component } from "react";
// import { render } from "react-dom";
// import { inject, Provider, observer } from "mobx-react";
// import { observable, action } from "mobx";


// @inject("appStore")
// class Title extends Component {
//   render() {
//     const { title } = this.props.appStore.message;
//     return <p>Title: {title}</p>;
//   }
// }

// @inject("appStore")
// @observer
// class Message extends Component {
//   onChangeTitle = () => {
//     const { onChangeTitle } = this.props.appStore;
//     onChangeTitle("Hi");
//   };
//   render() {
//     return (
//       <div>
//         <Title />
//         <button onClick={this.onChangeTitle}>Change title</button>
//       </div>
//     );
//   }
// }

// @observer
// class A extends Component {
//   render() {
//     return (
//       <Provider appStore={appStore}>
//         <Message />
//       </Provider>
//     );
//   }
// }

// class AppStore {
//   @observable message = {
//     title: "Hello",
//   };

//   @action.bound
//   onChangeTitle(title) {
//     this.message.title = title;
//   }
// }

// const appStore = new AppStore();
// export {A}
// render(<App />, document.getElementById("root"));

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action, computed } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable price = 0;
//   @observable amount = 0;
//   @observable currency = "Rupees";

//   // @action.bound
//   setPriceAndAmountAndCurrencyAsynchronously = async () => {
//     // this.currency = "Dollars";

//     // Suppose we got price and quantity from server response
//     const promise = new Promise((resolve, reject) => {
//       resolve({
//         price: "40",
//         amount: "150",
//       });
//     });
//     const { price, amount } = await promise;
//     this.setPriceAndAmount(price, amount);
//   };

//   // @action.bound
//   setPriceAndAmount = (price, amount) => {
//     this.price = price;
//     this.amount = amount;
//     this.price = 5;
//   };

//   @computed
//   get total() {
//     return this.price + this.amount + " " + this.currency;
//   }

//   render() {
//     console.log("render ProductView");
//     return (
//       <div>
//         {this.total}
//         <button onClick={this.setPriceAndAmountAndCurrencyAsynchronously}>
//           Change details
//         </button>
//       </div>
//     );
//   }
// }
// export {A}
// render(<ProductView />, document.getElementById("root"));



// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable count = 34;
//   @observable isCountChanged = false;

//   // @action.bound
//   onChangeCount=()=> {
//     this.isCountChanged = true;
//     this.count = this.count + 13;
//     setTimeout(() => {
//       // this.count = this.count + 13;
//     }, 2000);
    
//   }

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onChangeCount}>Change count</button>
//         <p>{this.isCountChanged ? "Count Changed" : ""}</p>
//       </div>
//     );
//   }
// }
// export {A}

// render(<Counter />, document.getElementById("root"));
// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable count = 12;
//   @observable doubleTheCount = 13;

//   @action.bound
//   async updateCounts() {
//     this.count = this.count + 1;
    
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     // promise.then(() => {
//     //   this.count = this.count + 1;
//     //   this.doubleTheCount = this.doubleTheCount * 2;
//     // });
//     this.count = this.count + 1;
//     this.count = this.count + 1;

//   }

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <button onClick={this.updateCounts}>Update counts</button>
//       </div>
//     );
//   }
// }
// export {A};



// render(<Counter />, document.getElementById("root"));

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable count = 0;
//   @observable doubleTheCount = 10;
//   @observable tripleTheCount = 20;

//   @action.bound
//     updateCounts=async()=> {
    
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     await promise;
//     // this.count = this.count + 1;
//     // this.doubleTheCount = this.doubleTheCount * 2;
//     // this.tripleTheCount = this.tripleTheCount * 3;
//     this.updateCountsSynchronously();
//   }

//     @action.bound
//     updateCountsSynchronously =() => {
//         this.count = this.count + 1;
//         this.doubleTheCount = this.doubleTheCount * 2;
//         this.tripleTheCount = this.tripleTheCount * 3;
//     };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <p>Triple Count: {this.tripleTheCount}</p>
//         <button onClick={this.updateCounts}>Update counts</button>
//       </div>
//     );
//   }
// }
// export {A}
// render(<Counter />, document.getElementById("root"));










// import React from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// class AppStore {
//   @observable isSignedIn = false;

//   @action.bound
//   onClick() {
//     console.log("change");
//     this.isSignedIn = !this.isSignedIn;
//     console.log(this.isSignedIn);
//   }
// }

// @observer
// class A extends React.Component {
//   @observable isSignedIn;
//   constructor(props) {
//     super(props);
//     this.isSignedIn = appStore.isSignedIn;
//     console.log(this.isSignedIn,"A");
//   }

//   render() {
//     // const {
//     //   appStore: { onClick },
//     // } = this.props;
//     const onClick = appStore.onClick;

//     return (
//       <button onClick={onClick}>
//         {this.isSignedIn ? "Sign Out" : "Sign In"}
//       </button>
//     );
//   }
// }

// const appStore = new AppStore();
// export {A}



// render(<App appStore={appStore} />, document.getElementById("root"));


// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// @observer
// class A extends Component {
//   @observable count = -34;

//   @action.bound
//   onUpdate () {
//     setTimeout(()=>{
//       this.count = this.count + 12;
//     console.log("First Log:", this.count);
//     this.count = this.count - 23;
//     console.log("Second Log:", this.count);
//     this.count = this.count - 30;
//     console.log("Third Log:", this.count);  
//     });
    
//   }

//   render() {
//     console.log("hello");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onUpdate}>Update</button>
//       </div>
//     );
//   }
// }
// export {A};
// render(<Counter />, document.getElementById("root"));

// -----1-----------------
// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action,autorun } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class A extends Component {
//   @observable count = 44;
//   @observable isCountChanged = false;

//   @action.bound
//   onChangeCount() {
//       // this.isCountChanged = true;
//       // this.count = this.count / 4;
//       // this.count = this.count / 5;
//       setTimeout(() => {
//         this.isCountChanged =!this.isCountChanged;
//         this.count = this.count+1;
//       }, 0);
//       setTimeout(() => {
//         // this.isCountChanged = true;
//         // this.count = this.count / 5;
//         autorun(()=>{
//           console.log("here");
//           console.log(this.count);
//           console.log(this.isCountChanged);
//         });
//       }, 0);
//   }

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onChangeCount}>Change count</button>
//         <p>{this.isCountChanged ? "Count Changed" : ""}</p>
//       </div>
//     );
//   }
// }
// export {A};
// render(<A />, document.getElementById("root"));

























// import React from "react";
// import {observer} from 'mobx-react';
// import {observable,action,autorun} from 'mobx';
// import {Provider,inject} from 'mobx-react';
// import {StyledDiv} from './practice1.js';

// @inject("temp")
// class D extends React.Component{
//     render(){
//         let {temp} = this.props
//         return(
//         <div>
//         D component:- {temp}
//         </div>);
//     }
// }

// @inject("temp")
// class C extends React.Component{
//     render(){
//         let {temp,name} = this.props;
//         return(
//             <div>
//             C Component:- {temp,name}
//                 <D />
//             </div>);
//     }
// }


// @inject("temp")
// @observer
// class B extends React.Component{
//     @observable name="";
//     onChangeIt=(event)=>{
//         this.name=event.target.value;
//     }
//     render(){
//         let {temp} = this.props;
//         return(
//             <div>
//             <input style={{background:'dodgerBlue',margin:'40px'}} onChange={this.onChangeIt}/>
//                 B component:- {temp}
//                 <C name={this.name} />
//             </div>);
//     }
// }

// @observer
// class A extends React.Component{
//     @observable speed="";
//     @observable count=7;
    
//     message=observable({
//         name:"here",
//         value:6,
//         ok:true,
//         clear:{
//             value1:"hello",
//         }
//     });
    
//     // @action.bound
    
//     changeCount=()=>{
//         this.count-=7;
//         this.speed=9; 
//         this.message.value++;
//         // .createIt={here:4};
//     }
    
    
//     @action.bound
//     changeIt(){
//         console.log(this.message.createIt,"start");
//         this.message.createIt.here-=4;
//         console.log(this.message.createIt,"end");
//     }
    
//     creat=autorun(()=>{
//         console.log(this.message,"jooo");
//     });
    
        
//     render(){
//         console.log("hello");
//         return (
//             <div>
//                 <p>Count:{this.count}</p>
//                 <p>Count:{this.speed}</p>
//                 <p>{this.message.value}</p>
//                 <button onClick={this.changeCount}>button</button>
//             </div>
//         );
//     }
// }

// // <button onClick={this.count>0?this.changeCount:this.changeIt}>button</button>
// // {this.message.createIt!==undefined&&<p>{this.message.createIt.here}</p>}
// // <StyledDiv onClick={this.changePopus}>Hello do it </StyledDiv>
//         // {this.speed&&<div>Hello do it </div>}

//  export {A};
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

// // const here = new A();

// // autorun(()=>{
// //     console.log(here.message);
// //     console.log(here.message.clear,"now");
// //     here.message.clear.hello=0;
// // });
// // here.message.clear.hello=9;
// // here.message.clear.hello=8;
// // here.message.to = 3;
// // here.message.to=5;




// // autorun()
//     // author = message.author
//     //     autorun(() => {
//     //         console.log(author.name)
//     //     })
//     //     message.author.name = "Sara"
//     //     message.author = { name: "John" }

//     // changePopus=()=>{
//     //     // this.speed=tre;
//     //     this.count-=1;
//     //     // this.speed = 7;
        
//     //     // console.log
//     // }
    
    