import React from 'react';
import {render} from  '@testing-library/react';
import SizeFilter from '.';
import {Provider} from 'mobx-react';
import ProductStore from '../../ProductStores/ProductStore';

describe("",()=>{
    
    it("should confirm there are buttons",()=>{
        const {getByText} = render(
            <Provider productStore={ProductStore}>
                <SizeFilter />
            </Provider>);
        // getByRole("button","XS");
        getByText("XS");
    });
})