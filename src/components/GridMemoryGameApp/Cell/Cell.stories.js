import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs,object } from '@storybook/addon-knobs';
import {Cell} from './Cell.js';


export default {
  component: Cell,
  title: 'GridGame/cellButton',
  decorators: [withKnobs]
};

const defaultValue = {
    isHidden:true,
  };
const theme="dark";
export const cell = ()=><Cell item={object("value",defaultValue)} theme={text("dark",theme)}/>;

export const cellWithOutClick = ()=><Cell item={object("value",defaultValue)} theme={text("dark",theme)}/>;