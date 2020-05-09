import React from 'react';
import {render}  from '@testing-library/react';
import {HelloMessage} from '.';

describe("HelloMessage tests",()=>{
    it("it has to show user props",()=>{
        const {getByText,debug} = render(<HelloMessage message="hi" />);
        getByText(/hi/i);
        debug();
        
    });
    
    
})