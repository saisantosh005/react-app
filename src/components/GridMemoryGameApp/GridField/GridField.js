import React from 'react';
import {observer} from 'mobx-react';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {Cell} from '../Cell/Cell.js';
import {GridFieldStyle,GridFIledStyledDiv} from './gridFieldstyle.js';
import gridDataObject from '../../../stores/Json/Json.json';
// import themeStore from '../../../stores/GridTheme/index.js';
import {observable} from 'mobx';
@observer
class GridField extends React.Component{
    timeId;
    renderField=()=>{
        return gridStore.listOfGridModel.map((item)=>
        <Cell  key={Math.random()} theme = {this.props.theme} item={item} />);
    }
    
    // shouldComponentUpdate(nextProps,nextState){
        
    //     console.log(nextProps.theme,nextState.theme)
    //     // if(themeStore.object[themeStore.selectedTheme]===""||themeStore.object[themeStore.selectedTheme]===false){
    //     //     return false;
    //     // }
    //     return true
    // }        
  
    render(){
        clearInterval(this.timeId);        
            this.timeId = setInterval(()=>{
                if(!gridStore.isGameComleted){
                    this.keyValue = gridStore.resetGame();
                }
                else{
                    clearInterval(this.timeId);        
                }
            },(gridDataObject[gridStore.level].gridSize)*2000); 
                
        
        let fieldWidth=gridDataObject[gridStore.level];
        return(
            <GridFIledStyledDiv >
                <GridFieldStyle key = {Math.random()} fieldWidth={fieldWidth}>
                    {this.renderField()}        
                </GridFieldStyle>
            </GridFIledStyledDiv>
        );
    }
}
export {GridField};