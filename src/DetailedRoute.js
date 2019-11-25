import React from 'react'
import styled from 'styled-components'
import { func } from 'prop-types'

export default function DetailedRoute() {
  return <DetailedRouteStyled>'Foo'</DetailedRouteStyled>
}

const DetailedRouteStyled = styled.div`
  width: 90px;
  height: 90px;
  background: yellow;
`
