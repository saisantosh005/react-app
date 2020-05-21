import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView.js';

export default {
   component: LoadingView,
   title: 'Common/LoadingView/loadingView'
}

export const NormalLoading = () => <LoadingView />

export const LoadingWithColor = () => <LoadingView fill={"red"}/>


// export const withLoading = () => (
//    <LoadingView
//       onRetryClick={action('retry clicked')}
//       errorMessage={'Failed'}
//    />
// )

// export const knobs = () => (
//    <LoadingView
//       errorMessage={text('errorMessage', 'failed message')}
//       onRetryClick={action('retry clicked')}
//    />
// );

// knobs.story = {
//    decorators: [withKnobs]
// }
