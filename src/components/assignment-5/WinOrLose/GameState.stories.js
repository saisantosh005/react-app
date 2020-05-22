import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs,object } from '@storybook/addon-knobs';
import {WinOrLose} from './WinOrLose.js';


export default {
  component: WinOrLose,
  title: 'EmojiGame/GameState',
  decorators: [withKnobs]
};

let selectedTheme={
        light:{
            themeName:"DARK THEME",
            color:"black",
            headerBackground:"white",
            cardBackground:"white",
            footerBackground:"white",
            bodyBackground: "#ebf4ff",
            borderColor:"black",
            scoreColor:"#2d3748",
        },
        dark:{
            themeName:"LIGHT THEME",
            color:"white",
            headerBackground:"#2d3748",
            cardBackground:"#2b6cb0",
            bodyBackground:"#1a202c",
            footerBackground:"#4a5568",
            scoreColor:"white",
            borderColor:"white",
        }
    };
export const emojiGameWinningState = ()=><WinOrLose 
        isWin={true}
        score={number("score","0")}
        selectedTheme={object("type Theme",selectedTheme.light)}
        gameState={text("GameState","Won")}
        />;
        
export const emojiGameLosingState = ()=><WinOrLose 
            isWin={false}
            score={number("score","0")}
            selectedTheme={object("type Theme",selectedTheme.light)}
            gameState={text("GameState","Lose")}
        />;

export const emojiGameEditState = ()=>{
        return <WinOrLose 
            isWin={boolean("isWin",true)}
            score={number("score","0")}
            selectedTheme={object("type Theme",selectedTheme.light)}
            gameState={text("GameState","Won")}
        />};