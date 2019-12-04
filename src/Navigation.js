import React from 'react'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <NavigationStyled>
      <div>
        <img
          className="search-icon"
          alt="list"
          src={require('../src/icons/list-white.svg')}
        />
      </div>
      <div>
        <img
          className="search-icon"
          alt="map"
          src={require('../src/icons/map-white.svg')}
        />
      </div>
      <div>
        <img
          className="mountain-icon"
          alt="mountain"
          src={require('../src/icons/mountain-white.svg')}
        />
      </div>
      <div>
        <img
          className="search-icon"
          alt="profile"
          src={require('../src/icons/add-white.svg')}
        />
      </div>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-around;
  position: sticky;
  width: 100%;
  bottom: 0;
  padding: 4px;
  height: 44px;
  background: linear-gradient(
    204deg,
    rgba(19, 80, 88, 1) 67%,
    rgba(118, 144, 148, 1) 100%
  );
  div {
    display: flex;
  }
`
