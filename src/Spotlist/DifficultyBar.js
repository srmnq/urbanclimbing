import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

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
    '3 - 5': 'var(--lightgreen)',
    '6 - 7': 'var(--mediumgreen)',
    '8 - 9': 'var(--darkgreen)',
  }
  return mapping[value]
}
DifficultyBar.propTypes = {
  difficulty: PropTypes.string.isRequired,
  routeCount: PropTypes.number.isRequired,
  barHeight: PropTypes.number.isRequired,
}
