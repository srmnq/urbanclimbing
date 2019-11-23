import React from 'react'
import Spot from './Spot'
import spotData from './spots.json'

export default function Home() {
  const spots = spotData
  const number = spots[0].routes.boulder.length
  console.log(number)
  return (
    <div>
      {spots.map(spot => (
        <Spot
          {...spot}
          boulderCount={spot.routes.boulder.length}
          sportCount={spot.routes.sport.length}
        />
      ))}
    </div>
  )
}
