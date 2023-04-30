/// <reference types="cypress" />

import { Checkoutpage } from "../support/Pages/checkoutPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/producstPage";
import { reciptPage } from "../support/Pages/reciptPage";
import { ShoppingCart } from "../support/Pages/shoppingCart";
import { MENSAJES_ERROR } from "../support/constantes";


describe('Pre-Entrega', () => {
  let data;
  const homePage = new HomePage; 
  const productPage = new ProductsPage; 
  const shoppingCart = new ShoppingCart; 
  const checkout = new Checkoutpage; 
  const reciptpage = new reciptPage;

  before ('Before', () => {
    cy.fixture('datos').then((Almacendedatos) => {
      data = Almacendedatos;
    });
  });

  beforeEach('Registro y Logueo usando API', () => {
    cy.RegistroAPI(Cypress.env('usuario'), Cypress.env('contraseña'),'Male','22','October','1990'); 
    cy.Login(Cypress.env('usuario'),Cypress.env('contraseña')); 
  });
  
  it('Agregando productos, validando su nombre, precios, monto total y verificando recipt', () => {
    cy.visit('')
    homePage.clickOnlineshop();
    productPage.agregarProducto(data.productos.BlackTShirt);  
    productPage.cerrarModal();
    productPage.agregarProducto(data.productos.WhitePants);   
    productPage.cerrarModal();
    productPage.clickShoppingcart();
    shoppingCart.verificarProducto(data.productos.BlackTShirt).should('have.text',data.productos.BlackTShirt);
    shoppingCart.verificarProducto(data.productos.WhitePants).should('have.text',data.productos.WhitePants);
    shoppingCart.verificarPrecio(data.productos.BlackTShirt).should('have.text', `$${data.precios.BlackTShirt}`);
    shoppingCart.verificarPrecio(data.productos.WhitePants).should('have.text', `$${data.precios.WhitePants}`);
    shoppingCart.clickShowprice ();
    shoppingCart.precioTotal ().should('have.text',data.precios.BlackTShirt+data.precios.WhitePants);
    shoppingCart.gotoCheckout().click(); 
    checkout.escribirFirstName(data.checkout.nombre); 
    checkout.escribirLastName(data.checkout.apellido); 
    checkout.escribirCardNumber(data.checkout.cardnumber); 
    checkout.clickpurchase(); 
    reciptpage.verificarnombre().should('have.text', MENSAJES_ERROR.PURCHASE_NAME);
    reciptpage.verificarproducto1().should('have.text',data.productos.BlackTShirt);
    reciptpage.verificarproducto2().should('have.text',data.productos.WhitePants);
    reciptpage.verificartarjeta().should('have.text',data.checkout.cardnumber);
    reciptpage.verificarmonto().should('have.text',MENSAJES_ERROR.PURCHASE_SPENT+` $${data.precios.BlackTShirt+data.precios.WhitePants}`);
    reciptpage.clickthankyoubtn();
    });

    after('Borrando el usuario creado mediante API', () => {
      cy.Deleteuser(Cypress.env('usuario'));
  });
});