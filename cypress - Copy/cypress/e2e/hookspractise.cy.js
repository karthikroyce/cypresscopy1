describe('login',()=>{
    
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')

    })

  it('traditional login',()=>{
    
    cy.get('[id="username"]').type('student')
    cy.get('[id="password"]').type('Password123')
    cy.get('[id="submit"]').click()

  })

  it.only('3rd test case',()=>{
    
    cy.get('[id="username"]').type('studentincorrect')``
    cy.get('[id="password"]').type('Password123')
    cy.get('[id="submit"]').click()

  })
  

  it('traditional login',()=>{
    
    cy.get('[id="username"]').type('student')
    cy.get('[id="password"]').type('Passwordincorrect')
    cy.get('[id="submit"]').click()

  })

  

})
    
