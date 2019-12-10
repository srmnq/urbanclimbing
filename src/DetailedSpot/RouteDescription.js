import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function RouteDescription({
  description,
  routeName,
  difficulty,
  toggleIsClimbed,
  isClimbed,
}) {
  return (
    <RouteDescriptionStyled>
      <div className="difficulty-circle">
        <h3>{difficulty}</h3>
      </div>
      <div>
        <h2>{routeName}</h2>
        <p>{description}</p>
      </div>
      <img
        onClick={toggleIsClimbed}
        alt="mountain-icon"
        className="mountain-icon"
        src={
          isClimbed
            ? require('../../src/icons/mountain-with-circle.svg')
            : require('../../src/icons/mountain-black.svg')
        }
      />
    </RouteDescriptionStyled>
  )
}

const RouteDescriptionStyled = styled.div`
  position: relative;
  display: flex;
  width: 340px;
  height: 90px;
  margin: 9px auto;
  padding: 10px;
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
  h2 {
    margin-bottom: 5px;
  }
  .mountain-icon {
    position: absolute;
    right: 15px;
    top: 35px;
  }
`
RouteDescription.propTypes = {
  description: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  toggleIsClimbed: PropTypes.func.isRequired,
  isClimbed: PropTypes.bool.isRequired,
}
