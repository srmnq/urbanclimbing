import React from 'react'
import styled from 'styled-components'
import DifficultyBar from './DifficultyBar'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Spot({
  name,
  mainImage,
  boulderCount,
  sportCount,
  easyRoutes,
  mediumRoutes,
  hardRoutes,
  toggleBookmark,
  isBookmarked,
  ...props
}) {
  return (
    <SpotStyled {...props}>
      <img alt="climbing spot" className="mainImage" src={mainImage}></img>
      <Link className="map-icon" to={`/map`}>
        <div>
          <img alt="map-icon" src={require('../src/icons/map-black.svg')} />
        </div>
      </Link>
      <img
        alt="heart-icon"
        className="heart-icon"
        src={
          isBookmarked
            ? require('../src/icons/heart-red.svg')
            : require('../src/icons/heart-black.svg')
        }
        onClick={toggleBookmark}
      />

      <div>
        <h2>{name}</h2>
        <h3>
          Boulder: {boulderCount} - Routen: {sportCount}
        </h3>

        <div className="difficulty-bar__container">
          <DifficultyBar
            routeCount={easyRoutes}
            difficulty={'3 - 5'}
            barHeight={(easyRoutes / (boulderCount + sportCount)) * 40}
          />
          <DifficultyBar
            routeCount={mediumRoutes}
            difficulty={'6 - 7'}
            barHeight={(mediumRoutes / (boulderCount + sportCount)) * 40}
          />
          <DifficultyBar
            routeCount={hardRoutes}
            difficulty={'8 - 9'}
            barHeight={(hardRoutes / (boulderCount + sportCount)) * 40}
          />
        </div>
      </div>
    </SpotStyled>
  )
}

const SpotStyled = styled.div`
  position: relative;
  width: 320px;
  height: 140px;
  background: var(--white);
  border-radius: 4px;
  margin: 9px auto;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 140px 154px;
  gap: 10px;
  padding: 13px 7px;
  color: #000;
  box-shadow: var(--boxshadow);
  h2 {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1rem;
    margin-top: 4px;
  }

  .map-icon {
    position: absolute;
    right: 10px;
    bottom: 14px;
    width: 14px;
  }

  .heart-icon {
    position: absolute;
    right: 10px;
    top: 14px;
    width: 14px;
    cursor: pointer;
  }

  .mainImage {
    width: 140px;
    height: 114px;
    object-fit: cover;
  }
  .difficulty-bar__container {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 28px;
  }
`

Spot.propTypes = {
  boulderCount: PropTypes.number.isRequired,
  sportCount: PropTypes.number.isRequired,
  easyRoutes: PropTypes.number.isRequired,
  mediumRoutes: PropTypes.number.isRequired,
  hardRoutes: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
