class cart{
    AddCart(){
        let addtoCart = "//button[@product-id='17805']"
        let cartIcon = "//*[@id='cart-icon']"
        let placeOrder = "//a[@id='js-continue-to-shipping']"

        cy.xpath(addtoCart).click({ force: true });
        cy.xpath(cartIcon).click({ force: true });
        cy.xpath(placeOrder).click({ force: true });
    }
}export default cart