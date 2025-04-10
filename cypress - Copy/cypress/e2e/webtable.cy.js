describe('template spec', () => {
  
    it('passes', () => {
    
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('table>tbody>tr>td:nth-child(2)').each(($td)=>{
        if($td.text().includes('Bugzilla')){
            cy.wrap().then((expect)=>{
                const result=expect.text()
                cy.log(result)
            
            })
        }
      })
        




    })
})