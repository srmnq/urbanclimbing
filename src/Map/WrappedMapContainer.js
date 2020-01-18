import React from 'react'
import styled from 'styled-components/macro'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'
import Navigation from '../Common/Navigation'
import PropTypes from 'prop-types'

export default function WrappedMapContainer({ spotData }) {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  return (
    <WrappedMapStyled style={{ height: '100vh', width: '100vw' }}>
      <WrappedMap
        spotData={spotData}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<WrappedMapStyled style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Navigation></Navigation>
    </WrappedMapStyled>
  )
}

const WrappedMapStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 40px;
`

WrappedMapContainer.propTypes = {
  spotData: PropTypes.array.isRequired,
}
