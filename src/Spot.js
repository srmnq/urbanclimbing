import React from 'react'
import styled from 'styled-components'
import DifficultyBar from './DifficultyBar'

export default function Spot({
  name,
  mainImage,
  boulderCount,
  sportCount,
  easyroutes,
  mediumroutes,
  hardroutes
}) {
  return (
    <SpotStyled>
      <img className="mainImage" width="200px" src={mainImage}></img>

      <img className="map-icon" src={require('../src/icons/map-24px.svg')} />
      <img
        className="heart-icon"
        src={require('../src/icons/favorite_border-24px.svg')}
      />

      <div>
        <h2>{name}</h2>
        <h3>
          Boulder:{boulderCount} Routen: {sportCount}
        </h3>

        <div className="difficulty-bar__container">
          <DifficultyBar
            classname="test"
            color={'a0b4b7'}
            routeCount={easyroutes}
            difficulty={'3 - 5'}
          />
          <DifficultyBar
            color={'79898c'}
            routeCount={mediumroutes}
            difficulty={'6 - 7'}
          />
          <DifficultyBar
            color={'58797d'}
            routeCount={hardroutes}
            difficulty={'8 - 9'}
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
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1rem;
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
  }

  /* .difficulty-bars {
    :first-child {
      background: #a0b4b7;
    }
    :nth-child(2) {
      background: #79898c;
    }
    :last-child {
      background: #58797d;
    }
  } */
`
