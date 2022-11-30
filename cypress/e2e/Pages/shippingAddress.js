class provideInformation{
    ShippingAddress(){

        let city = "//select[@id='js--city']"
        let area = "//select[@id='js--area']"
        let givenAddress = "//body/div[@id='shipping-payment']/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[2]/fieldset[2]/textarea[1]"
        let payment = "//body/div[@id='shipping-payment']/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[1]/div[2]/label[1]"

        cy.wait(1000)
        cy.xpath(city).select('ঢাকা', { force: true });
        cy.xpath(area).select('রামপুরা', { force: true });
        //cy.xpath(address).click({ force: true });
        cy.xpath(givenAddress).type('রামপুরা, ঢাকা', { force: true });
        cy.xpath(payment).click({ force: true });

    }
}export default provideInformation