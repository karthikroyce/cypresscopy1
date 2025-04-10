

describe('login',()=>{
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    // let testdata;
    // before(()=>{
    //     cy.fixture("multipleuser.json").then((data)=>{
    //         testdata=data
    //     })
    // })
    
    
  it('datadrive method',()=>{

        cy.fixture("multipleuser.json").then((data)=>{


        data.forEach((userdata)=>{
        cy.get('[id="username"]').type(userdata.user)
        cy.get('[id="password"]').type(userdata.pass)
        cy.get('[id="submit"]').click()
     
        if(userdata.user==="student" && userdata.pass==="Password123"){
            cy.contains('Congratulations')
            cy.get('.wp-block-button__link').click()

        }
        else{
            cy.contains('invalid')
        }
        })
        

        

    })
        

    })
})







    




