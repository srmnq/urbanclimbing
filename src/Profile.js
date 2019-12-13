import React from 'react'
import styled from 'styled-components/macro'
import Navigation from './Common/Navigation'
import Spot from './Spotlist/Spot'
import { Link } from 'react-router-dom'
import RouteDescription from './DetailedSpot/RouteDescription'
import {
  countEasyRoute,
  countMediumRoute,
  countHardRoute,
} from './Common/CountRoutes'
import PropTypes from 'prop-types'

export default function Profile({ spots }) {
  return (
    <ProfileStyled>
      <div className="bookmarked">
        <div className="icon">
          <img alt="map-icon" src={require('./icons/heart-white.svg')} />
        </div>
        {spots
          .filter(spot => spot.isBookmarked)
          .map(spot => (
            <Link to={`/spot/${spot._id}`}>
              <Spot
                {...spot}
                boulderCount={spot.routes.boulder.length}
                sportCount={spot.routes.sport.length}
                easyRoutes={countEasyRoute(spot)}
                mediumRoutes={countMediumRoute(spot)}
                hardRoutes={countHardRoute(spot)}
                key={spot._id}
              ></Spot>
            </Link>
          ))}
      </div>
      <div className="climbed">
        <div className="icon">
          <img alt="map-icon" src={require('./icons/mountain-white.svg')} />
        </div>
        {spots.map(spot =>
          spot.routes.boulder
            .filter(route => route.isClimbed)
            .map(route => (
              <Link to={`/spot/${spot._id}`}>
                <RouteDescription
                  routeName={route.routeName}
                  description={route.description}
                  difficulty={route.difficulty}
                  isClimbed={route.isClimbed}
                ></RouteDescription>
              </Link>
            ))
        )}
      </div>
      <Navigation></Navigation>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  padding: 10px;
  a {
    text-decoration: none;
    color: #000;
    cursor: default;
  }

  .bookmarked,
  .climbed {
    width: 340px;
    display: grid;
    justify-items: center;
    align-content: center;
    background: var(--lightgreen);
    margin: 4px 0px;
    border-radius: 4px;
  }
  .icon {
    justify-self: start;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--gradientcolordark);
    margin: 5px;
  }
`

Profile.propTypes = {
  spots: PropTypes.array.isRequired,
}
