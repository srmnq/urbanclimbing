export function getSpots() {
  return fetch('/spots').then(res => res.json())
}
export function getSpot(id) {
  return fetch('.spots/' + id).then(res => res.json())
}

export function postSpot(spot) {
  return fetch('.spots', {
    method: 'POST',
    body: JSON.stringify(spot),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function patchSpot(spot) {
  return fetch('.spots/' + spot._id, {
    method: 'PATCH',
    body: JSON.stringify(spot),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
