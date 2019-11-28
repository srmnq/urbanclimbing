import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Spot from './Spot'

export default {
  title: 'Spot',
  decorators: [withKnobs]
}

export const standard = () => (
  <Spot
    name={text('Name', 'Planten und Bloomen')}
    mainImage="https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png"
    boulderCount={number('boulderCount', 4)}
    sportCount={number('sportCount', 8)}
    easyRoutes={number('easyRoutes', 2)}
    mediumRoutes={number('mediumRoutes', 6)}
    hardRoutes={number('hardRoutes', 4)}
  ></Spot>
)
