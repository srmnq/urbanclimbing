import React from 'react'
import Spot from './Spot'
import spotData from './spots.json'

export default function Home() {
  const spots = spotData

  return (
    <div>
      {spots.map(spot => (
        <Spot
          {...spot}
          key={spot.id}
          boulderCount={spot.routes.boulder.length}
          sportCount={spot.routes.sport.length}
          easyroutes={
            spot.routes.boulder.filter(
              boulder => boulder.difficulty === '5a' || '5b' || '5c'
            ).length
          }
          mediumroutes={
            spot.routes.boulder.filter(
              boulder => boulder.difficulty === '6a' || '6b' || '6c'
            ).length
          }
          hardroutes={
            spot.routes.boulder.filter(
              boulder => boulder.difficulty === '7a' || '7b' || '7c'
            ).length
          }
        />
      ))}
    </div>
  )
  // function count() {
  //   return spots.routes.boulder.map(boulder => console.log(boulder.difficulty))
  // }
}
