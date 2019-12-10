import React from 'react'
import loading from '../loading.json'
import styled from 'styled-components/macro'
import RouteDescription from './RouteDescription'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function DetailedSpot({
  toggleIsClimbed,
  spots,
  toggleBookmark,
}) {
  const pathname = window.location.pathname
  const id = pathname.substring(6)
  const index = spots.findIndex(el => el._id === id)
  const spot = spots[index] || loading[0]

  return (
    <DetailedSpotStyled>
      <Link className="map-icon" to={`/map/${spot._id}`}>
        <div>
          <img alt="map-icon" src={require('../../src/icons/map-white.svg')} />
        </div>
      </Link>
      <Link className="arrow-icon" to="/">
        <img
          alt="arrow-icon"
          src={require('../../src/icons/arrow-white.svg')}
        />
      </Link>

      <div className="heart-icon">
        <img
          alt="heart-icon"
          src={
            spot.isBookmarked
              ? require('../../src/icons/heart-red.svg')
              : require('../../src/icons/heart-white.svg')
          }
          onClick={event => toggleBookmark(event, spot)}
        />
      </div>

      <div className="image-container">
        <img
          alt="climbing spot"
          src={spot.mainImage}
          className="mainImage"
        ></img>
        {spot.routes.boulder.map((route, index) =>
          route.coordinates ? (
            <svg className="svg-path">
              <path
                className="path"
                d={`M ${route.coordinates.x1} ${route.coordinates.y1} L ${route.coordinates.x2} ${route.coordinates.y2} L${route.coordinates.x3} ${route.coordinates.y3}`}
                fill="transparent"
                // stroke="#769094"
                strokeWidth="4px"
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
            toggleIsClimbed={() => toggleIsClimbed(index, spot)}
            isClimbed={route.isClimbed}
          />
        ))}
        {spot.routes.sport.map((route, index) => (
          <RouteDescription
            key={index}
            routeName={route.routeName}
            description={route.description}
            difficulty={route.difficulty}
            toggleIsClimbed={() => toggleIsClimbed(index, spot)}
            isClimbed={route.isClimbed}
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
  .path {
    stroke: 'red';
  }
`
DetailedSpot.propTypes = {
  toggleIsClimbed: PropTypes.func.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  spots: PropTypes.array.isRequired,
}
