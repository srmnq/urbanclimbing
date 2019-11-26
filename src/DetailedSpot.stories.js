import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import DetailedSpot from './DetailedSpot'

export default {
  title: 'DetailedSpotStyled',
  decorators: [withKnobs]
}

export const standard = () => (
  <DetailedSpot
    routeName={text('Name', 'Planten und Bloomen')}
    description={text('Name', 'Planten und Bloomen')}
    spot={{
      name: 'Planten und Bloomen',
      mainImage:
        'https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png',
      routes: {
        boulder: [
          {
            routeName: 'Tapetwister',
            difficulty: '6b',
            isClimbed: false,
            routeImage:
              'https://res.cloudinary.com/dpsv2mxiz/image/upload/v1574519988/plantenundbloomen.png',
            description: 'nice route'
          },
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
