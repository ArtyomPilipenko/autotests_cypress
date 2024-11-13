describe('Покупка аватара', function () {

   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // заходим на сайт

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // вводим валидную почту
        cy.get('#password').type('USER_PASSWORD'); // вводим валидный пароль
        cy.get('.auth__button').click(); // нажимаем кнопку войти

        cy.get('.header__container > .header__id').click(); // нажимаем на кнопку, в котором наш тренер ай ди

        cy.get('[href="/shop"]').click(); // нажимаем смену аватара

        cy.get('.available > button').first().click({ force: true }); // выбираем доступного тренера и нажимаем купить

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок 
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // вводим имя
        cy.get('.pay-btn').click(); // нажимаем оплатить

        cy.get('#cardnumber').type('56456'); // вводим смс код
        cy.get('.payment__submit-button').click(); // нажимаем отправить
        cy.get('.payment__adv').click(); // нажимаем вернуться в магазин

        cy.get('.header__img').click(); // нажимаем на кнопку с главным меню сайта

    })

})


// npx cypress run --spec cypress/e2e/bay_avatar.cy.js --browser chrome
