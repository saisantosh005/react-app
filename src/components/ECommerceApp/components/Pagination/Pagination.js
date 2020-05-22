import React from 'react';
import {MainDivStyle,AnchorStyle,SmallAnchor,SlashStyle} from './styledComponent.js';

class Pagination extends React.Component{
    
    
    render(){
        const {value,increasePageCount,incrementLimit,decrementLimit} = this.props;
        return(
            <MainDivStyle>
                <AnchorStyle onClick={decrementLimit}>{"<"}</AnchorStyle>
                    <SmallAnchor href="#">{value.one}</SmallAnchor>
                    <SlashStyle>/</SlashStyle>
                    <SlashStyle>{value.two}</SlashStyle>
                <AnchorStyle onClick={incrementLimit}>{">"}</AnchorStyle>
            </MainDivStyle>
        );
    }
}
export {Pagination};