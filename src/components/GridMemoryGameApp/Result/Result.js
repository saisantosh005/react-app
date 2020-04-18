import React from 'react';
import {ResultDivStyle,GreetingStyle,Button,ScoreStyle} from './resultStyle.js';
import gridStore from '../../../stores/GridGameStore/GridStore.js';

class Result extends React.Component{
    render(){
        return (
            <ResultDivStyle>
                <ScoreStyle>{gridStore.level}</ScoreStyle>
                <GreetingStyle>Congratulations! You completed all the levels </GreetingStyle>
                <Button onClick={gridStore.onPlayAgainClick}>Play Again</Button>
            </ResultDivStyle>
        );
    }
}
export {Result};