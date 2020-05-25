import React from 'react';
import {Pagination} from './Pagination.js';
import {withKnobs,array,object} from '@storybook/addon-knobs';


export default{
    component:Pagination,
    title:"pagination",
    decorators:[withKnobs],
};

export const paginationUI = ()=>{
        const productStore = {noOfPages:2,pageNumber:4};
        
        return <Pagination 
            value ={object("object",{"one":1,"two":2})} 
            productStore={productStore}
        />}