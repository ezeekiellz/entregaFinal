export class LoginPage {

    constructor () {
        this.usuarioInput = '#user';
        this.contraseñaInput = '#pass';
        this.loginButton = 'Log in';
    }

    escribirUsuario (usuario) {
        cy.get(this.usuarioInput).type(usuario);
    };

    escribirContraseña (contraseña) {
        cy.get(this.contraseñaInput).type(contraseña);
    };

    clickLogin () {
        cy.contains(this.loginButton, {timeout:10000}).click();
    }
}