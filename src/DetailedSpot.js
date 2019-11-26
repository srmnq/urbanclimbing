import React from 'react'
import styled from 'styled-components'
import spotsData from './spots.json'
import { func } from 'prop-types'
import DetailedRoute from './DetailedRoute'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function DetailedSpot({ spot }) {
  return (
    <DetailedSpotStyled>
      <img className="map-icon" src={require('../src/icons/map-white.svg')} />
      <Link className="arrow-icon" to="/">
        <img src={require('../src/icons/arrow-white.svg')} />
      </Link>

      <img
        className="heart-icon-white"
        src={require('../src/icons/heart-white.svg')}
      />
      <img src={spot.mainImage} className="mainImage"></img>
      <h2>{spot.name}</h2>
      <div className="routeContainer">
        {spot.routes.boulder.map(route => (
          <DetailedRoute
            routeName={route.routeName}
            description={route.description}
          />
        ))}
      </div>
    </DetailedSpotStyled>
  )
}

const DetailedSpotStyled = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 400px auto;
  .mainImage {
    width: 100vw;
    height: 400px;
    object-fit: cover;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  .map-icon {
    position: absolute;
    right: 10px;
    top: 14px;
    width: 14px;
    z-index: 2;
  }

  .heart-icon-white {
    position: absolute;
    right: 10px;
    top: 54px;
    width: 14px;
    fill: #fff;
    z-index: 2;
  }
  .routeContainer {
    overflow: scroll;
  }
  .arrow-icon {
    position: absolute;
    top: 30vh;
    left: 10px;
    z-index: 2;
  }
`
