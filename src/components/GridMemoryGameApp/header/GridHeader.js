import React from 'react';
import {observer} from 'mobx-react';
import themeStore from '../../../stores/GridTheme';
import gridStore from '../../../stores/GridGameStore/GridStore.js';
import {HeaderStyle,LevelAndTheme,ThemeModeStyle} from './headerstyle.js';

@observer
class GridHeader extends React.Component{
    onChangeSelectedTheme=()=>{
        themeStore.changeTheme();        
    }
    render(){
        let boxBorder=themeStore.object[themeStore.selectedTheme].color;
        return(
            <HeaderStyle>
                <div>Top Level:{gridStore.topLevel}</div>
                <LevelAndTheme>
                    <div>Level:{gridStore.level}</div>
                    <ThemeModeStyle 
                    boxBorder={boxBorder}
                    onClick={this.onChangeSelectedTheme}>Mode:{"light"}</ThemeModeStyle>
                </LevelAndTheme>
            </HeaderStyle>);
    }
}
export {GridHeader};