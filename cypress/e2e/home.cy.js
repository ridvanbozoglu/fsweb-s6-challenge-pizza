describe('Order Form', () => {
  beforeEach(() => {
    cy.visit('http://192.168.88.158:5173/order'); // Test edilecek sayfanın URL'si
  });

  it('extra bölümü ve isim doldurulmadan submit ediliyor mu?', () => {
    cy.get('button.submit-button').should('be.disabled');
  });

  it('form elemanında isim kısmı doldurulunca submit butonuna tıklanıyor mu?', () => {
    cy.get('input[name="custumerName"]').type('Rıdvan Bozoğlu');
    cy.get('button.submit-button').should('be.disabled');
  });

  it('Kısa bir isim girince uyarı veriyor mu?', () => {
    cy.get('input[name="custumerName"]').clear().type('Rı');
    cy.contains("İsim en az 3 karakter içermelidir!")
  });

  it('Malzeme seçmeyince uyarı veriyor mu?', () => {
    cy.contains("4 ile 10 tane arası extra malzeme seçmelisiniz!")
  });

  it('Rastgele 3 buton seçilince ve isim girilince submit buttonu disabled kalıyor mu?', () => {
    // Butonları seç
    cy.get('.order-form-checkbox button').then($buttons => {
  
      const buttonsArray = Cypress._.shuffle($buttons.toArray());
      
  
      const randomButtons = buttonsArray.slice(0, 3);
      
  
      randomButtons.forEach(button => {
        cy.wrap(button).click();
      });

      cy.get('input[name="custumerName"]').type('Rıdvan Bozoğlu');

      cy.get('button.submit-button').should('be.disabled');
    });
  });

  it('Formu dogru doldurdugumuzda form submit edilebiliyor mu?', () => {
    cy.get('.order-form-checkbox button').then($buttons => {
  
      const buttonsArray = Cypress._.shuffle($buttons.toArray());
      
  
      const randomButtons = buttonsArray.slice(0, 5);
      
  
      randomButtons.forEach(button => {
        cy.wrap(button).click();
      });

      cy.get('input[name="custumerName"]').type('Rıdvan Bozoğlu');

      cy.get('button.submit-button').click();
    });
  });



  it('Dogru bir şekilde request atıp response u dogru alıyormuyuz ve yönlendime yapıyor mu?', () => {
    cy.get('.order-form-checkbox button').then($buttons => {
  
      const buttonsArray = Cypress._.shuffle($buttons.toArray());
  
      const randomButtons = buttonsArray.slice(0, 5);
  
      randomButtons.forEach(button => {
        cy.wrap(button).click();
      });
    });
    cy.get('input[name="custumerName"]').type('Rıdvan Bozoğlu');
  
    cy.intercept('POST', 'https://reqres.in/api/ridvan').as('postOrder'); 

    cy.get('button.submit-button').click();

    cy.wait('@postOrder').then((interception) => {
      
      expect(interception.response.body).to.include({
        custumerName: "Rıdvan Bozoğlu",
      });;
    });
    cy.url().should('include', '/success');
  });

});
