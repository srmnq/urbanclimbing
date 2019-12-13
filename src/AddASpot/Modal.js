import React from 'react'
import styled from 'styled-components/macro'

export default function Modal({ closeModal }) {
  return (
    <Container>
      <p>
        you can paint a new route by clicking three points on the path where the
        route should be!
      </p>
      <button onClick={closeModal}>close</button>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  position: absolute;
  background: #fff;
  padding: 10px;
  width: 200px;
  font-size: 10px;
  z-index: 4;
  top: 50px;
`
