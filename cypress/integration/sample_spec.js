describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('http://localhost:3000/')
    cy.title().should('include', 'Urbanclimbing')
  })
})

describe('Link Test', function() {
  it('Link to Detailed Site', function() {
    cy.visit('http://localhost:3000/')
    cy.get('.mainImage')
      .first()
      .click()
    cy.url().should('contain', 'spot')
  })
})

describe('Map Test', function() {
  it('Link to Map', function() {
    cy.visit('http://localhost:3000/spot/5de509f1ceab0c4dc9919458')
    cy.get('.map-icon')
      .first()
      .click()
    cy.url().should('contain', 'map')
  })
})

describe('Link from Map back Test', function() {
  it('Link from Map to Detailed Site', function() {
    cy.visit('http://localhost:3000/map/5de509f1ceab0c4dc9919458')
    cy.get('.Spot__SpotStyled-sc-5mmwu-0 ')
      .first()
      .click()
    cy.url().should('contain', 'spot')
  })
})

describe('Bookmark spotlist', function() {
  it('Bookmark spotlist', function() {
    cy.visit('http://localhost:3000/')
    cy.get('[src ="/static/media/heart-black.95287aa4.svg"]')
      .first()
      .click()
    cy.get('[src ="/static/media/heart-red.29c62a9f.svg"]')
  })
})
