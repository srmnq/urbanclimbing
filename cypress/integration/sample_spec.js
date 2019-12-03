describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Urbanclimbing')
  })
})

// describe('Home', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000')
//   })
//   it('has the correct title', () => {
//     cy.title().should('equal', 'React App')
//   })
//   it('has a navigation', () => {
//     cy.contains('Create').click()
//     cy.contains('Create!')
//   })
//   describe('Card', () => {
//     it('has a bookmark', () => {
//       cy.get('[class^=Card__]')
//         .first()
//         .find('[class^=Bookmark]')
//         .click()
//     })
//   })
// })

describe('My second Test', function() {
  it('Does not do much!', function() {
    cy.visit('http://localhost:3000/')
    cy.get('img[class=heart-icon]')
      .first()
      .click()
    cy.url().should('contain', 'foo')
  })
  //   describe('bookmarked', () => {
  //     it('changes color', () => {
  //       cy.get('[class = heart-icon')
  //         .first()
  //         .find('/static/media/heart-red.29c62a9f.svg')
  //     })
})
