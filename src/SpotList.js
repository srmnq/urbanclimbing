import React, { useState, useEffect } from 'react'
import Spot from './Spot'
import Searchbar from './Searchbar'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

export default function SpotList({ spotData, clickedSpot, toggleBookmark }) {
  const [input, setInput] = useState('')

  return (
    <SpotListStyled>
      <Searchbar onInput={event => setInput(event.target.value)} />

      {spotData
        .filter(spot => spot.name.toLowerCase().includes(input.toLowerCase()))
        .map((spot, index) => (
          <Link
            to={`/${spot.name}`}
            onClick={() => clickedSpot(index)}
            handle={spot.name}
            key={index}
          >
            <Spot
              {...spot}
              key={spot.id}
              boulderCount={spot.routes.boulder.length}
              sportCount={spot.routes.sport.length}
              easyRoutes={countEasyRoute(spot)}
              mediumRoutes={countMediumRoute(spot)}
              hardRoutes={countHardRoute(spot)}
              toggleBookmark={event => toggleBookmark(event, index)}
              isBookmarked={spot.isBookmarked}
            ></Spot>
          </Link>
        ))}
    </SpotListStyled>
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

const SpotListStyled = styled.div`
  a {
    text-decoration: none;
    cursor: default;
  }
`
