import React, { useState, useEffect } from 'react'
import Spot from './Spot'
import Searchbar from './Searchbar'
import styled from 'styled-components'
import { countEasyRoute, countMediumRoute, countHardRoute } from './CountRoutes'

import { Link } from 'react-router-dom'

export default function SpotList({
  spotData,
  clickedSpot,
  toggleBookmark,
  setLocation
}) {
  const [input, setInput] = useState('')
  const [fuzzySearchResult, setFuzzySearchResult] = useState(spotData)

  useEffect(() => {
    setFuzzySearchResult(spotData.filter(item => fuzzy_match(item.name, input)))
  }, [input, spotData])

  return (
    <SpotListStyled>
      <Searchbar onInput={event => setInput(event.target.value)} />
      {fuzzySearchResult.map((spot, index) => (
        <Link
          to={`/${spot.name}`}
          onClick={() => clickedSpot(spot._id)}
          key={index}
        >
          <Spot
            {...spot}
            key={spot._id}
            boulderCount={spot.routes.boulder.length}
            sportCount={spot.routes.sport.length}
            easyRoutes={countEasyRoute(spot)}
            mediumRoutes={countMediumRoute(spot)}
            hardRoutes={countHardRoute(spot)}
            toggleBookmark={event => toggleBookmark(event, spot)}
            isBookmarked={spot.isBookmarked}
            setLocation={() => setLocation(spot)}
          ></Spot>
        </Link>
      ))}
    </SpotListStyled>
  )

  function fuzzy_match(spotname, input) {
    let search = input.replace(/\ /g, '').toLowerCase()
    let name = spotname.replace(/\ /g, '').toLowerCase()
    const tokens = name.split('')
    let search_position = 0

    tokens.forEach(i => {
      if (i === search[search_position]) {
        search_position += 1
        if (search_position >= search.length) {
          return false
        }
      }
    })

    if (search_position != search.length) {
      return ''
    }
    return tokens.join('')
  }
}

const SpotListStyled = styled.div`
  a {
    text-decoration: none;
    cursor: default;
  }
`
