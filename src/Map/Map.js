import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'
import Spot from '../Spotlist/Spot'
import PropTypes from 'prop-types'
import {
  countEasyRoute,
  countMediumRoute,
  countHardRoute,
} from '../Common/CountRoutes'
import heartRed from '../icons/heart-red.svg'
import mountainCircle from '../icons/mountain-with-circle.svg'

export default function Maps({ spotData }) {
  const pathname = window.location.pathname
  const id = pathname.substring(5)

  const index = spotData.findIndex(el => el._id === id)
  const spot = spotData[index]
  const [clickedSpot, setClickedSpot] = useState(spot)

  return (
    <GoogleMap
      style={{ position: 'relative' }}
      defaultZoom={13}
      defaultCenter={{
        lat: clickedSpot ? clickedSpot.location[0] : 53.556268,
        lng: clickedSpot ? clickedSpot.location[1] : 9.979049,
      }}
    >
      <MapStyled>
        {spotData.map(spot => (
          <Marker
            key={spot._id}
            position={{ lat: spot.location[0], lng: spot.location[1] }}
            onClick={() => {
              setClickedSpot(spot)
              window.history.pushState(
                { id: spot._id },
                'id',
                `${window.location.protocol}//${window.location.host}/map/${spot._id}`
              )
            }}
            icon={{
              url: spot.isBookmarked ? heartRed : mountainCircle,
            }}
          />
        ))}

        {clickedSpot && (
          <InfoWindow
            position={{
              lat: clickedSpot.location[0],
              lng: clickedSpot.location[1],
            }}
            onCloseClick={() => setClickedSpot(null)}
          >
            <div>{clickedSpot.name}</div>
          </InfoWindow>
        )}
        {clickedSpot && (
          <Link to={`/spot/${clickedSpot._id}`}>
            <MapSpot
              name={clickedSpot.name}
              mainImage={clickedSpot.mainImage}
              boulderCount={clickedSpot.routes.boulder.length}
              sportCount={clickedSpot.routes.sport.length}
              easyRoutes={countEasyRoute(clickedSpot)}
              mediumRoutes={countMediumRoute(clickedSpot)}
              hardRoutes={countHardRoute(clickedSpot)}
              isBookmarked={clickedSpot.isBookmarked}
            >
              <div>{clickedSpot.name}</div>
            </MapSpot>
          </Link>
        )}
      </MapStyled>
    </GoogleMap>
  )
}

const MapStyled = styled.div`
  h1 {
    color: red;
    position: absolute;
    bottom: 400px;
    z-index: 10;
  }
`
const MapSpot = styled(Spot)`
  position: absolute;
  border: 4px solid var(--gradientcolordark);
  bottom: 50px;
  left: 10px;
`
Maps.propTypes = {
  spotData: PropTypes.array.isRequired,
}
