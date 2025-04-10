

//Alert:

// cy.get('#alertbtn').click()
// cy.on('window:alert',(textvariable)=>{
//     expect(textvariable).to.eq('Hello , share this practice page and share your knowledge')
//     return true;
// })
cy.get('#confirmbtn').click()
cy.on('window:confirm',(textvariable)=>{
    expect(textvariable).to.eq('Hello , Are you sure you want to confirm?')
    return false;
})