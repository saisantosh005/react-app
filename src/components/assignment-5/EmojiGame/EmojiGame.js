import React from 'react';
import {Navbar} from '../Navbar/Navbar.js';
import {HowToPlay} from '../HowToPlay/HowToPlay.js';
import {EmojiCard} from '../EmojiCard/EmojiCard.js';
import {EmojisListStyling,EmojiGameAppStyling} from './emojisGameApp.js';
import {WinOrLose} from '../WinOrLose/WinOrLose.js';
class EmojiGame extends React.Component{
    state={
        gameState:"Playing",    
        emojis:[
            {id:"one",isClicked:false,name:"Emploded Head",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png",},
            {id:"two",isClicked:false,name:"Grinning Face with Sweat",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png",},
            {id:"three",isClicked:false,name:"Smiling Face with Heart-Eyes",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png",},
            {id:"four",isClicked:false,name:"Smirking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png",},
            {id:"five",isClicked:false,name:"Thinking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png",},
            {id:"six",isClicked:false,name:"Winking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png",},
            {id:"seven",isClicked:false,name:"Grinning Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png",},
            {id:"eight",isClicked:false,name:"Crying Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png",},
            {id:"nine",isClicked:false,name:"Astonished Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png",},
            {id:"ten",isClicked:false,name:"Face with Tears of Joy",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png",},
            {id:"eleven",isClicked:false,name:"Star-Struck",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png",},
            {id:"twelve",isClicked:false,name:"Winking Face with Tongue",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png",}
            ],
        score:0,
        topScore:0,
        themeName:"light",
    }
    static selectedTheme={
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
    }
    
    onEmojiClick=(event)=>{
        this.shuffleEmojis();
        let{emojis}=this.state;
        emojis.forEach((item,index)=>{
            if(item.id===event.currentTarget.id){
                if(item.isClicked===false){
                    item.isClicked=true;
                    this.inCreaseScore();
                }else{
                    this.setState({
                        gameState:"Lose",
                    });
                }
            }
        });    
        this.setState({
            emojis:emojis,
        });
    }
    
    shuffleEmojis=()=>{
        let {emojis} =this.state;
        for(let i=emojis.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [emojis[i],emojis[j]]=[emojis[j],emojis[i]];
        }
        this.setState({
            emojis:emojis,
        });
    }
    
    inCreaseScore=()=>{
        let {score}=this.state;
        if(score===11){
            this.setState({
                gameState:"Won",
            });
        }
        this.setState({
            score:score+1,
        });
        
    }
    
    onPlayAgainClicked=()=>{
       this.resetGame();
       this.setTopScore();
    }
    
    resetGame=()=>{
        let {emojis}=this.state;
        emojis.forEach((item)=>{
            item.isClicked=false;
        });
        this.setState({
            emojis:emojis,
            score:0,
            gameState:"Playing",
        });
    }
    
    setTopScore=()=>{
        let {score,topScore}=this.state;
        if(score>topScore){
            this.setState({
                topScore:score,
            });
        }
    }
    
    onChangeTheme=()=>{
        let {themeName}=this.state;
        this.setState({
            themeName:themeName==="light"?"dark":"light",
        });
    }
    
    render(){
        
        let {score,topScore,themeName,gameState}=this.state;
        let selectedTheme=EmojiGame.selectedTheme;
        let Emojies = this.state.emojis.map((item)=>{
            return(
                <EmojiCard key={item.name} onEmojiClick={this.onEmojiClick} 
                    cardDetails={item} id={item.id} isClicked={item.isClicked} 
                    selectedTheme={selectedTheme[themeName]}/>
            );
        });
        
        return(
            <EmojiGameAppStyling selectedTheme={selectedTheme[themeName]}>
                <Navbar selectedTheme={selectedTheme[themeName]} score={score} 
                    topScore={topScore} onChangeTheme={this.onChangeTheme}/>
                    
                    { gameState==="Playing"?
                        <EmojisListStyling 
                            selectedTheme={selectedTheme[themeName]} >{Emojies}</EmojisListStyling>
                        :
                        <WinOrLose isWin={gameState==="Won"?true:false}
                            selectedTheme ={selectedTheme[themeName]} 
                            score={score} gameState={gameState} 
                            onPlayAgainClicked={this.onPlayAgainClicked}/>
                        }
                    
                <HowToPlay  selectedTheme={selectedTheme[themeName]}/>
            </EmojiGameAppStyling>);
    }
}
export {EmojiGame};
//extraparts
        // switch(gameState){
        //     case "Won":
        //         showComponentOnCondition=<WinOrLose textColor={"#00b359"}
        //                 selectedTheme ={selectedTheme[themeName]} 
        //                 score={score} gameState={gameState} 
        //                 onPlayAgainClicked={this.onPlayAgainClicked}/>;
        //         break;
        //     case "Lose":
        //         showComponentOnCondition=<WinOrLose textColor={"#f56565"} 
        //                 selectedTheme ={selectedTheme[themeName]} 
        //                 score={score} gameState={gameState} 
        //                 onPlayAgainClicked={this.onPlayAgainClicked}/>;
        //         break;
        //     default:
        //         showComponentOnCondition=(<EmojisListStyling
        //                 selectedTheme={selectedTheme[themeName]} >{Emojies}</EmojisListStyling>);
        //         break;
        // }
