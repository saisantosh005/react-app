import React from 'react';
import {FooterData,FooterHeading,FooterSectionStyling} from './howToPlayStyle.js';
class HowToPlay extends React.Component{
    render(){
        let {selectedTheme}=this.props;
        return(
            <FooterSectionStyling selectedTheme={selectedTheme}>
                <FooterHeading>How to play</FooterHeading>
                <FooterData>Get points by clicking on an image but don't click on any image more than once!</FooterData>
            </FooterSectionStyling>);
    }
}
export {HowToPlay};