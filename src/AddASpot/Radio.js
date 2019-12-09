import React from 'react'
import styled from 'styled-components/macro'

export default function Radio({ name, value }) {
  return (
    <Container>
      <input
        value={value}
        name={name}
        className="customRadio"
        type="radio"
        required
      ></input>
      <span className="checkmark"></span>
    </Container>
  )
}

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 10px;
  text-align: left;

  user-select: none;
  .customRadio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #ccc;
    border-radius: 50%;
  }
  .customRadio:checked ~ .checkmark {
    background-color: var(--gradientcolordark);
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .customRadio:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gradientcolordark);
  }
`
