import React from 'react'
import { action } from '@storybook/addon-actions'
import Spot from '../Spot'
import DifficultyBar from '../DifficultyBar'

export default {
  title: 'Spot'
}

export const text = () => <Spot onClick={action('clicked')}>Hello Button</Spot>

export const emoji = () => (
  <Spot
    name="Planten und Bloomen"
    mainImage="https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png"
    boulderCount="3"
    sportCount="3"
    easyRoutes="3"
    mediumRoutes="4"
    hardRoutes="4"
  >
    <DifficultyBar routeCount="4" difficulty="3 - 5" barHeight="30" />
  </Spot>
)
