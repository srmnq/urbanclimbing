import React from 'react'
import { action } from '@storybook/addon-actions'
import Spot from '../Spot'

export default {
  title: 'Spot'
}

export const text = () => <Spot onClick={action('clicked')}>Hello Button</Spot>

export const emoji = () => (
  <Spot
    name="Planten und Bloomen"
    mainImage="https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png"
    boulderCount="3"
  />
)
