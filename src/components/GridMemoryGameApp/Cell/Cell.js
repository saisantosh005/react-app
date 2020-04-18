import React from 'react';
import {CellStyle,CellParentDivStyle} from './cellStyle.js';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import gridDataObject from '../../../stores/Json/Json.json';
@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOncell;
    @observable isWrong;
    @observable timeId;
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=props.item.isHidden;
        this.isClickedOncell=true;
    }
    componentDidMount(){
        setTimeout(()=>{
            this.shouldShowHiddenCells=false;
                this.isClickedOncell=false;
        },(gridDataObject[gridStore.level].gridSize)*1000);
    }
        
    changeInData=()=>{
        if(this.props.item.isHidden===true){
            this.isClickedOncell=true;     
            this.shouldShowHiddenCells=true;
            setTimeout(()=>gridStore.onCellClick(),100);
        }
        else{
            this.shouldShowHiddenCells=true;
            setTimeout(()=>gridStore.resetGame(false),100);
        }
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render(){
        
        let{theme,item }=this.props;
        let fieldWidth=gridDataObject[gridStore.level];
        return(
            <CellParentDivStyle  onClick={this.changeInData}  theme ={theme}
                    eachModelData = {item}
                    disabled={this.isClickedOncell}
                    shouldShowHiddenCells={this.shouldShowHiddenCells}
                    fieldWidth={fieldWidth}>

                <CellStyle 
                    theme ={theme}
                    eachModelData = {item}
                    disabled={this.isClickedOncell}
                    shouldShowHiddenCells={this.shouldShowHiddenCells}
                    fieldWidth={fieldWidth}
                    ></CellStyle>
                </CellParentDivStyle>
            
        );
    }
}
export {Cell};