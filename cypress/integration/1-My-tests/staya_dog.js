describe('Тестирование staya', function () {
    
    it('Проваливаюсь в категорию поводки и ищу совпадение с названием Heatwave', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/catalog/dogs/lsh"] > .category-link__title').click();
        cy.contains('Black Camo');
        cy.end();
         })

     it('search something', function () {
        cy.visit('https://staya.dog/');
        })
})
