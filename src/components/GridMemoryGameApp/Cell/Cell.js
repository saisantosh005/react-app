import React from 'react';
import {CellStyle} from './cellStyle.js';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {observer} from 'mobx-react';
@observer
class Cell extends React.Component{
    change=()=>{
        
        let {isHidden} =this.props.item;
        if(isHidden===true){
            this.props.item.isHidden=false;
            gridStore.onCellClick();
            this.props.item.id=789;
        }
        else{
            gridStore.resetGame();
        }
    }
    render(){
        return(
            <CellStyle onClick={this.change}>{this.props.item.id}</CellStyle>
        );
    }
}
export {Cell};