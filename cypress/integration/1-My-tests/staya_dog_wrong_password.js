describe('Тестирование staya', function () {
    
    it('Попытка входа в аккаунт с неправильным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-polina-lepihina@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('PollyBolly11');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
         })
})