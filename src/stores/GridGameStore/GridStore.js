import {observable} from 'mobx';

import GridGameModel from '../models/GridGameModel.js';
class GridStore{
    @observable level=0
    @observable topLevel=0
    @observable listOfGridModel=[];
    @observable isGameComleted=false
    @observable selectedCellsCount=0
    
    onCellClick=()=>{
        this.incrementSelectedCellsCount();
    }
    setGridCells=()=>{
        let count=0;
        this.listOfGridModel=[];
        for(let i=0;i<3;i++){
            const gridObject =new GridGameModel({
                id:i,
                isHidden:false,
            });
            this.listOfGridModel.push(gridObject);
        }
        let o =[]
        for(let i=this.listOfGridModel.length;i>0;i--){
            if(i<3){
             this.listOfGridModel[i].isHidden=true   
            }
        }
            // shuffleEmojis=()=>{
            //     let {emojis} =this.state;
            //     for(let i=emojis.length-1;i>0;i--){
            //     const j = Math.floor(Math.random()*(i+1));
            // [emojis[i],emojis[j]]=[emojis[j],emojis[i]];
    // }
    
            // const t = Math.floor(Math.random()*(i+1));
            // for(let j=0;j<o.length;j++){
            //     if(o[j]!==t&&count<3){
            //         o[i]=t;
            //         console.log(t);
            //         count++
            //         this.listOfGridModel[j].isHidden=true
            //     }
            // }
                
        // }
        return this.listOfGridModel;
    }
    
    gotoNextLevelAndUpdateCells=()=>{
        
    }
    gotoIntialLevelAndUpdateCells=()=>{
        
    }
    resetSelectedCellsCount=()=>{
        this.selectedCellsCount=0;
    }
    incrementSelectedCellsCount=()=>{
        this.selectedCellsCount++;
    }
    onPlayAgainClick=()=>{
        this.level=0;
    }
    resetGame=()=>{
        this.level=0;
        alert("reset");
    }
    setTopLevel=()=>{
        
    }
}

const gridStore = new GridStore();
export default gridStore;

array.sort(() => Math.random() - 0.5)