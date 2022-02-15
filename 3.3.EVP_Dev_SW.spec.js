describe('Live EVP KE Test', () => {
  it('Visits the EVP', () => {
    cy.visit('https://devevpv2.wpengine.com/swagel/')
  
 cy
  .get('#field114878354')
  .type('test').should('have.value', 'test')

 cy
  .get('#field114836412').first()
  .type('fake@email.com').should('have.value', 'fake@email.com')
 
 cy
  .get('#field114836413')
  .type('8007142020').should('have.value', '8007142020')

 cy
  .get('#field114836414').select('Cataract Evaluation')
  .should('have.value', 'Cataract Evaluation')

 cy
  .get('#field114836415').select('Mesa')
  .should('have.value', 'Mesa')

 cy
  .get('#field114836416').select('Monday')
  .should('have.value', 'Monday')
  
 cy
  .get('#field114836542_1').click()

 cy
  .get('#fsSubmitButton4514997').click()
  
 
 cy
  .url().should('eq','https://eyeinstituteaz.com/thank-you/')


})
})
