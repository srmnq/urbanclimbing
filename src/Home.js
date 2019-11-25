import React from 'react'
import Spot from './Spot'
import spotData from './spots.json'

export default function Home() {
  return (
    <div>
      {spotData.map(spot => (
        <Spot
          {...spot}
          key={spot.id}
          boulderCount={spot.routes.boulder.length}
          sportCount={spot.routes.sport.length}
          easyRoutes={countEasyRoute(spot)}
          mediumRoutes={countMediumRoute(spot)}
          hardRoutes={countHardRoute(spot)}
        />
      ))}
    </div>
  )

  function countEasyRoute(spot) {
    return (
      spot.routes.boulder.filter(
        boulder =>
          boulder.difficulty.includes('3') ||
          boulder.difficulty.includes('4') ||
          boulder.difficulty.includes('5')
      ).length +
      spot.routes.sport.filter(
        sportRoute =>
          sportRoute.difficulty.includes('3') ||
          sportRoute.difficulty.includes('4') ||
          sportRoute.difficulty.includes('5')
      ).length
    )
  }

  function countMediumRoute(spot) {
    return (
      spot.routes.boulder.filter(
        boulder =>
          boulder.difficulty.includes('6') || boulder.difficulty.includes('7')
      ).length +
      spot.routes.sport.filter(
        sportRoute =>
          sportRoute.difficulty.includes('6') ||
          sportRoute.difficulty.includes('7')
      ).length
    )
  }

  function countHardRoute(spot) {
    return (
      spot.routes.boulder.filter(
        boulder =>
          boulder.difficulty.includes('8') || boulder.difficulty.includes('9')
      ).length +
      spot.routes.sport.filter(
        sportRoute =>
          sportRoute.difficulty.includes('8') ||
          sportRoute.difficulty.includes('9')
      ).length
    )
  }
}
