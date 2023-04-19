export class ProductsPage {

    constructor () {

        this.cerrarmodal = '#closeModal'
        this.clickshoppingcart = '#goShoppingCart'
        this.blacktshirt = '#blacktshirt'
        this.button = 'button'
    }

    agregarProducto (producto) {
        cy.contains(producto).siblings(this.button).click()
    }

    cerrarModal () {
        cy.get(this.cerrarmodal).click()
    }

    clickShoppingcart () {
        cy.get(this.clickshoppingcart).click()
    }
}