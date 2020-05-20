import React from 'react';
import {MainDivStyle,TitleStyle,DataStyle} from './styledComponent.js';

class DisplayMouseCoordinates extends React.Component{
    
    render(){
        const {xPosition,yPosition} = this.props;
        return(
            <MainDivStyle>
                <TitleStyle>DisplayMouseCoordinates</TitleStyle>
                <DataStyle>
                    <p>The Mouse Position is:</p>
                    <p>{`(${xPosition},${yPosition})`}</p>
                </DataStyle>
            </MainDivStyle>);
    }
}

export {DisplayMouseCoordinates};