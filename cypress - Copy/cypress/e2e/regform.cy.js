describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://practice.cydeo.com/registration_form')
    })
    
  it('datadrive method',()=>{
  

cy.fixture('regpage.json').then((randomuser)=>{


    cy.get('.form-control').eq(0).type(randomuser.first)
    cy.get('.form-control').eq(1).type(randomuser.second)
    cy.get('.form-control').eq(2).type(randomuser.username)
    cy.get('.form-control').eq(3).type(randomuser.email)
    cy.get('.form-control').eq(4).type(randomuser.password)
    cy.get('.form-control').eq(5).type(randomuser.phone)
    cy.get('[value="male"]').check().should('be.checked')
    cy.get('.form-control').eq(6).type(randomuser.dob)
    cy.get('.form-control').eq(7).select('MPDC').should('be.visible')
    cy.get('.form-control').eq(8).select('QA')
    cy.get('.form-check-input').eq(0).check().should('be.checked')
    cy.contains('Sign up').click({force:true})
    cy.contains("You've successfully completed registration!").should('be.visible')

    })
  

  })

})

    




