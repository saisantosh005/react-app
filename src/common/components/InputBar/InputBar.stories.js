import React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs,object } from '@storybook/addon-knobs';
export default{
    title:"InputBar/inputTag",
    decorators:[withKnobs]
};


export const input = ()=><input type="text" value={text("value","ok its working")}/>;