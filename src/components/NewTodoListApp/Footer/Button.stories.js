import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import {Button} from './Button.js';


export default {
  component: Button,
  title: 'Todolist/Button',
  decorators: [withKnobs]
};

export const normalButton = ()=><Button nameIt={"Normal View"}></Button>;

export const AllButton = () => <Button nameIt={text("All","All")}></Button>;

export const ActiveButton = ()=><Button nameIt={text("Active","Active")}></Button>;

export const CompleteButton = ()=><Button nameIt={text("Completed","Completed")}></Button>;
