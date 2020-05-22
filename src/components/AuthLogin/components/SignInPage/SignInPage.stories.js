import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs,object } from '@storybook/addon-knobs';
import {SignInButton} from './SignInButton.js';


export default {
  component: SignInButton,
  title: 'SignInButton/SignInButton',
  decorators: [withKnobs]
};

export const signInButton = ()=><SignInButton 
                testid={"hello"} 
                disabled={boolean("disabled",true)}
                type={"submit"}
                label={"Sign In"}
    />;



export const signInButtonWithcolorChange = ()=><SignInButton 
                testid={"hello"} 
                disabled={boolean("disabled",true)}
                type={"submit"}
                label={"Sign In"}
  />;
signInButtonWithcolorChange.story = {
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'pink', value: 'hotpink' },
        { name: 'blue', value: 'deepskyblue' },
      ],
    },
  },
};

    