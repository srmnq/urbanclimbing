import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from '../Common/Navigation'
import AddPhoto from './AddPhoto'
import Radio from './Radio'
import img from '../logo192.png'
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

  return (
    <AddFormStyled
      firstToggle={secondPageForm ? 'none' : 'grid'}
      secondToggle={secondPageForm && !newSpotAdded ? 'grid' : 'none'}
      newSpotAdded={newSpotAdded ? 'block' : 'none'}
    >
      <div className="container">
        <div className="add-icon">
          <img alt="map-icon" src={require('../../src/icons/add-white.svg')} />
        </div>
        <form className="create-spot_form" onSubmit={createSpot}>
          <AddPhoto image={image} setImage={setImage} />
          <section className="section">
            <div className="spot">
              <label htmlFor="name">name</label>
              <label htmlFor="location long">longitude</label>
              <label htmlFor="location lat">latitude</label>
            </div>
            <div className="spot">
              <input required name="name"></input>
              <input
                placeholder="53.513586"
                type="number"
                step="0.000001"
                required
                name="locationLong"
              ></input>
              <input
                placeholder="9.978837"
                step="0.000001"
                type="number"
                required
                name="locationLat"
              ></input>
            </div>
          </section>

          <button type="submit">Create Climbingspot</button>
        </form>
        {modalShown && <Modal closeModal={() => setModalShown(false)}></Modal>}
        <form className="create-route_form" onSubmit={createRoute}>
          {image && (
            <div className="canvas-container">
              {/* <canvas className="canvas"></canvas> */}
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
                  stroke="#135058"
                  strokeWidth="4px"
                />
              </svg>
              {drawingCoordinate.length === 2 && (
                <svg className="first-circle">
                  <circle
                    cx={drawingCoordinate[0]}
                    cy={drawingCoordinate[1]}
                    r="2"
                    stroke="#135058"
                    stroke-width="3"
                    fill="#135058"
                  />
                </svg>
              )}

              <img
                className="canvas-image"
                src={image}
                alt=""
                style={{
                  width: '240px',
                  height: '258px',
                  objectFit: 'cover',
                  position: 'absolute',
                }}
              />
            </div>
          )}
          <section className="section">
            <div className="route">
              <label htmlFor="routeName">name of route</label>
              <label htmlFor="description">description of route</label>
              <label htmlFor="difficulty">difficulty</label>
              <label htmlFor="type">type</label>
            </div>
            <div className="route">
              <input required name="routeName"></input>
              <input required name="description"></input>
              <div>
                <div className="difficulty">
                  <label htmlFor="3">
                    <Radio name="difficultyNumber" value="3"></Radio>
                    <p>3</p>
                  </label>
                  <label htmlFor="4">
                    <Radio name="difficultyNumber" value="4"></Radio>
                    <p>4</p>
                  </label>
                  <label htmlFor="5">
                    <Radio name="difficultyNumber" value="5"></Radio>
                    <p>5</p>
                  </label>
                  <label htmlFor="6">
                    <Radio name="difficultyNumber" value="6"></Radio>
                    <p>6</p>
                  </label>
                  <label htmlFor="7">
                    <Radio name="difficultyNumber" value="7"></Radio>
                    <p>7</p>
                  </label>
                  <label htmlFor="8">
                    <Radio name="difficultyNumber" value="8"></Radio>
                    <p>8</p>
                  </label>
                </div>

                <div className="difficulty">
                  <label htmlFor="a">
                    <Radio name="difficultyLetter" value="a"></Radio>
                    <p>a</p>
                  </label>
                  <label htmlFor="b">
                    <Radio name="difficultyLetter" value="b"></Radio>
                    <p>b</p>
                  </label>
                  <label htmlFor="c">
                    <Radio name="difficultyLetter" value="c"></Radio>
                    <p>c</p>
                  </label>
                </div>
              </div>
              <div className="type-container">
                <div className="type">
                  <Radio name="type" value="sport"></Radio>
                  <Radio name="type" value="boulder"></Radio>
                </div>
                <div className="type">
                  <label htmlFor="sport">
                    <p>sportclimbing</p>
                  </label>
                  <label htmlFor="boulder">
                    <p>boulder</p>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <div className="button-container">
            <button type="submit">Create Route</button>
            <button type="button" onClick={handleSubmit}>
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
    if (data.type === 'boulder') {
      setNewBoulderRoute([
        ...newBoulderRoute,
        {
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
        },
      ])
    } else {
      setNewSportRoute([
        ...newSportRoute,
        {
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
        },
      ])
    }

    form.reset()
    setCoordinate([])
    setDrawingCoordinate([])
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
    p {
      padding-top: 4px;
    }
  }

  input,
  button {
    border: none;
    height: 3rem;
    border-radius: 4px;
  }

  input {
    padding: 4px;
    background: var(--mainbg);
    width: 140px;
  }

  input[type='number'] {
    appearance: textfield;
  }
  button {
    background: var(--gradientcolordark);
    color: var(--white);
    width: 150px;
  }
  button:active {
    transform: scale(0.9);
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

  .section {
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
  .difficulty {
    display: flex;
    text-align: center;
  }

  .type-container {
    display: grid;
  }
  .type {
    display: flex;
    justify-content: space-around;
  }
  .done-message {
    display: ${props => props.newSpotAdded};
    margin-top: 12px;
    p {
      margin: 4px;
    }
  }
  .add-icon {
    position: absolute;
    left: 5px;
    top: 5px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: var(--gradientcolordark);
    display: flex;
    justify-content: center;
    align-items: center;
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

  .div {
    position: absolute;
    width: 240px;
    height: 258px;
    background: #000;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
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
`
AddASpot.propTypes = {
  addASpot: PropTypes.func.isRequired,
}
