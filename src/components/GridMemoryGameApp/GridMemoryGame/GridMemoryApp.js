// import React from 'react'
// import {AnimationStyle,MainDiv,SmallDiv} from './gridAppStyle.js';
// import {observer} from 'mobx-react'
// import {observable } from 'mobx';

// @observer
// class GridMemoryGame extends React.Component{
//     @observable isOk=false;
    
//     render(){
//         return(
//             <MainDiv>
//                 <SmallDiv>
//                     <AnimationStyle isOk={this.isOk}></AnimationStyle>
//                 </SmallDiv>
//             </MainDiv>);
            
            
//     }
        
// }

// export {GridMemoryGame};
import React from 'react'
import {observer} from 'mobx-react';
// import {observable} from 'mobx';
import themeStore from '../../../stores/GridTheme/index.js';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {GridHeader} from '../header/GridHeader.js';
import {GridField} from '../GridField/GridField.js';
import {Result} from '../Result/Result.js';
import {GridGameMainStyle,GridGameAppStyle} from './gridAppStyle.js';

@observer
class GridMemoryGame extends React.Component{
    constructor(props){
        super(props);
        gridStore.setGridCells();
    }
    render(){
        return(
            <GridGameAppStyle  theme = {themeStore.object[themeStore.selectedTheme]}>
                <GridGameMainStyle>
                    <GridHeader />
                    {gridStore.isGameComleted===true?<Result />:<GridField theme = {themeStore.selectedTheme} />}
                </GridGameMainStyle>
            </GridGameAppStyle>);
    }
}
export {GridMemoryGame};