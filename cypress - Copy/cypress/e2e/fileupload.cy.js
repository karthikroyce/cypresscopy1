import { Runnable } from "mocha"






describe('template spec', () => {
  
    it('passes', () => {
    
      cy.visit('https://practice.expandtesting.com/upload')
      cy.get('#fileInput').attachFile('text.docx')
      cy.get('[data-testid="file-submit"]').click()
      cy.get('h1').should('have.text','File Uploaded!')


      cy.on('uncaught:exception',(err,runnable)=>false)
  
      
    
    })
  })
  
  