import React from 'react'
import styled from 'styled-components'
import DifficultyBar from './DifficultyBar'

export default function Spot({
  name,
  mainImage,
  boulderCount,
  sportCount,
  easyRoutes,
  mediumRoutes,
  hardRoutes
}) {
  return (
    <SpotStyled>
      <img className="mainImage" src={mainImage}></img>
      <img className="map-icon" src={require('../src/icons/map-24px.svg')} />
      <img
        className="heart-icon"
        src={require('../src/icons/favorite_border-24px.svg')}
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
  background: #eee;
  border-radius: 4px;
  margin: 9px auto;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 140px 154px;
  gap: 10px;
  padding: 13px 7px;
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
