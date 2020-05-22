import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import {Button} from './Button.js';


export default {
  component: Button,
  title: 'ECommerceButton/Button',
  decorators: [withKnobs]
};

export const normalSizeButton = ()=><Button>hello</Button>;

export const buttonWithValueProps = () => <Button valueIt={text("XS","XS")}>clear</Button>;


