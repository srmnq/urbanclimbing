import React from 'react'
import styled from 'styled-components'

export default function Searchbar({ onInput }) {
  return (
    <SearchbarStyled>
      <img
        alt="search"
        className="search-icon"
        src={require('../../src/icons/search.svg')}
      />
      <input onInput={onInput} />
    </SearchbarStyled>
  )
}

const SearchbarStyled = styled.div`
  display: flex;
  padding: 4px;
  width: 320px;
  height: 4rem;
  margin: 12px auto;
  border: 4px solid var(--gradientcolordark);
  border-radius: 12px;
  background: var(--white);

  input {
    background: var(--white);
    border: none;
    border-radius: 12px;
    width: 100%;
    margin-left: 4px;
  }
`
