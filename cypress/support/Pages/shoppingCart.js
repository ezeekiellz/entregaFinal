export class ShoppingCart {

    constructor () {
        this.preciostotal = '#price'
        this.buttonshowprice = '//button[@type="button"and@class="chakra-button css-15tuzzq"]'
        this.productprice = '#productPrice'
    };

    verificarProducto (producto) {
        return cy.contains(producto)  
    }

    verificarPrecio (producto) {
        return cy.contains(producto).siblings(this.productprice)
    }
 
    clickShowprice () {
        return cy.xpath(this.buttonshowprice).click();
    };

    precioTotal () {
        return cy.get(this.preciostotal)
    }
}