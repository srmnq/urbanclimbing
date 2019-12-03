export function getCards() {
  return fetch('/spots').then(res => res.json())
}
//   export function postCard(card) {
//     return fetch('/cards', {
//       method: 'POST',
//       body: JSON.stringify(card),
//       headers: {
//         'content-type': 'application/json',
//       },
//     }).then(res => res.json())
//   }
export function patchBookmark(card) {
  card = { id: card.id, isBookmarked: !card.isBookmarked }
  return fetch('/cards/' + card.id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

//   export function patchCard(card) {
//     return fetch('/cards/' + card.id, {
//       method: 'PATCH',
//       body: JSON.stringify(card),
//       headers: {
//         'content-type': 'application/json',
//       },
//     }).then(res => res.json())
//   }

//   export function deleteCard(id) {
//     return fetch('/cards/' + id, {
//       method: 'DELETE',
//     }).then(res => res.json())
//   }
