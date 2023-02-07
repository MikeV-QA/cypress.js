describe('Тестируем магазин', function () {
    
    it('Позитивный кейс на добавление 2 позиций в корзину и оформление заказа', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
        cy.get('.cart-panel-content > .modal-header').contains('Ваша Корзина (0)');
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (3)');
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (4)');
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Михаил');
        cy.get('#billing_last_name').type('Дэлаверов');
        cy.get('#select2-billing_country-container').contains('Россия');
        cy.get('#billing_address_1').type('Тестовая 12');
        cy.get('#billing_city').type('Санкт-Петербург');
        cy.get('#billing_state').type('Ленинградская');
        cy.get('#billing_postcode').type('192168');
        cy.get('#billing_phone').type('88005553535');
        cy.get('#billing_email').type('German@dolnikov.com');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');

    })
})