import React from 'react';
import {render,fireEvent} from '@testing-library/react';
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
       const {getByText} = render(<Button valueIt={"XS"}/>);
       getByText("XS");
   }) ;
   
   it("Should test the change button clicked value",()=>{
      const {getByRole} = render(<Button valueIt={"XS"}/>);
      const buttonIt = getByRole("button",{label:"XS"});
      fireEvent.click(buttonIt);
      console.log(button.isClicked);
   });
});

