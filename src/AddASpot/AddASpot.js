import React from 'react'
import styled from 'styled-components'
import Navigation from '../Common/Navigation'

export default function AddASpot({ addASpot }) {
  return (
    <AddFormStyled>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file"></input>
        <div className="create-spot">
          <div className="spot">
            <label htmlFor="name">name of spot</label>

            <label htmlFor="location long">longitude of spot</label>

            <label htmlFor="location lat">latidude of spot</label>
          </div>
          <div className="spot">
            <input name="name"></input>
            <input name="locationLong" placeholder="longitude"></input>
            <input name="locationLat" placeholder="latitude"></input>
          </div>
        </div>
        <button type="button">Create Climbingspot</button>
        <p>Routes</p>
        <div className="create-route">
          <div className="route">
            <label htmlFor="routeName">name of route</label>
            <label htmlFor="description">description of route</label>
            <label htmlFor="difficulty">difficulty</label>
            <label htmlFor="type">type</label>
          </div>
          <div className="route">
            <input name="routeName"></input>
            <input name="description"></input>
            <div className="radio">
              <label htmlFor="3">3</label>
              <input type="radio" name="difficultyNumber" value="3"></input>
              <label htmlFor="4">4</label>
              <input type="radio" name="difficultyNumber" value="4"></input>
              <label htmlFor="5">5</label>
              <input type="radio" name="difficultyNumber" value="5"></input>
              <label htmlFor="6">6</label>
              <input type="radio" name="difficultyNumber" value="6"></input>
              <label htmlFor="7">7</label>
              <input type="radio" name="difficultyNumber" value="7"></input>
              <label htmlFor="8">8</label>
              <input type="radio" name="difficultyNumber" value="8"></input>

              <label htmlFor="a">a</label>
              <input type="radio" name="difficultyLetter" value="a"></input>
              <label htmlFor="b">b</label>
              <input type="radio" name="difficultyLetter" value="b"></input>
              <label htmlFor="c">c</label>
              <input type="radio" name="difficultyLetter" value="c"></input>
            </div>
            <div className="type">
              <div className="type_label">
                <label htmlFor="sport">sportclimbing-route</label>
                <label htmlFor="boulder">boulder</label>
              </div>

              <div className="type_input">
                <input type="radio" name="type" value="sport"></input>
                <input type="radio" name="type" value="boulder"></input>
              </div>
            </div>
          </div>
        </div>

        <button type="button">Create Route</button>
        <button type="submit">Done</button>
      </form>
      <Navigation></Navigation>
    </AddFormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const difficulty = `${data.difficultyNumber}${data.difficultyLetter}`
    const location = [Number(data.locationLong), Number(data.locationLat)]
    form.reset()

    addASpot({
      name: data.name,

      routes: {
        boulder: [
          {
            routeName: data.routeName,
            difficulty: difficulty,
            description: data.description,
            isClimbed: false,
          },
        ],
      },
      location: location,
      isBookmarked: false,
    })
  }
}

const AddFormStyled = styled.div`
  display: grid;
  grid-template-rows: auto 40px;

  height: 100vh;
  form {
    display: grid;
    gap: 12px;
    justify-items: center;
    align-content: center;
    border-radius: 8px;
    background: var(--lightgreen);
    margin: 30px;
  }

  input,
  button {
    border: none;
    height: 2rem;
    border-radius: 4px;
    padding: 4px;
  }

  .create-spot,
  .create-route {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    margin: 0px 12px;
  }

  .spot {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
  }
  .route {
    display: grid;
    grid-template-rows: 1fr 1fr 2fr 2fr;
    gap: 8px;
  }
  .radio {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .radio > * {
    margin: 2px;
  }
  .radio > input {
    margin-right: 8px;
    height: 3rem;
  }
  .type {
    display: grid;
  }
  .type > div {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    text-align: center;
  }
`
