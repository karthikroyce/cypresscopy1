

class Login{

    Url_login(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')

    }

    

    Enterusername(Username){
        cy.get('[id="username"]').type(Username)


    }

    Enterpassword(Password){
        cy.get('[id="password"]').type(Password)


    }

    clickbutton(){
        cy.get('[id="submit"]').click()

    }

    

}

export default Login;