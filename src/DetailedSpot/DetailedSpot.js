import React, { useState } from 'react'
import loading from '../loading.json'
import styled from 'styled-components/macro'
import RouteDescription from './RouteDescription'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import mapWhite from '../icons/map-white.svg'
import arrowWhite from '../icons/arrow-white.svg'
import heartRed from '../icons/heart-red.svg'
import heartWhite from '../icons/heart-white.svg'

export default function DetailedSpot({
  toggleIsClimbed,
  spots,
  toggleBookmark,
}) {
  const location = useLocation()
  const pathname = location.pathname
  const id = pathname.substring(6)
  const index = spots.findIndex(el => el._id === id)
  const spot = spots[index] || loading[0]
  const [highlighted, setHighlighted] = useState('')

  return (
    <DetailedSpotStyled>
      <Link className="map-icon" to={`/map/${spot._id}`}>
        <div>
          <img alt="map-icon" src={mapWhite} />
        </div>
      </Link>
      <Link className="arrow-icon" to="/">
        <img alt="arrow-icon" src={arrowWhite} />
      </Link>

      <div className="heart-icon">
        <img
          alt="heart-icon"
          src={spot.isBookmarked ? heartRed : heartWhite}
          onClick={event => toggleBookmark(event, spot)}
        />
      </div>

      <div className="image-container">
        <img
          alt="climbing spot"
          src={spot.mainImage}
          className="mainImage"
        ></img>
        {spot.routes.boulder.map(route =>
          route.coordinates ? (
            <svg className="svg-path">
              <path
                className="path"
                d={`M ${route.coordinates.x1} ${route.coordinates.y1} L ${route.coordinates.x2} ${route.coordinates.y2} L${route.coordinates.x3} ${route.coordinates.y3}`}
                fill="transparent"
                stroke={route.routeName === highlighted ? '#048058' : '#A0B4B7'}
                strokeWidth="6px"
              />
            </svg>
          ) : (
            ''
          )
        )}
        {spot.routes.sport.map(route =>
          route.coordinates ? (
            <svg className="svg-path">
              <path
                className="path"
                d={`M ${route.coordinates.x1} ${route.coordinates.y1} L ${route.coordinates.x2} ${route.coordinates.y2} L${route.coordinates.x3} ${route.coordinates.y3}`}
                fill="transparent"
                stroke={route.routeName === highlighted ? '#048058' : '#A0B4B7'}
                strokeWidth="6px"
              />
            </svg>
          ) : (
            ''
          )
        )}
      </div>

      <h2 className="spotName">{spot.name}</h2>
      <div className="routeContainer">
        {spot.routes.boulder.map((route, index) => (
          <RouteDescription
            key={index}
            routeName={route.routeName}
            description={route.description}
            difficulty={route.difficulty}
            toggleIsClimbed={() => toggleIsClimbed(index, 'boulder', spot)}
            isClimbed={route.isClimbed}
            changeColor={() => setHighlighted(route.routeName)}
          />
        ))}
        {spot.routes.sport.map((route, index) => (
          <RouteDescription
            key={index}
            routeName={route.routeName}
            description={route.description}
            difficulty={route.difficulty}
            toggleIsClimbed={() => toggleIsClimbed(index, 'sport', spot)}
            isClimbed={route.isClimbed}
            changeColor={() => setHighlighted(route.routeName)}
          />
        ))}
      </div>
    </DetailedSpotStyled>
  )
}

const DetailedSpotStyled = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  height: 100vh;
  grid-template-rows: 400px auto;
  gap: 10px;

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
    z-index: 2;
  }
  .map-icon {
    right: 10px;
    top: 14px;
  }
  .heart-icon {
    right: 10px;
    top: 54px;
  }

  .arrow-icon {
    top: 10px;
    left: 10px;
  }
  .mainImage {
    width: 100%;
    width: 371px;
    height: 400px;
    object-fit: cover;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
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
  .routeContainer {
    overflow: scroll;
  }
  .image-container {
    position: relative;
  }

  .svg-path {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
  }
`
DetailedSpot.propTypes = {
  toggleIsClimbed: PropTypes.func.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  spots: PropTypes.array.isRequired,
}
