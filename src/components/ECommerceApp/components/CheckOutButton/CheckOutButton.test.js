import React from 'react';
import {render,waitFor,fireEvent} from '@testing-library/react';
import {CheckOutButton} from '.';

/*global expect,jest*/
describe("",()=>{
    // let checkOutButton;
    beforeEach(()=>{
        // checkOutButton =new CheckOutButton    
    });
    
   
   it("should test the button",()=>{
        const clearCart = jest.fn();
        const onClickClearCart=jest.fn();
        const {getByTestId} = render(
           <CheckOutButton isDisabled={true}/>);
           expect(getByTestId("checkOutButton")).toHaveTextContent("CheckOut");
           
        waitFor(()=>{expect(onClickClearCart).not.toBeCalled()});
        expect(clearCart).not.toBeCalled();
    });
   
   
  it("sholue test test button cleared",()=>{
      const clearCart = jest.fn();
      const onClickClearCart=jest.fn();
      const alert = jest.fn();
       
        const {getByRole,getByTestId} = render(
            <CheckOutButton isDisabled={false} clearCart={clearCart}/>
        );
          
        const crossButton = getByRole("button",{name:"CheckOut"});
            
        fireEvent.click(crossButton);
          
        waitFor(()=>{expect(onClickClearCart).toBeCalled()});
        expect(clearCart).toBeCalled();
  });
   
    
});