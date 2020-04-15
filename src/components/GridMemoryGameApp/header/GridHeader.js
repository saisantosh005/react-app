import React from 'react';
import themeStore from '../../../stores/GridTheme/index.js';
import {HeaderStyle,LevelAndTheme} from './headerstyle.js';
import {observer} from 'mobx-react';
// @observer
class GridHeader extends React.Component{
    onChangeSelectedTheme=()=>{
        themeStore.changeTheme();        
    }
    render(){
        return(
            <HeaderStyle>
                <div>Top Level:</div>
                <LevelAndTheme>
                    <div>Level:</div>
                    <div onClick={this.onChangeSelectedTheme}>Mode:{"light"}</div>
                </LevelAndTheme>
            </HeaderStyle>);
    }
}
export {GridHeader};