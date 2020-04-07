import React from 'react';
import {Score,TopScore,HeaderPart,ThemeButtonStyle,ScoreAndThemeDivStyling,GameNameStyling,ScoreNumberStyling} from './headerstyle.js';

class Navbar extends React.Component{
    
    render(){
        let {selectedTheme,score,topScore,onChangeTheme} =this.props;
        return(
            <HeaderPart selectedTheme={selectedTheme}>
                <GameNameStyling>Emoji Game</GameNameStyling>
                <ScoreAndThemeDivStyling selectedTheme={selectedTheme}>
                    <Score>Score:<ScoreNumberStyling>{score}</ScoreNumberStyling>
                    </Score>
                    <TopScore>Top Score: <ScoreNumberStyling>{topScore}</ScoreNumberStyling>
                    </TopScore>
                    <ThemeButtonStyle selectedTheme={selectedTheme} onClick={onChangeTheme}>
                        {selectedTheme.themeName}
                    </ThemeButtonStyle>
                </ScoreAndThemeDivStyling>
            </HeaderPart>
        );
    }
}
export {Navbar};