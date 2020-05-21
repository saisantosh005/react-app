import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import NoDataView from '.';


export default {
  component: NoDataView,
  title: 'Common/NewDataView/PlainNoDataView',
  decorators: [withKnobs]
};

export const nodataView = ()=><NoDataView / >
