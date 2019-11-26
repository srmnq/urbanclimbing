import React from 'react'

import styled from 'styled-components'
import spotsData from './spots.json'
import PropTypes from 'prop-types'

export default function DetailedRoute({ description, routeName }) {
  return (
    <DetailedRouteStyled>
      <div className="difficulty-circle">
        <h3>{spotsData[0].routes.boulder[0].difficulty}</h3>
      </div>
      <div>
        <h2>{routeName}</h2>
        <p>{description}</p>
      </div>
    </DetailedRouteStyled>
  )
}

const DetailedRouteStyled = styled.div`
  display: flex;
  width: 340px;
  height: 90px;
  margin: 9px auto;
  padding: 12px;
  background: var(--white);
  box-shadow: var(--boxshadow);
  border-radius: 12px;
  .difficulty-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--darkgreen);
    h3 {
      color: var(--white);
      margin-bottom: 5px;
      font-size: 2rem;
    }
  }
`
DetailedRoute.propTypes = {
  description: PropTypes.string,
  routeName: PropTypes.string
}
