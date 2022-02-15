describe('Live EVP KE Test', () => {
  it('Visits the EVP', () => {
    cy.visit('https://keeyecenters.com/')
  
 cy
  .get('#field114821379')
  .type('test').should('have.value', 'test')

 cy
  .get('#field114821381').first()
  .type('fake@email.com').should('have.value', 'fake@email.com')

 cy
  .get('#field114888323M').select('May')
  .should('have.value', 'May')
 cy
  .get('#field114888323D').select('15')
  .should('have.value', '15')
 cy
  .get('#field114888323Y').select('2000')
  .should('have.value', '2000')

 cy
  .get('#field114821382')
  .type('8007142020').should('have.value', '8007142020')

 cy
  .get('#field114834446').select('Monday')
  .should('have.value', 'Monday')

 cy
  .get('#field114834447').select('Late Morning')
  .should('have.value', 'Late Morning')

 cy
  .get('#field114821383').select('General Eyecare Exam')
  .should('have.value', 'General Eyecare Exam')

 cy
  .get('#field114821384').select('Dallas')
  .should('have.value', 'Dallas')

 cy
  .get('#field114821385')
  .type('qwerty').should('have.value', 'qwerty')

 cy
  .get('#field114888509')
  .type('qwerty').should('have.value', 'qwerty')
  
 cy
  .get('#field114821429_1').click()

 cy
  .get('#fsSubmitButton4514645').click()
  
 
 cy
  .url().should('eq','https://keeyecenters.com/thank-you/')


})
})
