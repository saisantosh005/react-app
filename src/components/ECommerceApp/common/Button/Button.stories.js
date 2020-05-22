import React from 'react';
import {withKnobs,text,number,boolean,object} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {Button} from './Button.js';

export default {
  component: Button,
  title: 'ECommerceButton/common',
  decorators: [withKnobs]
};
const styledObject = {"background":"black",
            "color":"white",
            "height":"50px",
            "border_radius":"5px",
            
    };
const CheckOutStyleObject = {"color":"gray",
            "background":"black",
            "font_size":"25px",
            "width":"50%",
            
        };
const SignOutButtonStyle ={
        "border":"1px solid black",
       "border_radius":"5px",
    };
export const normalButton = ()=><Button styledObject = {styledObject} label={"DefaultLabel"}/>;

export const addToCartButton = ()=><Button styledObject={styledObject} label={"Add to Cart"}/>;

export const checkOutButton = ()=><Button styledObject={CheckOutStyleObject} label={"Check Out Button"}/>;

export const signOutButton = ()=><Button styledObject={SignOutButtonStyle} label={"Sign Out Button"}/>;

export const editableSignOutButton = ()=><Button styledObject={object("changSignOut",SignOutButtonStyle)} label={"Sign Out Button"}/>;

export const editableCartButton = ()=><Button styledObject={object("styledObject",styledObject)} label={text("label","Add to Cart")}/>;



