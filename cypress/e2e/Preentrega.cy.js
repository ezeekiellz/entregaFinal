/// <reference types="cypress" />
import { RegisterPage, registerPage } from "../support/Pages/registerpage";
import { LoginPage, loginPage } from "../support/Pages/loginPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage, productsPage } from "../support/Pages/producstPage";
import { ShoppingCart } from "../support/Pages/shoppingCart";


describe('Pre-Entrega', () => {
  let data;
  const registerPage = new RegisterPage
  const loginPage = new LoginPage
  const homePage = new HomePage
  const productPage = new ProductsPage
  const shoppingCart = new ShoppingCart

  before ('Before', () => {
    cy.fixture('datos').then((Almacendedatos) => {
      data = Almacendedatos;
    });
  });
  beforeEach('Loguearse como usuario', () => {
    cy.visit('')
    registerPage.clickIniciaSesion();
    loginPage.escribirUsuario(data.usuario.usuario);
    loginPage.escribirContraseña(data.usuario.contraseña);
    loginPage.clickLogin();
    homePage.clickOnlineshop();
  });
  
  it('Agregando productos y validando su nombre y sus precios', () => {
    productPage.agregarProducto(data.productos.BlackTShirt) ;  
    productPage.cerrarModal();
    productPage.agregarProducto(data.productos.WhitePants)  ;   
    productPage.cerrarModal();
    productPage.clickShoppingcart();
    shoppingCart.verificarProducto(data.productos.BlackTShirt).should('have.text',data.productos.BlackTShirt);
    shoppingCart.verificarProducto(data.productos.WhitePants).should('have.text',data.productos.WhitePants);
    shoppingCart.verificarPrecio(data.productos.BlackTShirt).should('have.text', `$${data.precios.BlackTShirt}`);
    shoppingCart.verificarPrecio(data.productos.WhitePants).should('have.text', `$${data.precios.WhitePants}`);
    shoppingCart.clickShowprice ();
    shoppingCart.precioTotal ().should('have.text',data.precios.BlackTShirt+data.precios.WhitePants);



  
    






    // shoppingCart.verificarProductoRedCap();
   

    
    



  });
});