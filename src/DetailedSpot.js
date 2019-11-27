import React from 'react'
import styled from 'styled-components'
import RouteDescription from './RouteDescription'
import { Link } from 'react-router-dom'

export default function DetailedSpot({ spot }) {
  return (
    <DetailedSpotStyled>
      <div className="map-icon">
        <img alt="map-icon" src={require('../src/icons/map-white.svg')} />
      </div>
      <Link className="arrow-icon" to="/">
        <img alt="arrow-icon" src={require('../src/icons/arrow-white.svg')} />
      </Link>

      <div className="heart-icon">
        <img alt="heart-icon" src={require('../src/icons/heart-white.svg')} />
      </div>
      <img alt="climbing spot" src={spot.mainImage} className="mainImage"></img>
      <h2 className="spotName">{spot.name}</h2>
      <div className="routeContainer">
        {spot.routes.boulder.map((route, index) => (
          <RouteDescription
            key={index}
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
  position: relative;
  height: 100vh;
  grid-template-rows: 400px auto;
  gap: 10px;

  .mainImage {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }

  .map-icon {
    right: 10px;
    top: 14px;
  }
  .heart-icon {
    right: 10px;
    top: 54px;
  }

  .heart-icon,
  .map-icon,
  .arrow-icon {
    position: absolute;
    width: 35px;
    height: 35px;
    background: var(--gradientcolordark);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .routeContainer {
    overflow: scroll;
  }
  .arrow-icon {
    top: 10px;
    left: 10px;
  }

  .spotName {
    background: var(--gradientcolordark);
    padding: 5px;
    position: absolute;
    top: 380px;
    left: 20px;
    border-radius: 4px;
    color: var(--white);
  }
`
