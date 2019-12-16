import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import listwhite from '../icons/list-white.svg'
import mapWhite from '../icons/map-white.svg'
import mountainWhite from '../icons/mountain-white.svg'
import addWhite from '../icons/add-white.svg'

export default function Navigation() {
  return (
    <NavigationStyled active={window.location.pathname}>
      <Link to="/">
        <li className="home">
          <img className="search-icon" alt="list" src={listwhite} />
        </li>
      </Link>
      <Link to="/map">
        <li className="map">
          <img className="search-icon" alt="map" src={mapWhite} />
        </li>
      </Link>
      <Link to="/Profile">
        <li className="profile">
          <img className="mountain-icon" alt="mountain" src={mountainWhite} />
        </li>
      </Link>
      <Link to="/addASpot">
        <li className="addaspot">
          <img className="search-icon" alt="add a spot" src={addWhite} />
        </li>
      </Link>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 40px;
  background: linear-gradient(
    204deg,
    rgba(19, 80, 88, 1) 67%,
    rgba(118, 144, 148, 1) 100%
  );
  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  a {
    display: flex;
    cursor: default;
    width: 100%;
    border-left: 4px solid var(--darkgreen);
  }
  .home {
    background: ${props => props.active === '/' && 'var(--darkgreen)'};
  }
  .map {
    background: ${props =>
      props.active.indexOf('map') > -1 && 'var(--darkgreen)'};
  }
  .profile {
    background: ${props => props.active === '/Profile' && 'var(--darkgreen)'};
  }
  .addaspot {
    background: ${props => props.active === '/addASpot' && 'var(--darkgreen)'};
  }
`
