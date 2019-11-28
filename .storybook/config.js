import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'

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
    <Router>
      <Wrapper>{app()}</Wrapper>
    </Router>
  </>
))
const Wrapper = styled.div`
  width: 380px;
  height: 670px;
  border: 1px solid black;
`
