import React from 'react'
import styled from 'styled-components'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'

export default function WrappedMapContainer({ spotData }) {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  return (
    <WrappedMapStyled style={{ height: '100vh', width: '100vw' }}>
      <WrappedMap
        // toggleBookmark={(event, id => toggleBookmark(event, id))}
        spotData={spotData}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<WrappedMapStyled style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </WrappedMapStyled>
  )
}

const WrappedMapStyled = styled.div`
  position: relative;
`
