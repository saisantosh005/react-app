import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView.js';

export default {
   component: LoadingView,
   title: 'Common/FailureView'
}

export const NormalLoading = () => <LoadingView />

export const NormalLoading1 = () => <LoadingView value={"hell"}/>


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
