import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import SpotList from './SpotList'
import spotData from '../spots.json'

export default {
  title: 'SpotList',
  decorators: [withKnobs],
}

export const standard = () => (
  <SpotList spotData={spotData} clickedSpot={null} toggleBookmark={null} />
)
