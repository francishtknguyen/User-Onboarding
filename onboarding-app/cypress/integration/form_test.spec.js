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
    const checkboxInput = () => cy.get('input[name="terms"]');

    it('Typing a Name', () => {
        nameInput()
            .should("have.value", "")
            .type('Francis')
            .should("have.value", "Francis");
    })
})