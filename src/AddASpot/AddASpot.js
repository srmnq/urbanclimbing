import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from '../Common/Navigation'
import AddPhoto from './AddPhoto'
import Radio from './Radio'
import PropTypes from 'prop-types'
import Modal from './Modal'

export default function AddASpot({ addASpot }) {
  const [newSpot, setNewSpot] = useState({})
  const [newBoulderRoute, setNewBoulderRoute] = useState([])
  const [newSportRoute, setNewSportRoute] = useState([])
  const [coordinate, setCoordinate] = useState([])
  const [drawingCoordinate, setDrawingCoordinate] = useState([])
  const [secondPageForm, setSecondPageForm] = useState(false)
  const [newSpotAdded, setNewSpotAdded] = useState(false)
  const [image, setImage] = useState('')
  const [modalShown, setModalShown] = useState(false)
  const [disableDone, setDisableDone] = useState(false)

  return (
    <AddFormStyled
      firstToggle={secondPageForm ? 'none' : 'grid'}
      secondToggle={secondPageForm && !newSpotAdded ? 'grid' : 'none'}
      newSpotAdded={newSpotAdded ? 'block' : 'none'}
    >
      <div className="container">
        <form className="create-spot_form" onSubmit={createSpot}>
          <AddPhoto image={image} setImage={setImage} />

          <fieldset className="form-box">
            <label htmlFor="name">name</label>
            <input required id="name" name="name"></input>
          </fieldset>
          <fieldset className="form-box">
            <label htmlFor="location long">longitude</label>
            <input
              placeholder="53.513586"
              type="number"
              step="0.000001"
              required
              name="locationLong"
              id="location long"
            ></input>
          </fieldset>
          <fieldset className="form-box">
            <label htmlFor="location lat">latitude</label>
            <input
              placeholder="9.978837"
              step="0.000001"
              type="number"
              required
              name="locationLat"
              id="location lat"
            ></input>
          </fieldset>

          <button type="submit">Create Climbingspot</button>
        </form>
        {modalShown && <Modal closeModal={() => setModalShown(false)}></Modal>}
        <form className="create-route_form" onSubmit={createRoute}>
          {image && (
            <div className="canvas-container">
              <div
                className="canvas"
                onClick={event => getCursorPosition(event)}
              ></div>

              <svg className="drawing">
                <path
                  d={`M ${drawingCoordinate[0] || ''} ${drawingCoordinate[1] ||
                    ''} L ${drawingCoordinate[2] ||
                    ''} ${drawingCoordinate[3] ||
                    ''} L ${drawingCoordinate[4] ||
                    ''} ${drawingCoordinate[5] || ''}`}
                  fill="transparent"
                  stroke="#048058"
                  strokeWidth="4px"
                />
              </svg>
              {drawingCoordinate.length === 2 && (
                <svg className="first-circle">
                  <circle
                    cx={drawingCoordinate[0]}
                    cy={drawingCoordinate[1]}
                    r="2"
                    stroke="#048058"
                    strokeWidth="3"
                    fill="#048058"
                  />
                </svg>
              )}

              <img
                src={image}
                alt=""
                style={{
                  width: '240px',
                  height: '258px',
                  objectFit: 'cover',
                  position: 'absolute',
                }}
              />
              <button
                type="button"
                onClick={removePaint}
                className="remove-paint"
              >
                remove Paint
              </button>
            </div>
          )}

          <fieldset className="form-box">
            <label htmlFor="routeName">name of route</label>
            <input
              onInput={() => setDisableDone(true)}
              required
              name="routeName"
              id="routeName"
            ></input>
          </fieldset>
          <fieldset className="form-box">
            <label htmlFor="description">description of route</label>
            <input required name="description" id="description"></input>
          </fieldset>
          <fieldset className="form-box">
            <label>difficulty</label>
            <div>
              <div className="radio-container">
                <fieldset className="radio-box">
                  <Radio id="3" name="difficultyNumber" value="3"></Radio>
                  <label htmlFor="3">3</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="4" name="difficultyNumber" value="4"></Radio>
                  <label htmlFor="4"> 4</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="5" name="difficultyNumber" value="5"></Radio>
                  <label htmlFor="5"> 5</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="6" name="difficultyNumber" value="6"></Radio>
                  <label htmlFor="6"> 6</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="7" name="difficultyNumber" value="7"></Radio>
                  <label htmlFor="7"> 7</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="8" name="difficultyNumber" value="8"></Radio>
                  <label htmlFor="8"> 8</label>
                </fieldset>
              </div>

              <div className="radio-container">
                <fieldset className="radio-box">
                  <Radio id="a" name="difficultyLetter" value="a"></Radio>
                  <label htmlFor="a"> a</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="b" name="difficultyLetter" value="b"></Radio>
                  <label htmlFor="b"> b</label>
                </fieldset>
                <fieldset className="radio-box">
                  <Radio id="c" name="difficultyLetter" value="c"></Radio>
                  <label htmlFor="c"> c</label>
                </fieldset>
              </div>
            </div>
          </fieldset>
          <div className="form-box">
            <label htmlFor="type">type</label>

            <div className="radio-container">
              <fieldset className="radio-box">
                <Radio id="sport" name="type" value="sport"></Radio>
                <label htmlFor="sport">sport</label>
              </fieldset>
              <fieldset className="radio-box">
                <Radio id="boulder" name="type" value="boulder"></Radio>
                <label htmlFor="boulder">boulder</label>
              </fieldset>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Create Route</button>
            <button
              disabled={disableDone ? 'disable' : ''}
              type="button"
              className="done-button"
              onClick={handleSubmit}
            >
              Done
            </button>
          </div>
          <p>
            {newBoulderRoute.length + newSportRoute.length} new routes created
          </p>
        </form>
        <section className="done-message">
          <p>added your climbingspot</p>
          <button type="button" onClick={createAnother}>
            Create another one
          </button>
        </section>
      </div>

      <Navigation></Navigation>
    </AddFormStyled>
  )

  function getCursorPosition(event) {
    const rect = event.target.getBoundingClientRect()

    const dotx = event.clientX - rect.left
    const doty = event.clientY - rect.top
    const x = ((event.clientX - rect.left) / 240) * 371
    const y = ((event.clientY - rect.top) / 258) * 400
    coordinate.length < 6 && setCoordinate([...coordinate, x, y])
    setDrawingCoordinate([...drawingCoordinate, dotx, doty])
  }

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
    setSecondPageForm(true)
    setModalShown(true)
    form.reset()
  }
  function createRoute(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const difficulty = `${data.difficultyNumber}${data.difficultyLetter}`
    const newRoute = {
      routeName: data.routeName,
      difficulty: difficulty,
      description: data.description,
      isClimbed: false,
      coordinates: {
        x1: coordinate[0],
        x2: coordinate[2],
        x3: coordinate[4],
        y1: coordinate[1],
        y2: coordinate[3],
        y3: coordinate[5],
      },
    }
    if (data.type === 'boulder') {
      setNewBoulderRoute([...newBoulderRoute, newRoute])
    } else {
      setNewSportRoute([...newSportRoute, newRoute])
    }

    form.reset()
    setCoordinate([])
    setDrawingCoordinate([])
    setDisableDone(false)
  }
  function handleSubmit() {
    addASpot({
      ...newSpot,
      routes: { boulder: newBoulderRoute, sport: newSportRoute },
    })
    setNewBoulderRoute('')
    setNewSportRoute('')
    setNewSpot('')
    setNewSpotAdded(true)
  }

  function createAnother() {
    setNewSpotAdded(false)
    setSecondPageForm(false)
    setImage('')
  }

  function removePaint() {
    setDrawingCoordinate([])
    setCoordinate([])
  }
}

const AddFormStyled = styled.div`
  display: grid;
  grid-template-rows: auto 40px;
  height: 100vh;
  letter-spacing: 1px;

  .container {
    display: grid;
    position: relative;
    justify-items: center;
    border-radius: 8px;
    background: var(--white);
    box-shadow: var(--boxshadow);
    border: 4px solid var(--gradientcolordark);
    margin: 24px;
  }
  label {
    letter-spacing: 3px;
    margin-right: 4px;
  }

  input {
    border: none;
    height: 3rem;
    border-radius: 4px;
    padding: 4px;
    background: var(--mainbg);
    width: 140px;
  }
  input[type='number'] {
    appearance: textfield;
  }

  button {
    border: none;
    height: 3rem;
    border-radius: 4px;
    background: var(--gradientcolordark);
    color: var(--white);
    width: 120px;
    &:active {
      transform: scale(0.9);
    }
  }

  .create-route_form,
  .create-spot_form {
    gap: 12px;
    justify-items: center;
    align-content: flex-start;
    margin-top: 12px;
  }

  .create-route_form {
    display: ${props => props.secondToggle};
  }
  .create-spot_form {
    display: ${props => props.firstToggle};
  }

  .form-box {
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    border: none;
  }

  .radio-box {
    display: grid;
    gap: 4px;
    margin: 0;
    padding-top: 0;
    border: none;
  }

  .radio-container {
    display: flex;
    text-align: center;
    width: 140px;
    justify-content: space-around;
  }

  .canvas-container {
    position: relative;
    width: 240px;
    height: 258px;
  }
  .canvas {
    width: 240px;
    height: 258px;
    background: transparent;
    position: absolute;
    z-index: 3;
  }
  .drawing,
  .first-circle {
    position: absolute;
    width: 240px;
    height: 258px;
    z-index: 1;
  }
  .first-circle {
    z-index: 2;
  }
  .done-message {
    display: ${props => props.newSpotAdded};
    margin-top: 12px;
    p {
      margin: 4px;
    }
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .done-button:disabled {
    background: #333;
  }
  .remove-paint {
    position: absolute;
    bottom: 0;
    right: 10;
    z-index: 4;
  }
`
AddASpot.propTypes = {
  addASpot: PropTypes.func.isRequired,
}
