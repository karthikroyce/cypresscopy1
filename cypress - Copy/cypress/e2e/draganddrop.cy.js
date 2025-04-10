import { Runnable } from "mocha"



describe('template spec', () => {
  
    it('dragand drop', () => {
    
      cy.visit('https://demo.automationtesting.in/Static.html')
      cy.get('#angular').drag('div#droparea')
      cy.on('uncaught:exception',(err,Runnable)=>false)

     
      
      
      
      
  
    
    })
  })