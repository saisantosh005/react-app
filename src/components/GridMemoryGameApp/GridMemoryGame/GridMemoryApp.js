import React from 'react'
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {GridHeader} from '../header/GridHeader.js';
import{GridField} from '../GridField/GridField.js';
import {GridGameMainStyle} from './gridAppStyle.js';
import themeStore from '../../../stores/GridTheme/index.js';

@observer
class GridMemoryGame extends React.Component{
    // changeTheme=()=>{
    //     console.log("one");
    //     console.log(themeStore.object[themeStore.selectedTheme]);
    //     themeStore.changeTheme();
    // }
    render(){
        return(
            <GridGameMainStyle theme = {themeStore.object[themeStore.selectedTheme]}>
                <GridHeader changeTheme={this.changeTheme}/>
                <GridField /> 
            </GridGameMainStyle>);
    }
}
export {GridMemoryGame};