import React from 'react';
import {CheckboxWithLabel} from"./commonComponents.js";

class DisableOrEnable extends React.Component{
        state={
            isDisableButtonChecked:false,
            showMessage:'',
        };

    handleChange=()=>{
        if(this.state.isDisableButtonChecked===true){
            this.setState({
                showMessage:'',
                isDisableButtonChecked:false,
            });
        }else{
            this.setState({
                showMessage:'I am disabled',
                isDisableButtonChecked:true,
            });
        }
    }
    displayMessage=(input)=>{
        this.setState({
            showMessage:"Hi i am enabled",
        });
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
    }
   
    render(){
        const here = <CheckboxWithLabel valued="Disable" updateCheckedStatus={this.handleChange} />;
        
        return(
            <div className="disable-app" > 
                {here}        
                <div className="disable-input-section">
                <input type="button" value="ClickMe" onClick={this.displayMessage} disabled={this.state.isDisableButtonChecked} ></input>
                {this.state.showMessage}
                </div>
            </div>);
    }
}
export {DisableOrEnable};
