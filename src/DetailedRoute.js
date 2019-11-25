import React from 'react'
import styled from 'styled-components'
import spotsData from './spots.json'
import { func } from 'prop-types'

export default function DetailedRoute() {
  return (
    <DetailedRouteStyled>
      <p>{spotsData[0].routes.boulder[0].routeName}</p>

      <div className="difficulty-circle">
        <h3>{spotsData[0].routes.boulder[0].difficulty}</h3>
      </div>
    </DetailedRouteStyled>
  )
}

const DetailedRouteStyled = styled.div`
  width: 340px;
  height: 90px;
  margin: 9px auto;
  background: yellow;
  border-radius: 12px;
  .difficulty-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: red;
    h3 {
      color: white;
      margin-bottom: 5px;
    }
  }
`
