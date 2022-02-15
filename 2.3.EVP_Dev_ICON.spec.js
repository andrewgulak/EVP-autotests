describe('Live EVP KE Test', () => {
  it('Visits the EVP', () => {
    cy.visit('https://devevpv2.wpengine.com/icon/')
  
 cy
  .get('#field114878186')
  .type('test').should('have.value', 'test')

 cy
  .get('#field114033759').first()
  .type('fake@email.com').should('have.value', 'fake@email.com')
 
 cy
  .get('#field114033757')
  .type('8007142020').should('have.value', '8007142020')

 cy
  .get('#field114058065').select('Cataract Evaluation')
  .should('have.value', 'Cataract Evaluation')

 cy
  .get('#field114058188').select('Denver')
  .should('have.value', 'Denver')

 cy
  .get('#field114835423').select('Monday')
  .should('have.value', 'Monday')
  
 cy
  .get('#field114836629_1').click()

 cy
  .get('#fsSubmitButton4492136').click()
  
 
 cy
  .url().should('eq','https://iconeyecare.com/thank-you/')


})
})
