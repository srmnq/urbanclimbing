import React from 'react'
import styled from 'styled-components'

export default function Maps() {
  return (
    <div>
      <iframe
        width="100px"
        height="100px"
        frameborder="0"
        // style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCIuPvieSfpTsEcZonhS4x3OdIsee4IIqA
    &q=Space+Needle,Seattle+WA"
        allowfullscreen
      ></iframe>
    </div>
  )
}
