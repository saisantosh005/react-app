import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';


const WithToggle = (ViewEditToggle) =>{
    
    @observer
    class NewWithToggle extends React.Component{
        @observable toggleStatus=true;
        
        onToggle=()=>{
            this.toggleStatus=!this.toggleStatus;
        }
        render(){
            return(
                <ViewEditToggle onToggle = {this.onToggle} toggleStatus={this.toggleStatus}
                {...this.props}/>
            );
        }
    }
    return NewWithToggle;
};

export default WithToggle;



