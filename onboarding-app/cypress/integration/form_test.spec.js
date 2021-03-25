describe('Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('sanity check', () => {
        expect(true).to.equal(true);
    });

    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const checkboxInput = () => cy.get('input[name="termsAgreed"]');
    const submitBtn = () => cy.get('#submitBtn');
    const errors = () => cy.get('.errors');

    it('Testing Name Input', () => {
        nameInput()
            .should("have.value", "")
            .type('Testname')
            .should("have.value", "Testname");
    });

    it('Testing Email Input', () => {
        emailInput()
            .should("have.value", "")               //Set-up
            .type('Test@Test.com')                  //Act      
            .should("have.value", "Test@Test.com"); //Assert
    });

    it('Testing Password Input', () => {
        passwordInput()
            .should("have.value", "")
            .type('Testpassword')
            .should("have.value", "Testpassword");
    });

    it('Testing Terms of Service Checkbox', () => {
        checkboxInput().check();
        checkboxInput().uncheck();
    });

    it('Testing submit Form', () => {
        // Check empty and Type in name
        nameInput()
            .should("have.value", "")
            .type('Testname')
            .should("have.value", "Testname");
        // Check empty and Type in email
        emailInput()
            .should("have.value", "")
            .type('Test@Test.com')
            .should("have.value", "Test@Test.com");
        // Check empty and Type in password
        passwordInput()
            .should("have.value", "")
            .type('Testpassword')
            .should("have.value", "Testpassword");
        // check ToS
        checkboxInput().check();
        // submit form
        submitBtn().click();
    });

    it('Form validation of empty required inputs', () => {
        // Check empty and Type in name
        nameInput()
            .should("have.value", "")
            .type('Testname')
            .should("have.value", "Testname");

        // Leave email field empty
        emailInput()
            .should("have.value", "")
            .type('Test@Test.com')
            .should("have.value", "Test@Test.com")
            .clear();

        // Check empty and Type in password
        passwordInput()
            .should("have.value", "")
            .type('Testpassword')
            .should("have.value", "Testpassword");

        // check ToS
        checkboxInput().check();

        // check error for email is required

       cy.contains("email is required");
        
    })

})