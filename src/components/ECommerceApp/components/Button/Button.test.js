import React from 'react';
import {render,fireEvent,waitFor} from '@testing-library/react';
import {Button} from '.';

/*global jest,expect*/
describe("To confirm there is button",()=>{
   let button;
   let productStore;
   beforeEach(()=>{
      button = new Button();
      // productStore = new ProductStore();
   });
   
   it("shound render XS",()=>{
      const onSelectSizeIt = jest.fn();
       const {getByText} = render(<Button valueIt={"XS"} onSelectSizeIt={onSelectSizeIt}/>);
       getByText("XS");
       expect(onSelectSizeIt).not.toBeCalled();
       expect(button.isClicked).toBe(false);
       
   }) ;
   
   it("Should test the change button clicked value",()=>{
      const onSelectSizeIt = jest.fn();
      const {getByRole} = render(<Button valueIt={"XS"} onSelectSizeIt={onSelectSizeIt}/>);
      const buttonIt = getByRole("button",{label:"XS"});
      fireEvent.click(buttonIt);
      expect(onSelectSizeIt).toBeCalled();
      waitFor(()=>{
         expect(button.isClicked).toBe(true);
      });
   });
});

