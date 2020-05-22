import React from 'react';
import {Pagination} from './Pagination.js';
import {withKnobs,array,object} from '@storybook/addon-knobs';


export default{
    component:Pagination,
    title:"pagination",
    decorators:[withKnobs],
};


// const label = "arrya";
// const defaultArray =[1,2,3,4];
// const seperator = ",";
// const groupId = "here";
// const arrayIt = ;

export const paginationUI = ()=><Pagination value ={object("object",{"one":1,"two":2})}/>;