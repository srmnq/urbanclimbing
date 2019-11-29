import React, { useState } from 'react'
import styled from 'styled-components'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import spotData from './spots.json'
import Spot from './Spot.js'

export default function Maps() {
  const [clickedSpot, setClickedSpot] = useState(spotData[0])

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
    >
      {spotData.map(spot => (
        <Marker
          key={spot.id}
          position={{ lat: spot.location[0], lng: spot.location[1] }}
          onClick={() => {
            setClickedSpot(spot)
          }}
          icon={{ url: require('../src/icons/heart-red.svg') }}
        />
      ))}
      {console.log(clickedSpot)}

      {clickedSpot && (
        <InfoWindow
          position={{
            lat: clickedSpot.location[0],
            lng: clickedSpot.location[1]
          }}
          onCloseClick={() => setClickedSpot(null)}
        >
          <div>{clickedSpot.name}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const MapStyled = styled.div`
  height: 100vh;
`
