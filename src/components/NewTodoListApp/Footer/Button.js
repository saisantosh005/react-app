import React from 'react';
import {HoverDiv} from'./footerStyling';


function Button(props){
    return(
        <HoverDiv id={props.id} onClick={props.onClick}>{props.nameIt}</HoverDiv>
    );
}
export {Button};