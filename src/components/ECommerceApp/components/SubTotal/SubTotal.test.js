import React from "react";

import { Provider } from "mobx-react";
import {render} from '@testing-library/react';
import {SubTotal} from '.';

describe("subtotal test cases",()=>{
    it("should test the total amount",()=>{
        const {getByText} = render(
            // <Provider total = {1000} symbol={"₹"}>
                <SubTotal total = {1000} symbol={"₹"}/>      
            // </Provider>
            );
        
        getByText(/SubTotal/);
        getByText(1000);
        // console.log(render());
    });
    
    
    
})