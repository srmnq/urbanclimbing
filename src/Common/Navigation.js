import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <NavigationStyled>
      <Link to="/">
        <li>
          <img
            className="search-icon"
            alt="list"
            src={require("../../src/icons/list-white.svg")}
          />
        </li>
      </Link>
      <Link to="/map">
        <li>
          <img
            className="search-icon"
            alt="map"
            src={require("../../src/icons/map-white.svg")}
          />
        </li>
      </Link>
      <Link to="/">
        <li>
          <img
            className="mountain-icon"
            alt="mountain"
            src={require("../../src/icons/mountain-white.svg")}
          />
        </li>
      </Link>
      <Link to="/">
        <li>
          <img
            className="search-icon"
            alt="add a spot"
            src={require("../../src/icons/add-white.svg")}
          />
        </li>
      </Link>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  width: 100%;
  bottom: 0;
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
`
