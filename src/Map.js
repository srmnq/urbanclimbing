import React from 'react'
import styled from 'styled-components'
import { GoogleMap } from 'react-google-maps'

export default function Maps() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
    ></GoogleMap>
  )
}

const MapStyled = styled.div`
  height: 100vh;
`
{
  /* <iframe
        width="100%"
        height="100%"
        frameborder="0"
        // style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCIuPvieSfpTsEcZonhS4x3OdIsee4IIqA
    &q=Hamburg"
        allowfullscreen="true"
      ></iframe> */
}
