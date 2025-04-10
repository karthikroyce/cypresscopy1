import Login from "../fixtures/pom"


describe('page object',()=>{
    it('page object test',()=>{

        const userlogin=new Login();

        userlogin.Url_login()
        userlogin.Enterusername('student')
        userlogin.Enterpassword('Password123')
        userlogin.clickbutton()



    })
})
