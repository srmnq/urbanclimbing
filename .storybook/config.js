import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'

import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from '../src/GlobalStyles'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withInfo)
addDecorator(app => (
  <>
    <GlobalStyles />
    <Router>{app()}</Router>
  </>
))
