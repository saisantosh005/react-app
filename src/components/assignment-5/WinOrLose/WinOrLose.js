import React from 'react';
import {WinOrLoseComponentStyling,PlayAgainButtonStyling,GameStateStyling,ScoreStyling} from './winOrLoseStyle.js';

class WinOrLose extends React.Component{
    render(){
        let {isWin,selectedTheme,score,gameState,onPlayAgainClicked}=this.props;
        let scoreColor=selectedTheme.scoreColor;
        let gameStatetextColor;
        if(isWin){
            gameStatetextColor="#00b359";
        }
        else{
            gameStatetextColor="#f56565";
        }
        
        return(
            <WinOrLoseComponentStyling selectedTheme={selectedTheme}>
                <ScoreStyling scoreColor={scoreColor}>{score}</ScoreStyling>
                <GameStateStyling gameStatetextColor={gameStatetextColor}>You {gameState}!</GameStateStyling>
                <PlayAgainButtonStyling onClick={onPlayAgainClicked}> Play Again</PlayAgainButtonStyling>
            </WinOrLoseComponentStyling>
            
        );
    }
}
export {WinOrLose};