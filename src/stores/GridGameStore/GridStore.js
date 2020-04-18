import {observable,action} from 'mobx';
import GridGameModel from '../models/GridGameModel.js';
import gridDataObject from '../Json/Json.json';

class GridStore{
    @observable level
    @observable topLevel
    @observable listOfGridModel=[]
    @observable isGameComleted
    @observable selectedCellsCount
    @observable isOk;
    constructor(props){
        this.level=0;
        this.topLevel=0;
        this.listOfGridModel=[];
        this.isGameComleted=false;
        this.selectedCellsCount=0;
        this.isOk=0;
    }
    // gridDataObject=
    onCellClick=()=>{
        this.incrementSelectedCellsCount();
        if(this.selectedCellsCount===(this.level+3)){
            this.gotoNextLevelAndUpdateCells();
        }
        if(this.level===7){
            this.isGameComleted=true;
        }
    }
    
    @action.bound
    setGridCells(input){
        let data = gridDataObject[this.level];
        this.listOfGridModel=[];
        for(let i=0;i<((data.gridSize)**2);i++){
            const object = {
                id:i,
                isHidden:false,
            };
            if(i<data.hiddenCellCount){
                object.id="t";
                object.isHidden=true;
            }
            const gridObject = new GridGameModel(object);
            this.listOfGridModel.push(gridObject);
        }
        for(let i =this.listOfGridModel.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [this.listOfGridModel[i],this.listOfGridModel[j]]=[this.listOfGridModel[j],this.listOfGridModel[i]];
        }
    }
    
    @action.bound
    gotoNextLevelAndUpdateCells(){
        this.level++;
        this.selectedCellsCount=0;
        this.setGridCells();   
    }
    
    @action.bound
    gotoIntialLevelAndUpdateCells(){
        this.isGameComleted=false;
        this.level=0;
        this.setGridCells();
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount=0;
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        this.selectedCellsCount++;
    }
    @action.bound
    onPlayAgainClick(){
        
        if(this.level>this.topLevel){
            this.setTopLevel();
        }
        this.gotoIntialLevelAndUpdateCells();
        this.resetSelectedCellsCount();
        
        
        // this.resetGame();
    }
    @action.bound
    resetGame(){
        this.setTopLevel();
        this.gotoIntialLevelAndUpdateCells();
        this.resetSelectedCellsCount();
        return Math.random()
    }
    @action.bound
    setTopLevel(){
        this.topLevel=this.level;                       
    }
}

const gridStore = new GridStore();
export default gridStore;