import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import searchbarIcon from '../icons/search.svg'

export default function Searchbar({ onInput, ...props }) {
  return (
    <SearchbarStyled {...props}>
      <label htmlFor="searchbar">
        <img alt="search" className="search-icon" src={searchbarIcon} />
      </label>
      <input id="searchbar" onInput={onInput} />
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
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
Searchbar.propTypes = {
  onInput: PropTypes.func.isRequired,
}
