export class ShoppingCart {

    constructor () {
        this.preciostotal = '#price'
        this.buttonshowprice = '//button[@type="button"and@class="chakra-button css-15tuzzq"]'
        this.productprice = '#productPrice'
        this.gotocheckout = '[class="chakra-button css-17aoa8p"]'
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

    gotoCheckout (){
        return cy.get(this.gotocheckout)
    }
}