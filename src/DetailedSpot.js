import React from 'react'
import styled from 'styled-components'
import spotsData from './spots.json'
import { func } from 'prop-types'
import DetailedRoute from './DetailedRoute'

export default function DetailedSpot({ spot }) {
  return (
    <DetailedSpotStyled>
      <img className="map-icon" src={require('../src/icons/map-24px.svg')} />
      <img
        className="heart-icon"
        src={require('../src/icons/favorite_border-24px.svg')}
      />
      <img src={spot.mainImage} className="mainImage"></img>

      <h2>{spot.name}</h2>
      <DetailedRoute />
      <DetailedRoute />
    </DetailedSpotStyled>
  )
}

const DetailedSpotStyled = styled.div`
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
  }

  .heart-icon {
    position: absolute;
    right: 10px;
    top: 34px;
    width: 14px;
    fill: #fff;
  }
`
