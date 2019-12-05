import React, { useState } from 'react'
import styled from 'styled-components'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import Spot from '../Spotlist/Spot'
import {
  countEasyRoute,
  countMediumRoute,
  countHardRoute,
} from '../Common/CountRoutes'

export default function Maps({ spotData, selectedSpot }) {
  const pathname = window.location.pathname
  const id = pathname.substring(5)

  const index = spotData.findIndex(el => el._id === id)
  const spot = spotData[index]
  const [clickedSpot, setClickedSpot] = useState(spot)
  console.log('foo')

  return (
    <GoogleMap
      style={{ position: 'relative' }}
      defaultZoom={13}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
    >
      <MapStyled>
        {spotData.map(spot => (
          <Marker
            key={spot.id}
            position={{ lat: spot.location[0], lng: spot.location[1] }}
            onClick={() => {
              setClickedSpot(spot)
            }}
            icon={{ url: require('../../src/icons/mountain-with-circle.svg') }}
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
