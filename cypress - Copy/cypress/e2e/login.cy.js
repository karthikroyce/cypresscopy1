describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    
  it('datadrive method',()=>{
    cy.fixture('singleuser').then((data)=>{

            cy.get('[id="username"]').type(data.user)
            cy.get('[id="password"]').type(data.pass)
            cy.get('[id="submit"]').click()
        })
    })



  })
    




