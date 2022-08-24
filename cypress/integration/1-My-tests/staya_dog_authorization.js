describe('Тестирование staya', function () {
    
    it('Войти в аккаунт с помощью логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-polina-lepihina@qa.studio');
        cy.get('.auth-form > form > [type="password"]').type('PollyBolly1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
         })
})