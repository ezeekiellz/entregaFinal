// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('RegistroAPI', (usuario, contraseña, gender, day, month, year) => { 
    cy.request({
        url: 'https://pushing-it.onrender.com/api/register',
        method: 'POST',
        body: {
            username: usuario,
            password: contraseña, 
            gender, 
            day, 
            month,
            year,     
        }
    }).then(respuesta =>{
        cy.log(respuesta);
        expect(respuesta.body.newUser.username).to.be.equal(usuario)
        expect(respuesta.statusText).to.be.equal('OK');
        expect(respuesta.status).to.be.equal(200);
        expect(respuesta.body.newUser.gender).to.be.equal(gender);
        expect(respuesta.body.newUser.year).to.be.equal(year);
        expect(respuesta.body.newUser.month).to.be.equal(month);
        expect(respuesta.isOkStatusCode).to.be.equal(true);
    });
    })


    Cypress.Commands.add('Login', (usuario, contraseña) => { 
        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body: {
                username: usuario,
                password: contraseña
            }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200);
            window.localStorage.setItem('token', respuesta.body.token);
            window.localStorage.setItem('user', respuesta.body.user.username);
        });
    })


    Cypress.Commands.add('Deleteuser', (usuario) => { 
    cy.request({
        url: `https://pushing-it.onrender.com/api/deleteuser/${usuario}`,
        method: 'DELETE'
    }).then(respuesta => {
        expect(respuesta.status).to.be.equal(200);
    });
})