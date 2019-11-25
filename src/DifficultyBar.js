import React from 'react'
import styled from 'styled-components'

export default function DifficultyBar({ difficulty, color, routeCount }) {
  return (
    <DifficultyBarStyled color={color}>
      <span>{routeCount}</span>
      <span>{difficulty}</span>
    </DifficultyBarStyled>
  )
}
const DifficultyBarStyled = styled.div`
  position: relative;
  width: 14px;
  height: 30px;
  background: #000;
  margin-top: 30px;
  margin-right: 12px;
  background: ${props => '#' + props.color};

  span {
    position: absolute;
    text-align: center;
    bottom: -15px;
  }
  span:first-child {
    top: -15px;
  }
`
