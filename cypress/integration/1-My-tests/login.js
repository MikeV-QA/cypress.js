describe('Тестируем форму логина', function () {
    
    it('Позитивный кейс на верный лоигн и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
        })


        it('Проверка логики формы восстановления пароля', function () {
            cy.reload();
            cy.get('#forgotEmailButton').click();
            cy.get('#forgotForm').contains('Восстановите пароль');
            cy.get('#mailForgot').type('test@forgot.com');
            cy.get('#restoreEmailButton').click();
            cy.get('#message').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').click();
            cy.get('#form').contains('Форма логина');
        })

            it('Негативный кейс авторизации с неправильным паролем', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#pass').type('iLoveqas12dio21');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon');
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина');
            })
            it('Негативный кейс авторизации с неправильным логином', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('onetwo@dolnikov.com');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon');
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина');
            })
            it('Негативный кейс авторизации с невалидным логином', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type(' germandolnikov.com');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon');
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина');
            })
            it('Проверка на приведение к строчным буквам в логине', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Авторизация прошла успешно');
                cy.get('#exitMessageButton > .exitIcon');
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина');
                })
        
        
        })



