import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs,object } from '@storybook/addon-knobs';
import {Result} from './Result.js';


export default {
  component: Result,
  title: 'GridGame/ResulltComponent',
  decorators: [withKnobs]
};

// const defaultValue = {
//     isHidden:true,
//   };
// const theme="dark";
export const resultComponent = ()=><Result />;

// export const cellWithOutClick = ()=><Result item={object("value",defaultValue)} theme={text("dark",theme)}/>;