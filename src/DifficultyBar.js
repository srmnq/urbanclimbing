import React from 'react'
import styled from 'styled-components'

export default function DifficultyBar({
  barHeight,
  difficulty,
  color,
  routeCount
}) {
  return (
    <DifficultyBarStyled barHeight={barHeight} color={color}>
      <span className="routecount">{routeCount}</span>
      <span className="difficulty">{difficulty}</span>
    </DifficultyBarStyled>
  )
}
const DifficultyBarStyled = styled.div`
  width: 14px;
  height: ${props => props.barHeight + 'px'};
  background: #000;
  align-self: flex-end;
  margin-right: 18px;
  background: ${props => '#' + props.color};
  position: relative;

  span {
    position: absolute;
    width: 25px;
  }

  .difficulty {
    bottom: -15px;
  }

  .routecount {
    top: -15px;
    margin-left: 4px;
  }
`
