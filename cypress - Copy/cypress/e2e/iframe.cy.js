
///<reference types="cypress-iframe" />

describe('template spec', () => {
  
    it('passes', () => {
    
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //defines the iframe
      cy.frameLoaded('#courses-iframe')
      cy.iframe().contains('Practice').should('be.visible')
      cy.iframe().find('[href*="mentorship"]').eq(0).click()
      
  
     
      
    
    })
  })
  

  /* first plugins== iframe cypress plugins
  command.js== paste import
  frameloaded
  iframe().find()
  
  get----> find
  before that frameloaded define
  if not : ///<reference types="cypress-iframe" />*/
  