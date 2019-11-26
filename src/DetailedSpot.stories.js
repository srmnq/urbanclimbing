import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import DetailedSpot from './DetailedSpot'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'DetailedSpot',
  decorators: [withKnobs]
}

export const standard = () => (
  <DetailedSpot
    routeName={text('Name', 'Planten und Bloomen')}
    description={text('Name', 'Planten und Bloomen')}
    linkTo="#"
    spot={{
      name: 'Planten und Bloomen',
      routes: {
        boulder: [
          {
            routeName: 'Tapetwister',
            difficulty: '6b',
            isClimbed: false,
            routeImage:
              'https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png',
            description: 'nice route'
          }
        ]
      }
    }}
  />
)
