import React from 'react'
import styled from 'styled-components'
import { withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import Map from './Map'

export default function WrappedMapContainer() {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCIuPvieSfpTsEcZonhS4x3OdIsee4IIqA`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
