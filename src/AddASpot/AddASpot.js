import React, { useState } from 'react'
import styled from 'styled-components'
import Navigation from '../Common/Navigation'
import AddPhoto from './AddPhoto'

export default function AddASpot({ addASpot }) {
  const [newSpot, setNewSpot] = useState('')
  const [newRoute, setNewRoute] = useState('')
  const [secondForm, setSecondForm] = useState(false)
  const [climbAdded, setClimbAdded] = useState(false)
  const [image, setImage] = useState('')
  return (
    <AddFormStyled
      firstToggle={secondForm ? 'none' : 'grid'}
      secondToggle={secondForm ? 'grid' : 'none'}
      climbAdded={climbAdded ? 'grid' : 'none'}
    >
      <div className="container">
        <form className="create-spot_form" onSubmit={createSpot}>
          <AddPhoto image={image} setImage={setImage} />
          <div className="create-spot">
            <div className="spot">
              <label htmlFor="name">name of spot</label>

              <label htmlFor="location long">longitude of spot</label>

              <label htmlFor="location lat">latitude of spot</label>
            </div>
            <div className="spot">
              <input name="name"></input>
              <input name="locationLong" placeholder="longitude"></input>
              <input name="locationLat" placeholder="latitude"></input>
            </div>
          </div>
          <button type="submit">Create Climbingspot</button>
        </form>
        <form className="create-route_form" onSubmit={createRoute}>
          {image && (
            <img
              src={image}
              alt=""
              style={{
                width: '240px',
                height: '214px',
                objectFit: 'cover',
              }}
            />
          )}
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

          <button type="submit">Create Route</button>
          <button type="button" onClick={handleSubmit}>
            Done
          </button>
          <p>{newRoute.length} new routes created</p>
        </form>
        <div className="done_message">
          <p>added your climbingspot</p>
          <button type="button" onClick={createAnother}>
            Create another one
          </button>
        </div>
      </div>

      <Navigation></Navigation>
    </AddFormStyled>
  )

  function createSpot(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const location = [Number(data.locationLong), Number(data.locationLat)]
    setNewSpot({
      name: data.name,
      location: location,
      isBookmarked: false,
      mainImage: image,
    })
    setSecondForm(true)
    form.reset()
  }
  function createRoute(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const difficulty = `${data.difficultyNumber}${data.difficultyLetter}`
    setNewRoute([
      ...newRoute,
      {
        routeName: data.routeName,
        difficulty: difficulty,
        description: data.description,
        isClimbed: false,
      },
    ])

    form.reset()
  }
  function handleSubmit() {
    addASpot({
      ...newSpot,
      routes: { boulder: newRoute },
    })
    setNewRoute('')
    setNewSpot('')

    setClimbAdded(true)
  }

  function createAnother() {
    setClimbAdded(false)
    setSecondForm(false)
    setImage('')
  }
}

const AddFormStyled = styled.div`
  display: grid;
  grid-template-rows: auto 40px;

  height: 100vh;
  .container {
    display: grid;
    justify-items: center;
    border-radius: 8px;
    background: var(--lightgreen);
    margin: 30px;
  }
  form {
    display: grid;
    gap: 12px;
    justify-items: center;
    align-content: flex-start;
    margin-top: 12px;
  }

  input,
  button {
    border: none;
    height: 2rem;
    border-radius: 4px;
    padding: 4px;
  }
  button:active {
    transform: scale(0.9);
  }
  .create-route_form {
    display: ${props => props.secondToggle};
  }
  .create-spot_form {
    display: ${props => props.firstToggle};
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
  .done_message {
    display: ${props => props.climbAdded};
  }
`
