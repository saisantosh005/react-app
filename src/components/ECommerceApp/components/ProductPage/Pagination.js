import React from 'react';
import {Anchor} from './styledComponent.js';
class Pagination extends React.Component{
    render(){
        const here = [1,2,3,4].map(item=><a href="#">{item}</a>);
        return(
            <React.Fragment>
                <Anchor>&laquo</Anchor>
                {here}
                <Anchor>&raquo</Anchor>
            </React.Fragment>);
    }
}
export {Pagination};