import React from 'react';
import {EmojiCardStyle,Image,ImageName} from './emojiCardStyle.js';

class EmojiCard extends React.Component{
    
    render(){
        let {image,name}=this.props.cardDetails;
        let {selectedTheme,onEmojiClick,id} =this.props;
        return(
            <EmojiCardStyle selectedTheme={selectedTheme} onClick={onEmojiClick} id={id}>
                <Image src={image} />
                <ImageName >
                    {name}
                </ImageName>
            </EmojiCardStyle>
            );
    }
}
export {EmojiCard};
