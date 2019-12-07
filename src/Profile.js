import React from 'react'
import styled from 'styled-components'
import Navigation from './Common/Navigation'
import Spot from './Spotlist/Spot'

export default function Profile({ spots }) {
  return (
    <ProfileStyled>
      {spots
        .filter(spot => spot.isBookmarked)
        .map(spot => (
          <Spot {...spot}></Spot>
        ))}
      <Navigation></Navigation>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div``
