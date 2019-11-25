import React from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

export default function DifficultyBar({ barHeight, difficulty, routeCount }) {
  return (
    <DifficultyBarStyled difficulty={difficulty} barHeight={barHeight}>
      <span className="route-count">{routeCount}</span>
      <span className="difficulty">{difficulty}</span>
    </DifficultyBarStyled>
  )
}

const DifficultyBarStyled = styled.div`
  width: 14px;
  height: ${props => props.barHeight + 'px'};
  align-self: flex-end;
  margin-right: 18px;
  background: ${props => findColor(props.difficulty)};
  position: relative;

  span {
    position: absolute;
    width: 25px;
  }

  .difficulty {
    bottom: -15px;
  }

  .route-count {
    top: -15px;
    margin-left: 4px;
  }
`
function findColor(value) {
  const mapping = {
    '3 - 5': '#a0b4b7',
    '6 - 7': '#79898c',
    '8 - 9': '#58797d'
  }
  return mapping[value]
}
