import React from 'react';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {Cell} from '../Cell/Cell.js';
import {GridFieldStyle} from './gridFieldstyle.js'

class GridField extends React.Component{
    renderField=()=>{
        return gridStore.setGridCells().map((item)=><Cell key={item.id} item={item}/>);
        
    }
    render(){
        return(
            <GridFieldStyle>
                {this.renderField()}        
            </GridFieldStyle>);
    }
}
export{GridField};