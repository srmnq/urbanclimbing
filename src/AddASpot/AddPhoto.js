import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import addPhoto from '../icons//add-photo.svg'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function AddPhoto({ image, setImage }) {
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  return (
    <div>
      {image ? (
        <img
          src={image}
          alt=""
          style={{ width: '240px', height: '214px', objectFit: 'cover' }}
        />
      ) : (
        <>
          <label htmlFor="file">
            <img
              alt="addphoto"
              src={addPhoto}
              style={{ height: '50px', width: '50px' }}
            ></img>
          </label>
          <input
            style={{ background: '#eee', display: 'none' }}
            type="file"
            name="file"
            id="file"
            onChange={upload}
          />
        </>
      )}
    </div>
  )
}
AddPhoto.propTypes = {
  image: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
}
