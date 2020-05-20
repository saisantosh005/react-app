import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import {ButtonStyle} from './styledComponent.js';

@observer
class Button extends React.Component{
    @observable isClicked=false;
    
    @action.bound
    changeValue(event){
        console.log("ok");
        // const {onSelectSizeIt} = this.props;
        this.isClicked=!this.isClicked;
        console.log(this.isClicked);
        // onSelectSizeIt(event.target.value);
    }
    
    render(){
        const {valueIt} = this.props;
        
        return(
            <ButtonStyle onClick={this.changeValue} value={valueIt} isClicked={this.isClicked}>
                {valueIt}
            </ButtonStyle>);
    }
}

export {Button};


// import React from 'react';

// class Button extends React.Component{
//     here = ()=>{
        
//     }
    
//     render(){   
//         const {children} = this.props;
//         return(
//         <button onClick={this.here} >
//         {children[1]}
//         </button>);
//     }
// }

// export {Button};