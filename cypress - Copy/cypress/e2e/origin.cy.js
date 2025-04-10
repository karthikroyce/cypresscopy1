describe('origin',()=>{

    it('origin working',()=>{

        cy.visit('https://example.cypress.io')
        cy.get('a[href="/commands/querying"]').eq(2).click()
        cy.viewport('iphone-6')

        cy.origin('https://practicetestautomation.com/practice-test-login/',()=>{

            cy.wait(5000)
            cy.get('[id="username"]').type('student')
            cy.get('[id="password"]').type('Password123')
            cy.get('[id="submit"]').click()

        })
    })



})