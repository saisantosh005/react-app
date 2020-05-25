import React from 'react';
import {inject} from 'mobx-react';
import {MainDivStyle,AnchorStyle,SmallAnchor,SlashStyle} from './styledComponent.js';
// import ProductStore from 

@inject("productStore")
class Pagination extends React.Component{
    
    render(){
        const {noOfPages,pageNumber} = this.props.productStore;
        const {value,incrementLimit,decrementLimit} = this.props;
        return(
            <MainDivStyle>
                <AnchorStyle disabled={pageNumber===1} onClick={decrementLimit}>{"<"}</AnchorStyle>
                    <SmallAnchor>{value.one}</SmallAnchor>
                    <SlashStyle>/</SlashStyle>
                    <SlashStyle>{value.two}</SlashStyle>
                <AnchorStyle disabled={pageNumber===noOfPages} onClick={incrementLimit}>{">"}</AnchorStyle>
            </MainDivStyle>
        );
    }
}
export {Pagination};