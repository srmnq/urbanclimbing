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
  width: 350px;
  height: 150px;
  background: #eee;
  border-radius: 4px;
  margin: 20px auto;
  display: flex;
`
