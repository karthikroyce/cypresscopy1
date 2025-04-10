describe('template spec', () => {
  
    it('passes', () => {
    
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#mousehover').trigger('mouseover')
     cy.get('[href="#top"]').click({force:true})
   
     cy.wait(5000)
     cy.go('back')
     cy.wait(3000)
    cy.go('forward')


    })
})