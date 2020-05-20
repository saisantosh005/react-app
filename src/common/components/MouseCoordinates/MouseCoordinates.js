import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';


@observer
class MouseCoordinates extends React.Component{
    @observable xPosition=0;
    @observable yPosition=0;
    
    handleMouseMove =(event)=>{
        this.xPosition =event.clientX,
        this.yPosition=event.clientY;
    }
    
    render(){
        return(
            <div onMouseMove={this.handleMouseMove}
            onClick={this.handleMouseMove}>
                {this.props.render(this.xPosition,this.yPosition)}
            </div>
            );
            
    }
}
export default MouseCoordinates;