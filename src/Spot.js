import React from 'react'
import styled from 'styled-components'

export default function Spot({ name, mainImage, boulderCount, sportCount }) {
  return (
    <SpotStyled>
      <img width="200px" src={mainImage}></img>
      <div>
        <h2>{name}</h2>
        <h3>
          Boulder:{boulderCount} Routen: {sportCount}
        </h3>
      </div>
    </SpotStyled>
  )
}

const SpotStyled = styled.div`
  width: 320px;
  height: 130px;
  background: #eee;
  border-radius: 4px;
  margin: 9px auto;
  display: grid;
  grid-auto-flow: column;
  h2 {
    font-size: 0.8rem;
  }
  h3 {
    font-size: 0.6rem;
  }
  img {
    width: 154px;
  }
`
