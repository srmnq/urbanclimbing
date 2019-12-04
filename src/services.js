export function getSpots() {
  return fetch('/spots').then(res => res.json())
}

export function postSpot(spot) {
  return fetch('/spots', {
    method: 'POST',
    body: JSON.stringify(spot),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
export function patchBookmark(spot) {
  spot = { ...spot, id: spot._id, isBookmarked: !spot.isBookmarked }
  return fetch('/spots/' + spot.id, {
    method: 'PATCH',
    body: JSON.stringify(spot),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function patchSpot(spot) {
  return fetch('/spots/' + spot._id, {
    method: 'PATCH',
    body: JSON.stringify(spot),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteSpot(id) {
  return fetch('/spots/' + id, {
    method: 'DELETE'
  }).then(res => res.json())
}
