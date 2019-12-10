import React from 'react'
import styled from 'styled-components/macro'
import Navigation from './Common/Navigation'
import Spot from './Spotlist/Spot'
import PropTypes from 'prop-types'

export default function Profile({ spots }) {
  return (
    <ProfileStyled>
      {spots
        .filter(spot => spot.isBookmarked)
        .map(spot => (
          <Spot {...spot} key={spot._id}></Spot>
        ))}
      <Navigation></Navigation>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div``

Profile.propTypes = {
  spots: PropTypes.array.isRequired,
}
