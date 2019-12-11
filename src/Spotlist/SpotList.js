import React, { useState, useEffect } from 'react'
import Spot from './Spot'
import Searchbar from '../Common/Searchbar'
import Navigation from '../Common/Navigation'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {
  countEasyRoute,
  countMediumRoute,
  countHardRoute,
} from '../Common/CountRoutes'

import { Link } from 'react-router-dom'

export default function SpotList({ spotData, toggleBookmark }) {
  const [input, setInput] = useState('')
  const [fuzzySearchResult, setFuzzySearchResult] = useState(spotData)

  useEffect(() => {
    setFuzzySearchResult(spotData.filter(item => fuzzy_match(item.name, input)))
  }, [input, spotData])

  return (
    <SpotListStyled>
      <div>
        <Searchbar onInput={event => setInput(event.target.value)} />
        {fuzzySearchResult.map((spot, index) => (
          <Link to={`/spot/${spot._id}`} key={index}>
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
              id={spot._id}
            ></Spot>
          </Link>
        ))}
      </div>

      <Navigation></Navigation>
    </SpotListStyled>
  )

  function fuzzy_match(spotname, input) {
    let search = input.replace(/ /g, '').toLowerCase()
    let name = spotname.replace(/ /g, '').toLowerCase()
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

    if (search_position !== search.length) {
      return ''
    }
    return tokens.join('')
  }
}

const SpotListStyled = styled.div`
  display: grid;
  grid-template-rows: auto 40px;
  a {
    text-decoration: none;
    cursor: default;
  }
`
SpotList.propTypes = {
  spotData: PropTypes.array.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
}
